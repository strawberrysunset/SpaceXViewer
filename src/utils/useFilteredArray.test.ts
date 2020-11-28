import {filterData} from './useFilteredArray'

const testData = [{year: 2018}, {year: 2020}, {year: 2021}]

const props = {
    data: testData,
    condition: ({ year }: { year: number }) => year < 2021
}

test('Filters array based on condition.', () => {
    expect(filterData(props)).toEqual([{year: 2018}, {year: 2020}])
})