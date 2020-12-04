import { sortArray } from './sortArray'

const orderedTestData = [{ year: 2018 }, { year: 2020 }, { year: 2021 }]
const unorderedTestData = [{ year: 2020 }, { year: 2018 }, { year: 2021 }]

const props = {
  array: unorderedTestData,
  direction: 'ascending' as const,
  statePick: (state: { year: number }) => state.year,
}

test('Returns empty array if input data array is empty.', () => {
  expect(sortArray({ ...props, array: [] })).toEqual([])
})

test('Sorts data in correct direction.', () => {
  expect(sortArray(props)).toEqual(orderedTestData)
  expect(sortArray({ ...props, direction: 'descending' })).toEqual(
    orderedTestData.reverse()
  )
})
