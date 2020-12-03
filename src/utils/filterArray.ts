export type Filter<T> = (state: T) => boolean 

export interface Props<T> {
    array: T[],
    filter?: Filter<T>
}

export function filterArray<T> ({array, filter} : Props<T>) {
    if (!filter) return array
    return array.filter(filter)
}