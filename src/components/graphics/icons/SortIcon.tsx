import React from 'react'
import styled from 'styled-components'
import SortIconAsset from '../assets/sort.png'
import SortIconAsset2x from '../assets/sort@2x.png'
import SortIconAsset3x from '../assets/sort@3x.png'
import {rem} from 'polished'

export const SortIcon = () => {
    return (
        <Wrapper>
            <Logo 
                width={14}
                height={18}
                src={SortIconAsset}
                srcSet={`${SortIconAsset2x} 2x, ${SortIconAsset3x} 3x`}
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
