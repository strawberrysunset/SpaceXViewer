import {extractUniqueLaunchYears} from '../extractUniqueLaunchYears'
import { getLaunchData } from '../getLaunchData'
import { LaunchData } from '../types'
import {sampleAPI} from './sampleAPIResponses'

const mockInput : LaunchData[] = [
    {

    },

]

test('Returns array of years', () => {
    const launches = getLaunchData
    const launchYears = extractUniqueLaunchYears({launches: mockInput})
    expect()
})
