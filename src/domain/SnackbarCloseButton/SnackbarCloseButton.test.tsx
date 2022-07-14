import { SnackbarProvider } from 'notistack'
import { describe, expect, it } from 'vitest'

import '@testing-library/jest-dom'

import { render, screen } from 'utils/test'
import Component, { testContent } from './SnackbarCloseButton'

describe('Test of rendering', () => {
  it(`should contains '${testContent}'`, () => {
    render(
      <SnackbarProvider>
        <Component id="test" />
      </SnackbarProvider>,
    )

    expect(screen.getByText(testContent)).toBeInTheDocument()
  })
})
