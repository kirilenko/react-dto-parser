import { useQuery, UseQueryResult } from 'react-query'

import casesApi, { CasesModel, queryKey } from 'api/cases'
import useApiListeners from 'hooks/useApiListeners'

type Hook = () => UseQueryResult<CasesModel, Error>
export const useApiForCasesReading: Hook = () => {
  const { onError, onSuccess } = useApiListeners({ queryKey })

  return useQuery(queryKey, casesApi.fetchCases, {
    onError,
    onSuccess,
  }) as UseQueryResult<CasesModel, Error>
}
