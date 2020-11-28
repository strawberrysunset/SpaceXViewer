import React from 'react'
import styled from 'styled-components'
import {Button} from './common'
import RefreshIcon from '../assets/icon/refresh.png'
import {SiteLogo} from './graphics'
import {useLaunchData} from '../api'

export const Header = () => {

    const {refetch} = useLaunchData()

    return (
        <Wrapper>
            <SiteLogo/>
            <RefreshButton icon={RefreshIcon} onClick={refetch}/>
        </Wrapper>
    )
}

const Wrapper = styled.header`

`

const RefreshButton = styled(Button)`
    border-radius: 1rem 0 0 1rem;
`