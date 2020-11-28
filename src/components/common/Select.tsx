import React from 'react'
import styled from 'styled-components'
import {Button} from './Button'
import {SelectIcon} from '../graphics'

interface Props {
    children: HTMLOptionElement[],
    options?: string,
}

export const Select = ({ children, ...rest } : Props) => {
    return (
        <Wrapper as="select" icon={SelectIcon} {...rest}>
           {children}
        </Wrapper>
    )
}

const Wrapper = styled(Button)`
    
`