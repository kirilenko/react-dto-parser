import { QueryClient } from 'react-query'

const defaultOptions = { queries: { refetchOnWindowFocus: false } }
export const queryClient = new QueryClient({ defaultOptions })
