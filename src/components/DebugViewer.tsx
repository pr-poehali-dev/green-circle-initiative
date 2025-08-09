import React, { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function DebugViewer() {
  const [debugData, setDebugData] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchDebugInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch('/backend/func2url.json');
      const urls = await response.json();
      const debugUrl = urls.debug;
      
      if (debugUrl) {
        const debugResponse = await fetch(debugUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            test: 'data from frontend',
            timestamp: new Date().toISOString(),
            user_data: { id: 123, name: 'Test User' }
          })
        });
        
        const result = await debugResponse.json();
        setDebugData(result);
      }
    } catch (error) {
      console.error('Ошибка получения debug данных:', error);
    }
    setLoading(false);
  };

  const openDebugPage = async () => {
    try {
      const response = await fetch('/backend/func2url.json');
      const urls = await response.json();
      const debugUrl = urls.debug;
      
      if (debugUrl) {
        window.open(debugUrl, '_blank');
      }
    } catch (error) {
      console.error('Ошибка открытия debug страницы:', error);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-gray-900 text-green-400 rounded-lg p-6 font-mono">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400">
          🐛 Debug Viewer
        </h2>
        
        <div className="flex gap-4 mb-6">
          <button
            onClick={fetchDebugInfo}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              <Icon name="Bug" size={16} />
            )}
            Получить Debug JSON
          </button>
          
          <button
            onClick={openDebugPage}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Icon name="ExternalLink" size={16} />
            Открыть HTML Debug
          </button>
        </div>

        {debugData && (
          <div className="space-y-4">
            <div className="border border-green-600 rounded p-4">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">
                📋 EVENT Object
              </h3>
              <pre className="bg-black p-3 rounded overflow-auto text-sm">
                {JSON.stringify(debugData.event, null, 2)}
              </pre>
            </div>

            <div className="border border-green-600 rounded p-4">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">
                ⚙️ CONTEXT Info
              </h3>
              <pre className="bg-black p-3 rounded overflow-auto text-sm">
                {JSON.stringify(debugData.context_info, null, 2)}
              </pre>
            </div>

            <div className="border border-green-600 rounded p-4">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">
                📊 Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-red-400">Event Type:</span>{' '}
                  <span className="text-cyan-400">{debugData.event_type}</span>
                </div>
                <div>
                  <span className="text-red-400">Context Type:</span>{' '}
                  <span className="text-cyan-400">{debugData.context_type}</span>
                </div>
                <div>
                  <span className="text-red-400">Event Keys:</span>{' '}
                  <span className="text-cyan-400">{debugData.event_keys?.join(', ')}</span>
                </div>
                <div>
                  <span className="text-red-400">Remaining Time:</span>{' '}
                  <span className="text-cyan-400">
                    {debugData.context_info?.get_remaining_time_in_millis_result}ms
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}