import React from 'react'
import styled from 'styled-components'
import {SortIcon } from './graphics'
import { Button, Select } from './common'
import { useLaunchData } from '../api'
import { useSortedArray, useFilteredArray} from '../utils'
import { LaunchCardList } from './LaunchCardList'
import {rem} from 'polished'
import { LaunchData } from '../types'

export const LaunchTable = () => {

    const {data, isLoading, isFetching, isError, error} = useLaunchData()
    
    // Boolean used for button disabled state.
    const disabled: boolean = isLoading || isError || isFetching

    // Filter array using filter function. Initially, no filter is set.
    const {filteredArray, setFilter, clearFilter} = useFilteredArray<LaunchData>({array: data?.launches})

    // Sort array using direction and statePick.
    const {sortedArray: launches, toggleSortingDirection} = useSortedArray<LaunchData>({
        array : filteredArray, 
        direction: 'ascending',
        statePick: (launch: LaunchData) => launch.date.getTime()
    })

    // Year filter handler.
    const setYearFilter = React.useCallback((event : Event) => {
        const year = (event?.target as HTMLSelectElement).value;
        const filter = (launch: LaunchData) => String(launch.date.getFullYear()) === year;
        year === 'ALL' ? clearFilter() : setFilter(filter)
    }, [setFilter])

    return (
        <Wrapper>
            <Options>
                <YearSelect name="years" onChange={setYearFilter} disabled={disabled} >
                    <option value="ALL">Filter by Year</option>
                    {data?.launchYears.map((year: number) => <option key={year} value={year}>{year}</option>)}
                </YearSelect>
                <SortButton onClick={toggleSortingDirection} icon={SortIcon} disabled={disabled}>Sort Ascending/Descending</SortButton>
            </Options>
            <LaunchCardList 
                launches={launches}
                error={error}
                isFetching={isFetching}
                isError={isError}
            />
        </Wrapper>
    )    
}

const Options = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: ${rem(13)};
`

const SortButton = styled(Button)`
    margin-left: ${rem(8)};
`

const YearSelect = styled(Select)`

`

const Wrapper = styled.div`
    width: ${rem(727)};
    margin-left: ${rem(59.46)};
`