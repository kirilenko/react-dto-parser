import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { SnackbarProvider } from 'notistack'

import env from 'constants/env'
import SnackbarCloseButton from 'domain/SnackbarCloseButton'
import { queryClient as client } from 'utils/query'
import App from './domain/App'

import './main.css'

// eslint-disable-next-line
;(async () => {
  if (env.mocksEnabled) {
    const { default: loadMock } = await import('api/mocks')
    await loadMock()
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <SnackbarProvider
        action={(key) => <SnackbarCloseButton id={key} />}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        dense
        hideIconVariant
        maxSnack={7}
      >
        <QueryClientProvider {...{ client }}>
          <App />
          {env.reactQueryDevtoolsEnabled && <ReactQueryDevtools />}
        </QueryClientProvider>
      </SnackbarProvider>
      <span style={{ display: 'none' }}>{env.timestamp}</span>
    </StrictMode>,
  )
})()
