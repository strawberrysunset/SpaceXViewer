import {getLaunchData, ReturnType} from './getLaunchData'
import {sampleAPIResponse} from './sampleAPIResponse'

const mockedFetch = async () => {
    return new Promise(resolve => resolve({
        json: async () => sampleAPIResponse
    }))
}

const expectedResponse: ReturnType = {
    allLaunches: sampleAPIResponse,
    allLaunchYears: [2006, 2007, 2008, 2020]
}

test('Returns API data.', async () => {
    const response = await getLaunchData({ fetch: mockedFetch });
    expect(response.allLaunches).toStrictEqual(expectedResponse.allLaunches)
})

test('Returns deduped array of launch years', async () => {
    const response = await getLaunchData({ fetch: mockedFetch });
    expect(response.allLaunchYears).toStrictEqual(expectedResponse.allLaunchYears)
})
