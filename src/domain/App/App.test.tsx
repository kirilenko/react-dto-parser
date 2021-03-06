import { describe, expect, it } from 'vitest'

import '@testing-library/jest-dom'

import TestWrapper from 'components/TestWrapper'
import { render, screen } from 'utils/test'
import Component, { testContent } from './App'

describe('Test of rendering', () => {
  it(`should contains '${testContent}'`, () => {
    render(
      <TestWrapper>
        <Component />
      </TestWrapper>,
    )

    expect(screen.getByText(testContent)).toBeInTheDocument()
  })
})
