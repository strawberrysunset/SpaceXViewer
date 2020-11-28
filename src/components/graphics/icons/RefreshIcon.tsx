import React from 'react'
import styled from 'styled-components'
import RefreshIconAsset from '../assets/refresh.png'
import RefreshIconAsset2x from '../assets/refresh@2x.png'
import RefreshIconAsset3x from '../assets/refresh@3x.png'
import {rem} from 'polished'

export const RefreshIcon = () => {
    return (
        <Wrapper>
            <Logo 
                src={RefreshIconAsset}
                srcSet={`${RefreshIconAsset2x} 2x, ${RefreshIconAsset3x} 3x`}
                alt="Refresh icon."
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
