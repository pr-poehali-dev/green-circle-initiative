/**
 * Business: Test function 06 - returns function number for load testing
 * Args: event with httpMethod; context with requestId
 * Returns: HTTP response with function number
 */

interface CloudFunctionEvent {
    httpMethod: string;
    headers: Record<string, string>;
    queryStringParameters?: Record<string, string>;
    body?: string;
    isBase64Encoded: boolean;
}

interface CloudFunctionContext {
    requestId: string;
    functionName: string;
    functionVersion: string;
    memoryLimitInMB: number;
}

export const handler = async (event: CloudFunctionEvent, context: CloudFunctionContext): Promise<any> => {
    const { httpMethod } = event;
    
    // Handle CORS OPTIONS request
    if (httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Max-Age': '86400'
            },
            body: ''
        };
    }
    
    return {
        statusCode: 200,
        headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        isBase64Encoded: false,
        body: JSON.stringify({ 
            functionNumber: 6,
            message: 'Test function 06',
            requestId: context.requestId,
            timestamp: new Date().toISOString()
        })
    };
};