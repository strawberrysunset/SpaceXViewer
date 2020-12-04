import React from 'react'
import styled from 'styled-components'
import SortIconAsset from '../../../assets/icon/sort.png'
import SortIconAsset2x from '../../../assets/icon/sort@2x.png'
import SortIconAsset3x from '../../../assets/icon/sort@3x.png'
import {rem} from 'polished'

export const SortIcon = () => {
    return (
        <Wrapper
            src={SortIconAsset}
            srcSet={`${SortIconAsset2x} 2x, ${SortIconAsset3x} 3x`}
            alt=""
        />
    )
}

const Wrapper = styled.img`
    width: ${rem(14)};
    height: ${rem(14)};
`
