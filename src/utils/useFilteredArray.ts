import React from 'react'
import {filterArray, Props, Filter} from './filterArray'

interface ReturnType<T> {
    filteredArray: T[],
    setFilter: (filter: Filter<T>) => void
    clearFilter: () => void
}

export function useFilteredArray<T> ({array = [], filter: initialFilter} : Props<T>) : ReturnType<T> {
    const [filter, setFilter] = React.useState<Filter<T> | undefined>(() => initialFilter)
    const filteredArray = filterArray<T>({array, filter})
    return {
        filteredArray, 
        setFilter: (filter: Filter<T>) => setFilter(() => filter),
        clearFilter: () => setFilter(undefined)    
    } 
}