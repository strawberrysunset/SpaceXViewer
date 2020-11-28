import React from 'react'
import styled from 'styled-components'
import SpaceXLogo from '../assets/spacex-logo.png'
import {rem} from 'polished'

export const SiteLogo = () => {
    return (
        <Wrapper>
            <Logo src={SpaceXLogo} alt="SpaceX logo"/>
            <Text>Launches</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: ${rem(178.75)};
    height: ${rem(22)};
`

const Text = styled.span`
    text-transform: uppercase;
`
