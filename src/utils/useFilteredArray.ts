import React from 'react'
import {filterArray, Props, Filter} from './filterArray'

interface ReturnType<T> {
    filteredArray: T[],
    setFilter:  React.Dispatch<React.SetStateAction<Filter<T> | undefined>>
}

export function useFilteredArray<T> ({array = [], filter: initialFilter} : Props<T>) : ReturnType<T> {
    const [filter, setFilter] = React.useState<Filter<T> | undefined>(initialFilter)
    const filteredArray = filterArray({array, filter})
    return {filteredArray, setFilter}
}