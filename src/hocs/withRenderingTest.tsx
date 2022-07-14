import { ComponentType } from 'react'

import env from 'constants/env'

const withRenderingTest = <P extends Record<string, unknown>>(
  Component: ComponentType<P>,
  testContent: string,
): ComponentType<P> => {
  if (!env.testEnabled) {
    return Component
  }

  return (props: P) => (
    <>
      <Component {...props} />
      <div style={{ display: 'none' }}>{testContent}</div>
    </>
  )
}

export default withRenderingTest
