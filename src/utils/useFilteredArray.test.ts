import {filterArray} from './useFilteredArray'

const testData = [{year: 2018}, {year: 2020}, {year: 2021}]

const props = {
    array: testData,
    filter: (state: { year: number }) => state.year < 2021
}

test('Filters array based on condition.', () => {
    expect(filterArray(props)).toEqual([{year: 2018}, {year: 2020}])
})

test('Returns original array if no filter is given.', () => {
    expect(filterArray({...props, filter: undefined})).toEqual(props.array)
})