// Converts unixTimestamp to custom date string.
import moment from 'moment'

export const formatDate = (unixTime: number): string | undefined => {
    if (!unixTime) return undefined
    return moment(unixTime).format("Do MMMM YY")
}