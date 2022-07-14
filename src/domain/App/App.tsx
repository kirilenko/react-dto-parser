import { FC } from 'react'
import cn from 'classnames'

import env from 'constants/env'
import withRenderingTest from 'hocs/withRenderingTest'
import log from 'utils/log'

import { StyledApp } from './App.style'

const App: FC = () => {
  log('App.render')()

  return (
    <StyledApp className={cn({ __App__: env.debugClassNameEnabled })}>
      <h1>App</h1>
    </StyledApp>
  )
}

export const testContent = 'App test content'
export default withRenderingTest(App, testContent)
