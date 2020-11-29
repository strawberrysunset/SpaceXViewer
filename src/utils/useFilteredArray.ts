import React from 'react'

type Filter = (state: any) => boolean 

interface Props {
    array: any[],
    filter?: Filter
}

export const filterArray = ({array, filter} : Props) => {
    if (!filter) return array
    return array.filter(filter)
}

export const useFilteredArray = ({array, filter: initialFilter} : Props) => {
    const [filter, setFilter] = React.useState<Filter | undefined>(initialFilter)
    const filteredArray = filterArray({array, filter})
    return {filteredArray, setFilter}
}

