import React from 'react'
import styled from 'styled-components'
import SelectIconAsset from '../../../assets/icon/select.png'
import SelectIconAsset2x from '../../../assets/icon/select@2x.png'
import SelectIconAsset3x from '../../../assets/icon/select@3x.png'
import { rem } from 'polished'

export const SelectIcon = () => {
  return (
    <Wrapper
      src={SelectIconAsset} // 14px
      srcSet={`${SelectIconAsset2x} 2x, ${SelectIconAsset3x} 3x`}
      alt=""
    />
  )
}

const Wrapper = styled.img`
  margin: 0 ${rem(4)};
  width: ${rem(10)};
  height: ${rem(5)};
`
