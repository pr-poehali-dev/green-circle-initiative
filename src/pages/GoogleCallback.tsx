import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleAuth } from '@/components/extensions/google-auth/useGoogleAuth';

const GOOGLE_AUTH_URL = 'https://devfunctions.poehali.dev/adaab5b6-da3c-4890-8208-f5a5c0c889bd';

export default function GoogleCallback() {
  const navigate = useNavigate();
  const auth = useGoogleAuth({
    apiUrls: {
      authUrl: `${GOOGLE_AUTH_URL}?action=auth-url`,
      callback: `${GOOGLE_AUTH_URL}?action=callback`,
      refresh: `${GOOGLE_AUTH_URL}?action=refresh`,
      logout: `${GOOGLE_AUTH_URL}?action=logout`,
    },
  });

  useEffect(() => {
    console.log('[Google Callback] Component mounted');
    console.log('[Google Callback] Full URL:', window.location.href);
    
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const error = urlParams.get('error');
    
    console.log('[Google Callback] Parsed params:', { 
      code: code?.slice(0, 20), 
      state, 
      error 
    });
    
    if (error) {
      console.error('[Google Callback] OAuth error:', error);
      navigate('/auth');
      return;
    }
    
    if (code) {
      console.log('[Google Callback] Code found, calling handleCallback...');
      auth.handleCallback(urlParams).then((success) => {
        console.log('[Google Callback] handleCallback result:', success);
        if (success) {
          console.log('[Google Callback] Success! Navigating to /');
          navigate('/');
        } else {
          console.log('[Google Callback] Failed! Navigating to /auth');
          navigate('/auth');
        }
      }).catch((err) => {
        console.error('[Google Callback] handleCallback error:', err);
        navigate('/auth');
      });
    } else {
      console.log('[Google Callback] No code found, navigating to /auth');
      navigate('/auth');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-muted-foreground">Авторизация через Google...</p>
      </div>
    </div>
  );
}
