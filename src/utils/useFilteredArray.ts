interface Props {
    data: any[],
    condition(state: unknown) : boolean
}

export const filterData = ({data, condition} : Props) => {
    return data.filter(condition)
}

export const useFilteredData = ({data, condition} : Props) => {
    return filterData({data, condition})
}

