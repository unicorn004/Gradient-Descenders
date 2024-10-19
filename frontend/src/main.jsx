import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import store from './store.jsx'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
      {/* <MantineProvider>
        <App />
      </MantineProvider> */}
      <App />
    </Provider>
  </StrictMode>,
)
