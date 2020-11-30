interface Props {
    fetch?(url: string): Promise<any>
}

// Return array of launches and deduped array of all launch years.
export interface ReturnType {
    allLaunches : any[],
    allLaunchYears : number[]
}

// Allow fetch to be passed as a dependency for testing purposes.
export const getLaunchData = async ({fetch = window.fetch} : Props) : Promise<ReturnType> => {

    const response = await fetch('https://api.spacexdata.com/v4/launches')
    const allLaunches = await response.json()    

    // Get deduped array of launch years.
    const allLaunchYears = allLaunches.reduce((years: number[], launch: any) : number[]  => {
        const year = new Date(launch.date_unix * 1000).getFullYear()
        return (years.indexOf(year) === -1) ? [...years, year] : years 
    }, [])

    return { allLaunches, allLaunchYears }
}




