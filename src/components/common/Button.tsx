import React from 'react'
import styled, { AnyStyledComponent } from 'styled-components'
import {rem} from 'polished'

interface Props {
    children: React.ReactChildren,
    icon?: AnyStyledComponent,
}

export const Button = ({ children, icon: Icon, ...rest } : Props) => {
    return (
        <Wrapper {...rest}>
            <Text>{children}</Text>
            {Icon && <Icon css={`width: ${rem(16)}; height: ${rem(16)};`}/>}
        </Wrapper>
    )
}


const Wrapper = styled.button`
    border: none;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    background: ${props => props.theme.colors.primary};
    :hover {
        background: ${props => props.theme.colors.primary[200]};
    }
    :focus {
        background: ${props => props.theme.colors.primary[300]};
    }
`

const Text = styled.span`
    color: ${props => props.theme.colors.neutral[400]};
`