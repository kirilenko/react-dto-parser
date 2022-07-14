import { AxiosInstance, AxiosResponse } from 'axios'

import { apiConfigs, ApiQueryKey } from 'api/config'
import { getAxiosInstance } from 'utils/axios'
import { CasesDto } from './cases.dto'
import { CasesModel } from './cases.model'
import { casesParser } from './cases.parser'

export const queryKey: ApiQueryKey = 'casesReading'

// TODO: create custom error for separation fetching- and parsing-error (in useApiListeners):
const casesApi = Object.freeze({
  async fetchCases(): Promise<CasesModel> {
    const url = apiConfigs.casesReading?.url
    if (!url) {
      throw Error()
    }

    const axiosInstance: AxiosInstance = getAxiosInstance(
      apiConfigs.casesReading!,
    )

    const response: AxiosResponse<CasesDto> = await axiosInstance.get(url)
    const { cases = null } = casesParser(response.data)

    if (!Array.isArray(cases)) {
      throw Error()
    }

    return cases
  },
})

export default casesApi
