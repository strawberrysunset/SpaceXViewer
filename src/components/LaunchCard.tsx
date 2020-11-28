import React from 'react'
import styled from 'styled-components'

interface Props {
    number: number,
    name: string,
    rocket: string,
    date: string
}

export const LaunchCard = ({ number, name, date, rocket, ...rest } : Props) => {
    return (
        <Wrapper {...rest}>
            <Number>{number}</Number>
            <Name>{name}</Name>
            <Info>
                <Date>{date}</Date>
                <Rocket>{rocket}</Rocket>
            </Info>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    box-shadow: 2rem 2rem 2rem ${props => props.theme.colors.neutral[100]};
`

const Number = styled.span`
    ::before {
        content: '#'
    }
`

const Name = styled.div`

`

const Rocket = styled.div`
    
`

const Date = styled.p`

`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`