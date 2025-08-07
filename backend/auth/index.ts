/**
 * Function: auth
 * Business: Авторизация пользователей по логину и паролю. Проверяет учетные данные без раскрытия их на клиенте. Возвращает токен при успешной авторизации для безопасного доступа к приложению.
 * Methods: POST - авторизация пользователя
 * Request: Body { username: string, password: string }
 * Response: Success(200) { success: true, token: string, username: string }, Error(401) { success: false, message: string }
 * Dependencies: нет внешних зависимостей
 * Env: нет переменных окружения
 */

interface CloudFunctionEvent {
  httpMethod: string;
  headers: Record<string, string>;
  body: string;
  queryStringParameters?: Record<string, string>;
}

interface CloudFunctionResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}

interface AuthRequest {
  username: string;
  password: string;
}

interface AuthResponse {
  success: boolean;
  token?: string;
  username?: string;
  message?: string;
}

// Хардкодные креды на backend (позже перенесем в БД)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: '1234'
};

// Простая генерация токена (в реальном проекте используйте JWT)
function generateToken(username: string): string {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2);
  return `${username}_${timestamp}_${randomString}`;
}

export const handler = async (event: CloudFunctionEvent): Promise<CloudFunctionResponse> => {
  const { httpMethod, body } = event;

  // CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight OPTIONS request
  if (httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'OK' })
    };
  }

  // Only allow POST method
  if (httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Method not allowed'
      } as AuthResponse)
    };
  }

  try {
    // Parse request body
    const authData: AuthRequest = JSON.parse(body || '{}');

    // Validate request data
    if (!authData.username || !authData.password) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Username and password are required'
        } as AuthResponse)
      };
    }

    // Check credentials
    if (authData.username === ADMIN_CREDENTIALS.username && 
        authData.password === ADMIN_CREDENTIALS.password) {
      
      // Generate token for successful login
      const token = generateToken(authData.username);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          token,
          username: authData.username
        } as AuthResponse)
      };
    } else {
      // Invalid credentials
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Invalid credentials'
        } as AuthResponse)
      };
    }

  } catch (error) {
    // Handle JSON parsing errors
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Invalid JSON in request body'
      } as AuthResponse)
    };
  }
};