import React from 'react'
import styled from 'styled-components'
import { Button } from './common'
import { SiteLogo, RefreshIcon } from './graphics'
import { useLaunchData } from '../api'
import { rem } from 'polished'

export const Header = () => {
  const { refetch } = useLaunchData()

  return (
    <Wrapper>
      <SiteLogo />
      <RefreshButton
        aria-label="Reload launch data."
        icon={RefreshIcon}
        onClick={refetch}
      >
        Reload Data
      </RefreshButton>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
`

const RefreshButton = styled(Button)`
  border-radius: ${rem(32)} 0 0 ${rem(32)};
  margin-left: ${rem(24)};
`
