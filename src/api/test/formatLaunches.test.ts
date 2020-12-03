import {formatLaunches} from '../formatLaunches'
import {rockets, launches} from './sampleAPIResponses'

const expectedLaunchesFormat = {
    id:
} 

test('Formats fields correctly', () => {
    const launches = formatLaunches({launches, rockets})
    expect(launches).toStrictEqual()
})