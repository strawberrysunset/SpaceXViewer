import React from 'react'
import { Button } from './Button'
import { SelectIcon } from '../graphics/icons'

interface Props {
  children: any
  options?: string
}

export const Select = ({ children, ...rest }: Props) => {
  return (
    <Button as="select" icon={SelectIcon} {...rest}>
      {children}
    </Button>
  )
}
