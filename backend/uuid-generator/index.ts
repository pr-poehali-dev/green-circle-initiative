/**
 * Business: Generate random UUID for unique identifiers
 * Args: event with httpMethod; context with requestId
 * Returns: HTTP response with random UUID
 */

import { randomUUID } from 'crypto';

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

interface ApiResponse {
    statusCode: number;
    headers: Record<string, string>;
    body: string;
    isBase64Encoded?: boolean;
}

export const handler = async (event: CloudFunctionEvent, context: CloudFunctionContext): Promise<ApiResponse> => {
    const { httpMethod } = event;
    
    // Handle CORS OPTIONS request
    if (httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400'
            },
            body: ''
        };
    }
    
    if (httpMethod === 'GET') {
        const uuid = randomUUID();
        
        return {
            statusCode: 200,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            isBase64Encoded: false,
            body: JSON.stringify({ 
                uuid,
                timestamp: new Date().toISOString(),
                requestId: context.requestId
            })
        };
    }
    
    return {
        statusCode: 405,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        isBase64Encoded: false,
        body: JSON.stringify({ error: 'Method not allowed' })
    };
};