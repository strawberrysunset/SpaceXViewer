import { rem } from 'polished'
import React from 'react'
import styled, {css} from 'styled-components'
import moment from 'moment'
import { LaunchCard } from './LaunchCard'

interface Props {
    launches: any,
    isFetching?: boolean,
    isError?: boolean,
    error?: any
}

export const LaunchCardList = ({launches, isFetching, isError, error} : Props) => {

    if (isError) return <Message error={true}>{error?.message}</Message>
    if (isFetching) return <Message>Fetching Data...</Message>

    return (
        <ListWrapper>
            {launches.map((launch : any) => (
                <LaunchCard 
                    key={launch.id}
                    number={launch.flightNumber}
                    name={launch.name}
                    rocket={launch.rocket}
                    date={moment(launch.date).format("Do MMM YYYY")}
                />
            ))}
        </ListWrapper>
    )
}

const Message = styled.p<{ error?: boolean }>`
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.typeScale[100]};
    ${props => props.error && css`
        color: ${props.theme.colors.primary[100]};
    `}
    margin-top: ${rem(48)};
`

const ListWrapper = styled.ol`
    list-style: none;
    display: grid;
    grid-gap: ${rem(8)};
`