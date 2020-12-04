import React from 'react'
import { filterArray, Props, Filter } from './filterArray'

interface ReturnType<T> {
  filteredArray: T[]
  setFilter: (filter: Filter<T>) => void
  clearFilter: () => void
}

// useState hook treats function values as lazy initializer. Therefore, to store a function we must nest it within another function.
export function useFilteredArray<T>({
  array = [],
  filter: initialFilter,
}: Props<T>): ReturnType<T> {
  const [filter, setFilter] = React.useState<Filter<T> | undefined>(
    () => initialFilter
  )
  const filteredArray = filterArray<T>({ array, filter })
  return {
    filteredArray,
    setFilter: (filter: Filter<T>) => setFilter(() => filter),
    clearFilter: () => setFilter(undefined),
  }
}
