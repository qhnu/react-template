import { darken, lighten } from 'polished'
import React from 'react'
import { forwardRef } from 'react'
import styled, { CSSProp } from 'styled-components'

const color = 'hsl(0, 0%, 80%)'

const Button = styled.button<Pick<Props, 'fill'>>`
  display: ${(props) => (props.fill ? 'flex' : 'inline-flex')};
  align-items: center;
  justify-content: center;
  height: 3rem;
  padding: 1.5rem;
  cursor: pointer;
  background-color: ${color};
  border-radius: 5px;
  &:hover {
    background-color: ${darken(0.05, color)};
  }
  &[disabled] {
    color: ${lighten(0.2, 'black')};
    cursor: not-allowed;
    background-color: ${darken(0.2, color)};
    opacity: 1;
  }
`

interface Props {
  as?: React.ElementType
  css?: CSSProp
  disabled?: boolean
  onClick?: React.MouseEventHandler
  fill?: boolean
}

export const SampleButton: React.FC<Props> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

export const SampleButtonRef = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<Props>
>((hocProps, ref) => {
  const { children, ...props } = hocProps
  return (
    <Button {...props} ref={ref}>
      {children}
    </Button>
  )
})
SampleButtonRef.displayName = 'SampleButtonRef'
