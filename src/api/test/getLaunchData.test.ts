import {getLaunchData} from './getLaunchData'
import {sampleAPIResponse} from './sampleAPIResponses'

const mockedFetch = async () => {
    return new Promise(resolve => resolve({
        json: async () => sampleAPIResponse
    }))
}

const expectedResponse = {
    Launches: sampleAPIResponse,
    launchYears: [2006, 2007, 2008, 2020]
}

test('Returns API data.', async () => {
    const launches = await getLaunchData({ fetch: mockedFetch });
    expect(launches).toStrictEqual(expectedResponse.Launches)
})

test('Returns deduped array of launch years', async () => {
    const launchData = await getLaunchData({ fetch: mockedFetch });
    expect(launchData.launches).toStrictEqual(expectedResponse.launchYears)
})
