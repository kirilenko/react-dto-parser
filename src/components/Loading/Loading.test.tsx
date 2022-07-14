import { describe, expect, it } from 'vitest'

import '@testing-library/jest-dom'

import { render, screen } from 'utils/test'
import Component, { testContent } from './Loading'

describe('Test of rendering', () => {
  it(`should contains '${testContent}'`, () => {
    render(<Component id="test" />)

    expect(screen.getByText(testContent)).toBeInTheDocument()
  })
})
