// Sort an array in ascending or descending order.
import React from 'react'

interface Props {
    array: unknown[] // Array that will be sorted.
    direction: 'ascending' | 'descending', // Sorting direction.
    statePick(value: unknown) : unknown // Function for picking state which will be compared.
}

interface Return {
    sortedArray: any[],
    toggleSortingDirection: () => void
}

export const sortArray = ({array, direction, statePick} : Props) => {
    return array.sort((item1, item2) => {
        const stateA = statePick(item1)
        const stateB = statePick(item2)
        if (direction === 'ascending') return (stateA - stateB)
        if (direction === 'descending') return (stateB - stateA)
    })
}

export const useSortedArray = ({ array, direction: initialDirection, statePick } : Props) : Return => {
    
    const [direction, setDirection] = React.useState(initialDirection)
    const sortedArray = sortArray({array, direction, statePick});
    
    const toggleSortingDirection = React.useCallback(() => {
        setDirection((direction === 'ascending') ? 'descending' : 'ascending')
    }, [setDirection])
    
    return {sortedArray, toggleSortingDirection}
}


