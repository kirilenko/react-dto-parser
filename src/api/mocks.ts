import { apiConfigs, ApiQueryKey } from 'api/config'

const modules: Partial<Record<ApiQueryKey, () => Promise<unknown>>> = {
  casesReading: () => import('./cases/cases.mocks'),
}

const loadMock = (): Promise<unknown[]> =>
  Promise.all(
    (Object.keys(modules) as ApiQueryKey[])
      .filter((key) => apiConfigs[key]?.mock.enabled)
      .map((key) => (modules[key] ?? (() => null))()),
  )

export default loadMock
