// Sort an array in ascending or descending order.
import React from 'react'
import { sortArray, Props } from './sortArray'

interface ReturnType<T> {
  sortedArray: T[]
  toggleSortingDirection: () => void
}

export function useSortedArray<T>({
  array = [],
  direction: initialDirection,
  statePick,
}: Props<T>): ReturnType<T> {
  const [direction, setDirection] = React.useState(initialDirection)
  const sortedArray = sortArray({ array, direction, statePick })

  const toggleSortingDirection = React.useCallback(() => {
    setDirection(direction === 'ascending' ? 'descending' : 'ascending')
  }, [setDirection, direction])

  return { sortedArray, toggleSortingDirection }
}
