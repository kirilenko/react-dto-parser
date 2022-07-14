import { FC, memo, useCallback } from 'react'
import cn from 'classnames'

import { CasesItemModel } from 'api/cases'
import Loading from 'components/Loading'
import env from 'constants/env'
import withRenderingTest from 'hocs/withRenderingTest'
import { useApiForCasesReading } from 'hooks/useApiForCasesReading'
import log from 'utils/log'

import { StyledApp, StyledCasesItem } from './App.style'

const App: FC = () => {
  const { data: cases, isLoading } = useApiForCasesReading()

  const renderCase = useCallback(
    ({ id, subject, timestamp }: CasesItemModel) => (
      <StyledCasesItem key={id}>{`${timestamp.format(
        'DD.MM.YYYY HH:mm',
      )} - ${subject}`}</StyledCasesItem>
    ),
    [],
  )

  log(`App-${isLoading ? 'loading' : 'fetched'}.render`)()

  return (
    <>
      <StyledApp className={cn({ __App__: env.debugClassNameEnabled })}>
        <h1>App</h1>
        <ul>{(cases || []).map(renderCase)}</ul>
      </StyledApp>
      {isLoading && <Loading id="Cases" />}
    </>
  )
}

export const testContent = 'App test content'
export default withRenderingTest(memo(App), testContent)
