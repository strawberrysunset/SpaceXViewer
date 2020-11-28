import React from 'react'
import styled from 'styled-components'
import RefreshIcon from '../assets/refresh.png'
import RefreshIcon2x from '../assets/refresh@2x.png'
import RefreshIcon3x from '../assets/refresh@3x.png'
import {rem} from 'polished'

export const SiteLogo = () => {
    return (
        <Wrapper>
            <Logo 
                width={14}
                height={18}
                src={RefreshIcon}
                srcSet={`${RefreshIcon2x} 2x, ${RefreshIcon3x} 3x`}
                alt="Sort icon."
            />
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
