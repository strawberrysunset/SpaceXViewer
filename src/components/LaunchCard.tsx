import React from 'react'
import styled from 'styled-components'
import {rem} from 'polished'

interface Props {
    number: number,
    name: string,
    rocket: string,
    date: string | undefined
}

export const LaunchCard = ({ number, name, date, rocket, ...rest } : Props) => {
    return (
        <Wrapper {...rest}>
            <Number>{number}</Number>
            <Name>{name}</Name>
            <MetaInfo>
                <Date>{date}</Date>
                <Rocket>{rocket}</Rocket>
            </MetaInfo>
        </Wrapper>
    )
}

const Wrapper = styled.li`
    display: flex;
    align-items: center;
    box-shadow: 0 ${rem(2)} ${rem(5)} ${props => props.theme.colors.neutral[200]};
    border-radius: ${rem(10)};
    padding: ${rem(12.5)} ${rem(16)};
    padding-left: ${rem(32)};
    white-space: nowrap;
    background: ${props => props.theme.colors.neutral[300]};
    width: ${rem(727)};
    min-width: ${rem(320)};
    :hover {
        box-shadow: 0 ${rem(2)} ${rem(5)} ${props => props.theme.colors.neutral[100]};
        transition: 0.3s;
    }
`

const Number = styled.p`
    ::before {
        content: '#';
    }
    font-weight: 500;
    font-size: ${props => props.theme.typeScale[500]};
    width: ${rem(40)};
`

const Name = styled.p`
    font-size: ${props => props.theme.typeScale[400]};
    font-weight: 500;
    margin: 0 ${rem(68)};
    white-space: pre-wrap;
`

const Rocket = styled.p`
    font-weight: 700;
    font-size: ${props => props.theme.typeScale[300]};
    margin-top: ${rem(7.16)};
`

const Date = styled.p``

const MetaInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-left: auto;
`