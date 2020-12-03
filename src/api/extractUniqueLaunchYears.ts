import {LaunchData} from './types'

interface Props {
    launches: LaunchData[]
}

// Get deduped array of launch years.
export const extractUniqueLaunchYears = ({launches} : Props) : number[] => {
    return launches.reduce((years: number[], launch) : number[]  => {
        const year = launch.date.getFullYear()
        return (years.indexOf(year) === -1) ? [...years, year] : years 
    }, [])
}