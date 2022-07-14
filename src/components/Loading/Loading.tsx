import { FC } from 'react'

import withRenderingTest from 'hocs/withRenderingTest'
import log from 'utils/log'

import { StyledLoading } from './Loading.style'

type LoadingProps = {
  id: string
}

const Loading: FC<LoadingProps> = ({ id }) => {
  log(`Loading-${id}.render`)()

  return <StyledLoading />
}

export const testContent = 'Loading test content'
export default withRenderingTest(Loading, testContent)
