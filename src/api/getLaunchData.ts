import moment from 'moment'

export const getLaunchData = async () => {
    const response = await fetch('https://api.spacexdata.com/v4/launches')
    const data = await response.json()
    return data.map((launch : any) => ({
        ...launch,
        date: moment(launch.date_unix).format("Do MMMM YY")
    }))
}
