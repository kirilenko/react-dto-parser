import { FC, PropsWithChildren } from 'react'
import { QueryClientProvider } from 'react-query'
import { SnackbarProvider } from 'notistack'

import { queryClient as client } from 'utils/query'

const TestWrapper: FC<PropsWithChildren> = ({ children }) => (
  <SnackbarProvider>
    <QueryClientProvider {...{ client }}>{children}</QueryClientProvider>
  </SnackbarProvider>
)

export default TestWrapper
