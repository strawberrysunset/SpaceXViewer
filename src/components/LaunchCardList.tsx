import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { LaunchCard } from './LaunchCard'
import { Message } from './Message'

interface Props {
  launches: any
  isFetching?: boolean
  isError?: boolean
  error?: any
}

export const LaunchCardList = ({
  launches,
  isFetching,
  isError,
  error,
}: Props) => {
  if (isError)
    return (
      <Message role="alert" isError={true}>
        {error?.message}
      </Message>
    )
  if (isFetching) return <Message role="alert">Fetching Data...</Message>

  return (
    <ListWrapper>
      {launches.map((launch: any) => (
        <LaunchCard
          key={launch.id}
          number={launch.flightNumber}
          name={launch.name}
          rocket={launch.rocket}
          date={moment(launch.date).format('Do MMM YYYY')}
        />
      ))}
    </ListWrapper>
  )
}

const ListWrapper = styled.ol`
  list-style: none;
  display: grid;
  grid-gap: ${rem(8)};
`
