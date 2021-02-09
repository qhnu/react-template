import {} from 'react'

declare module 'react' {
  interface Attributes {
    ['data-testid']?: string
  }
}
