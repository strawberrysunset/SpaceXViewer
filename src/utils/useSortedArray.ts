// Sort an array of data in ascending or descending order.
import React from 'react'

interface Props {
    data: unknown[] // Data that will be sorted.
    direction: 'ascending' | 'descending', // Sorting direction.
    statePick(value: unknown) : unknown // Function for picking state which will be compared.
}

interface Return {
    sortedData: any[],
    toggleDirection: () => void
}

export const sortData = ({data, direction, statePick} : Props) => {
    return data.sort((item1, item2) => {
        const stateA = statePick(item1)
        const stateB = statePick(item2)
        if (direction === 'ascending') return (stateA - stateB)
        if (direction === 'descending') return (stateB - stateA)
    })
}

export const useSortedData = ({ data, direction: initialDirection, statePick } : Props) : Return => {
    const [direction, setDirection] = React.useState(initialDirection)
    const sortedData = sortData({data, direction, statePick});
    const toggleDirection = React.useCallback(() => {
        setDirection((direction === 'ascending') ? 'descending' : 'ascending')
    }, [])
    return {sortedData, toggleDirection}
}


