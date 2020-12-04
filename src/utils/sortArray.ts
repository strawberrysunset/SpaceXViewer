export interface Props<T> {
  array: T[] | undefined // Array that will be sorted.
  direction: 'ascending' | 'descending' // Sorting direction.
  statePick(value: T): number // Function for picking state which will be compared.
}

export function sortArray<T>({ array = [], direction, statePick }: Props<T>) {
  return array.sort((item1, item2) => {
    const stateA = statePick(item1)
    const stateB = statePick(item2)
    return direction === 'ascending' ? stateA - stateB : stateB - stateA
  })
}
