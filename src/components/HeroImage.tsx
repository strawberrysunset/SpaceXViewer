import React from 'react'
import styled from 'styled-components'
import {rem} from 'polished'
import HeroImageAsset from '../assets/img/launch-home.png'
import HeroImageAsset2x from '../assets/img/launch-home@2x.png'
import HeroImageAsset3x from '../assets/img/launch-home@3x.png'

export const HeroImage = () => {
    return (
        <Wrapper
            src={HeroImageAsset}
            srcSet={`${HeroImageAsset2x} 2x, ${HeroImageAsset3x} 3x`}
            alt="Image of SpaceX rocket taking off."
        />
    )
}

const Wrapper = styled.img`
    width: ${rem(533.54)};
    height: ${rem(694)};
`