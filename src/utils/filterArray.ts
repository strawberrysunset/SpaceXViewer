export type Filter<T> = (state: T) => boolean

export interface Props<T> {
  array: T[] | undefined
  filter?: Filter<T> | undefined
}

export function filterArray<T>({ array = [], filter }: Props<T>): T[] {
  return filter ? array.filter(filter) : array
}
