import React from 'react'
import styled, {css} from 'styled-components'
import { LaunchCard } from './LaunchCard'

interface Props {
    launchData: [],
    isFetching?: boolean,
    isError?: boolean,
    errorMsg?: string,
}

export const LaunchCardList = ({launchData = [], isFetching, isError, errorMsg} : Props) => {

    if (isError) return <Message error={true}>{errorMsg}</Message>
    if (isFetching) return <Message>Fetching Data...</Message>

    return (
        <ListWrapper>
            {launchData.map((launch : any, idx : number) => (
                <LaunchCard 
                    as="li"
                    number={idx}
                    vehicle={launch.vehicle}
                    date={launch.date}
                    mission={launch.mission}
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
`

const ListWrapper = styled.ol`
    list-style: none;
`