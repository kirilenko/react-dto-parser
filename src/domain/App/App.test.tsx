import { describe, expect, it } from 'vitest'

import '@testing-library/jest-dom'

import { render, screen } from 'utils/test'
import Component, { testContent } from './App'

describe('Test of rendering', () => {
  it(`should contains '${testContent}'`, () => {
    render(<Component />)

    expect(screen.getByText(testContent)).toBeInTheDocument()
  })
})
