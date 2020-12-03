import React from 'react'
import styled from 'styled-components'
import SpaceXLogo from '../../../assets/spacex-logo.png'
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
    align-items: flex-start;
`

const Logo = styled.img`
    width: ${rem(178.75)};
    height: ${rem(22)};
    user-select: none;
`

const Text = styled.div`
    font-size: ${props => props.theme.typeScale[200]};
    text-transform: uppercase;
    margin-top: ${rem('4px')};
    margin-left: ${rem(-12)};
`
