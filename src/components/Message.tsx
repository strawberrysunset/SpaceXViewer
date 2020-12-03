import React from 'react'
import styled, {css} from 'styled-components'
import {rem} from 'polished'

interface Props {
    children: string,
    isError? : boolean
}

export const Message = ({children, isError, ...rest} : Props) => {
    return (
        <Wrapper {...rest}>
            <Text isError={isError}>{children}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 ${rem(2)} ${rem(5)} ${props => props.theme.colors.neutral[200]};
    padding: ${rem(24)} ${rem(16)};
    border-radius: ${rem(10)};
    background: ${props => props.theme.colors.primary[200]};
`

const Text = styled.p<{ isError?: boolean }>`
    text-align: center;
    font-size: ${props => props.theme.typeScale[100]};
    color: ${props => props.theme.colors.neutral[300]};
    width: ${rem(727)};
    font-weight: 700;
    ::before {
        content: ${props => props.isError ? 'Error: ' : ''};
    }
`