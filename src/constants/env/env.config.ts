export const envList = [
  'VITE_DEBUG_CLASSNAME_ENABLED',
  'VITE_DEBUG_LOG_ENABLED',
  'VITE_MOCKS_ENABLED',
  'VITE_REACT_QUERY_DEVTOOLS_ENABLED',
  'VITE_TEST_ENABLED',
  'VITE_TIMESTAMP',
] as const

export type EnvListItem = typeof envList[number]

const envKeys = [
  'debugClassNameEnabled',
  'debugLogEnabled',
  'mocksEnabled',
  'reactQueryDevtoolsEnabled',
  'testEnabled',
  'timestamp',
] as const

export type EnvKey = typeof envKeys[number]

type EnvMapItem = {
  name: EnvKey
  type: 'boolean' | 'string' | 'number' | 'null'
}

export const envConfig: Record<EnvListItem, EnvMapItem> = {
  VITE_DEBUG_CLASSNAME_ENABLED: {
    name: 'debugClassNameEnabled',
    type: 'boolean',
  },
  VITE_DEBUG_LOG_ENABLED: {
    name: 'debugLogEnabled',
    type: 'boolean',
  },
  VITE_MOCKS_ENABLED: {
    name: 'mocksEnabled',
    type: 'boolean',
  },
  VITE_REACT_QUERY_DEVTOOLS_ENABLED: {
    name: 'reactQueryDevtoolsEnabled',
    type: 'boolean',
  },
  VITE_TEST_ENABLED: {
    name: 'testEnabled',
    type: 'boolean',
  },
  VITE_TIMESTAMP: {
    name: 'timestamp',
    type: 'string',
  },
}
