import { QueryStatus } from 'react-query'
import axios, { AxiosInstance } from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

import env from 'constants/env'

const serverTypes = ['back', 'mock'] as const
type ServerType = typeof serverTypes[number]

type AxiosInstances = Record<ServerType, AxiosInstance>
const axiosInstances: AxiosInstances = serverTypes.reduce(
  (acc, cur: ServerType) => {
    acc[cur] = axios.create({
      headers: { 'Content-type': 'application/json' },
    })

    return acc
  },
  {} as AxiosInstances,
)

export type ApiMessage = Partial<Record<QueryStatus, string>>

export type AxiosApiConfig = {
  getMessages: (p?: string | number) => ApiMessage
  mock: {
    enabled: boolean
  }
}

export const getAxiosInstance = ({ mock }: AxiosApiConfig): AxiosInstance =>
  !env.mocksEnabled || !mock.enabled ? axiosInstances.back : axiosInstances.mock

export const mockAdapter = new AxiosMockAdapter(axiosInstances.mock)
