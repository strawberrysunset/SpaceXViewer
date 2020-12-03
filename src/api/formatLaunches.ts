import {Launch} from '../types'

interface Props {
    launches : any, 
    rockets: any 
}

// Select desired fields and add rocket data.
export const formatLaunches = ({ launches, rockets } : Props) : Launch[] => {
    return launches.map((launch: any) => ({
        id: launch.id,
        name: launch.name,
        flightNumber: launch.flight_number,
        rocket: rockets.find((rocket: any) => rocket.id === launch.rocket).name,
        date: new Date(launch.date_unix * 1000)
    }))
}