import React from 'react'
import styled, {css} from 'styled-components'
import { SortIcon } from './graphics'
import { Button, Select } from './common'
import { useLaunchData } from '../api'
import { useSortedArray, useFilteredArray} from '../utils'
import { LaunchCardList } from './LaunchCardList'
import {rem} from 'polished'

export const LaunchTable = () => {

    const {data, isLoading, isFetching, isError, error} = useLaunchData()
    
    // Disabled boolean used for button state when data is being fetched.
    const disabled: boolean = isLoading || isError || isFetching

    // Filter array using filter function. Initially, no filter is set.
    const {filteredArray, setFilter} = useFilteredArray({array: data})

    // Sort array using direction and statePick.
    const {sortedArray: launches, toggleSortingDirection} = useSortedArray({
        array : filteredArray, 
        direction: 'ascending',
        statePick: (state: any) => state.date.getTime()
    })

    // Get deduped array of launch years.
    const allLaunchYears = launches.reduce((years: number[], launch: any) : number[]  => {
        const year = launch.date.getFullYear()
        return (years.indexOf(year) === -1) ? [...years, year] : years 
    }, [])

    // Year filter handler.
    const setYearFilter = React.useCallback((event : Event) => {
        const year = (event?.target as HTMLSelectElement).value;
        const filter = (state : any) => state.date.getYear() === 2007
        setFilter(filter)
    }, [setFilter])

    return (
        <Wrapper>
            <Options>
                <YearSelect name="years" onClick={setYearFilter} disabled={disabled} >
                    <option value="">--Filter By Year--</option>
                    {/* <option value="">--Filter By Year--</option>  */}
                    {/* {allLaunchYears.map((year: number) => <option value={year}>{year}</option>)} */}
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

const Number = styled.h2`

`