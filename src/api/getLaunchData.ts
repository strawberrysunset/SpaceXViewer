import { jsonFetch } from '../utils'
import { Launch } from '../types'
import { formatLaunches } from './formatLaunches'
import { extractUniqueLaunchYears } from './extractUniqueLaunchYears'

interface ReturnType {
  launches: Launch[]
  launchYears: number[]
}

// Allow fetch to be passed as a dependency for testing purposes.
export const getLaunchData = async ({
  fetch = jsonFetch,
}: {
  fetch?(url: string): Promise<ReturnType>
}): Promise<ReturnType> => {
  // We don't assume that the API will return the data we expect.
  let launches: any = await fetch('https://api.spacexdata.com/v4/launches')
  let rockets: any = await fetch('https://api.spacexdata.com/v4/rockets')

  const formattedLaunches = formatLaunches({ launches, rockets })

  return {
    launches: formattedLaunches,
    launchYears: extractUniqueLaunchYears({ launches: formattedLaunches }),
  }
}
