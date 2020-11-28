import {sortData} from './useSortedArray'

const orderedTestData = [{year: 2018}, {year: 2020}, {year: 2021}]
const unorderedTestData = [{year: 2020}, {year: 2018}, {year: 2021}]

const props = {
    data: unorderedTestData,
    direction: 'ascending' as const,
    statePick: (state: {year: number}) => state.year
}

test('Returns empty array if input array is empty.', () => {
    expect(sortData({...props, data: []})).toEqual([])
})

test('Sorts data in correct direction.', () => {
    expect(sortData(props)).toEqual(orderedTestData)
    expect(sortData({...props, direction: 'descending'})).toEqual(orderedTestData.reverse())
})
