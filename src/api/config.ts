import { AxiosApiConfig } from 'utils/axios'

const apiQueryKeys = ['casesReading'] as const
export type ApiQueryKey = typeof apiQueryKeys[number]

type ApiConfig = AxiosApiConfig & {
  mock: { timeout?: number }
  url: string
}

const defaultMockConfig = {
  enabled: true,
  timeout: 0,
}

export const apiConfigs: Record<ApiQueryKey, ApiConfig> = {
  casesReading: {
    getMessages: () => ({
      error: 'Error by cases-loading or -parsing',
      success: 'Cases list has been successfully uploaded',
    }),
    mock: { ...defaultMockConfig },
    url: '/api/v1/cases',
  },
}
