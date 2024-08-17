import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

//向 Telegram 应用程序通知小程序已准备好显示
WebApp.ready();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <TonConnectUIProvider manifestUrl="https://github.com/laifugroup/ton1/blob/main/tonconnect-manifest.json"
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/<YOUR_APP_NAME>'
      }}
    >
      <App />
    </TonConnectUIProvider>
  </StrictMode>,
)
