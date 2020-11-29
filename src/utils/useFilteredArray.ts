
interface Props {
    array: any[],
    filter?: (state: any) => boolean 
}

export const filterArray = ({array, filter} : Props) => {
    if (!filter) return array
    return array.filter(filter)
}

export const useFilteredArray = ({array, filter} : Props) => {
    return filterArray({array, filter})
}

