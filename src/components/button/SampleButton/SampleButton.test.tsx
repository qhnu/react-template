import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import React from 'react'
import { SampleButton } from '.'

describe('Sample', () => {
  it('show button', () => {
    render(<SampleButton />)
    const buttonEl = screen.queryByRole('button')
    expect(buttonEl).toBeTruthy()
  })
})
