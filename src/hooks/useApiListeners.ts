import { useSnackbar } from 'notistack'

import { apiConfigs, ApiQueryKey } from 'api'
import log from 'utils/log'

const getDefaultErrorMessage = (queryKey: string) =>
  `Error by data-receiving, -posting or -parsing of the ${queryKey}`

type ApiListener = () => void

const useApiListeners = (props: {
  queryKey: ApiQueryKey
  queryKeyParams?: (string | number)[]
}): { onError: ApiListener; onSuccess: ApiListener } => {
  const { queryKey, queryKeyParams = [] } = props

  const { enqueueSnackbar } = useSnackbar()

  const messages = apiConfigs[queryKey].getMessages(...queryKeyParams)

  const loggerKeyPrefix = `API.${
    queryKey + (queryKeyParams.length ? '.' : '') + queryKeyParams.join('.')
  }`

  return {
    onError() {
      log(`${loggerKeyPrefix}.error`, 'error')()

      enqueueSnackbar(messages.error || getDefaultErrorMessage(queryKey), {
        variant: 'error',
      })
    },

    onSuccess() {
      log(`${loggerKeyPrefix}.success`, 'success')()

      messages.success &&
        enqueueSnackbar(messages.success, { variant: 'success' })
    },
  }
}

export default useApiListeners
