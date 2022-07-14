import { FC, memo } from 'react'
import IconClose from '@mui/icons-material/Close'
import { IconButton as MuiIconButton } from '@mui/material'
import { SnackbarKey, useSnackbar } from 'notistack'

import withRenderingTest from 'hocs/withRenderingTest'
import log from 'utils/log'

type SnackbarCloseButtonProps = { id: SnackbarKey }

const SnackbarCloseButton: FC<SnackbarCloseButtonProps> = ({ id }) => {
  log(`SnackbarCloseButton-${id}.render`)()

  const { closeSnackbar } = useSnackbar()

  return (
    <MuiIconButton onClick={() => closeSnackbar(id)}>
      <IconClose />
    </MuiIconButton>
  )
}

export const testContent = 'SnackbarCloseButton test content'
export default withRenderingTest(memo(SnackbarCloseButton), testContent)
