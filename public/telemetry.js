// Telemetry script for injecting into iframe to capture logs and errors
(function () {
    "use strict";

    // Check if already initialized
    if (window.__telemetryInitialized) return;
    window.__telemetryInitialized = true;

    // Store original console methods
    const originalConsole = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        info: console.info,
        debug: console.debug,
    };

    // Send telemetry data to parent
    function sendToParent(data) {
        try {
            window.parent.postMessage(
                {
                    type: "telemetry-log",
                    data: data,
                    source: "iframe-telemetry",
                },
                "*"
            );
        } catch (e) {
            // Fail silently to avoid infinite loops
        }
    }

    // Format arguments for logging
    function formatArgs(args) {
        return Array.from(args).map(arg => {
            if (typeof arg === 'object') {
                try {
                    return JSON.stringify(arg, null, 2);
                } catch {
                    return String(arg);
                }
            }
            return String(arg);
        }).join(' ');
    }

    // Get source location from stack
    function getSource() {
        const stack = new Error().stack;
        if (!stack) return 'iframe:unknown';
        
        const lines = stack.split('\n');
        // Skip first 3 lines (Error, getSource, console method)
        const relevantLine = lines[3];
        
        if (!relevantLine) return 'iframe:unknown';
        
        // Extract file and line number
        const match = relevantLine.match(/at\s+(?:.*?\s+)?\(?(.+?):(\d+):(\d+)\)?/);
        if (match) {
            const [, file, line, column] = match;
            const fileName = file.split('/').pop()?.replace(/\?.*$/, '') || file;
            return `iframe:${fileName}:${line}:${column}`;
        }
        
        return 'iframe:unknown';
    }

    // Override console methods
    ['log', 'warn', 'error', 'info', 'debug'].forEach(level => {
        console[level] = function(...args) {
            // Call original method
            originalConsole[level].apply(console, args);
            
            // Send to parent
            sendToParent({
                timestamp: Date.now(),
                level: level,
                message: formatArgs(args),
                source: getSource(),
                args: args
            });
        };
    });

    // Intercept global errors
    window.addEventListener('error', function(event) {
        sendToParent({
            timestamp: Date.now(),
            level: 'error',
            message: `${event.message} at ${event.filename}:${event.lineno}:${event.colno}`,
            source: `iframe:${event.filename?.split('/').pop() || 'unknown'}:${event.lineno}:${event.colno}`,
            args: [event.message, event.filename, event.lineno, event.colno]
        });
    });

    // Intercept unhandled promise rejections
    window.addEventListener('unhandledrejection', function(event) {
        sendToParent({
            timestamp: Date.now(),
            level: 'error',
            message: `Unhandled Promise Rejection: ${event.reason}`,
            source: getSource(),
            args: ['Unhandled Promise Rejection:', event.reason]
        });
    });

    // Intercept fetch errors
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
        return originalFetch.apply(this, args)
            .then(response => {
                // Log HTTP errors
                if (!response.ok) {
                    sendToParent({
                        timestamp: Date.now(),
                        level: 'error',
                        message: `HTTP ${response.status} ${response.statusText}: ${args[0]}`,
                        source: getSource(),
                        args: [`HTTP ${response.status}`, response.statusText, args[0]]
                    });
                }
                return response;
            })
            .catch(error => {
                sendToParent({
                    timestamp: Date.now(),
                    level: 'error',
                    message: `Fetch error: ${error.message} for ${args[0]}`,
                    source: getSource(),
                    args: ['Fetch error:', error.message, args[0]]
                });
                throw error;
            });
    };

})();