import React from 'react'
import styled from 'styled-components'
import SelectIconAsset from '../assets/select.png'
import SelectIconAsset2x from '../assets/select@2x.png'
import SelectIconAsset3x from '../assets/select@3x.png'
import {rem} from 'polished'

export const SelectIcon = () => {
    return (
        <Wrapper>
            <Logo 
                src={SelectIconAsset} // 14px
                srcSet={`${SelectIconAsset2x} 2x, ${SelectIconAsset3x} 3x`}
                alt="Select icon."
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
