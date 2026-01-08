import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVkAuth } from '@/components/extensions/vk-auth/useVkAuth';

const VK_AUTH_URL = 'https://devfunctions.poehali.dev/67bc37cf-6daa-4819-ae08-caed18bfe87f';

export default function VkCallback() {
  const navigate = useNavigate();
  const auth = useVkAuth({
    apiUrls: {
      authUrl: `${VK_AUTH_URL}?action=auth-url`,
      callback: `${VK_AUTH_URL}?action=callback`,
      refresh: `${VK_AUTH_URL}?action=refresh`,
      logout: `${VK_AUTH_URL}?action=logout`,
    },
  });

  useEffect(() => {
    console.log('[VK Callback] Component mounted');
    console.log('[VK Callback] Full URL:', window.location.href);
    
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const deviceId = urlParams.get('device_id');
    const state = urlParams.get('state');
    const type = urlParams.get('type');
    
    console.log('[VK Callback] Parsed params:', { code: code?.slice(0, 20), deviceId, state, type });
    
    if (code) {
      console.log('[VK Callback] Code found, calling handleCallback...');
      auth.handleCallback(urlParams).then((success) => {
        console.log('[VK Callback] handleCallback result:', success);
        if (success) {
          console.log('[VK Callback] Success! Navigating to /');
          navigate('/');
        } else {
          console.log('[VK Callback] Failed! Navigating to /auth');
          navigate('/auth');
        }
      }).catch((err) => {
        console.error('[VK Callback] handleCallback error:', err);
        navigate('/auth');
      });
    } else {
      console.log('[VK Callback] No code found, navigating to /auth');
      navigate('/auth');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-muted-foreground">Авторизация через ВКонтакте...</p>
      </div>
    </div>
  );
}