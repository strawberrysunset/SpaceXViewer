import { useQuery } from 'react-query'
import { getLaunchData } from '../getLaunchData'

export const useLaunchData = () => {
    return useQuery('launchData', getLaunchData, {
        staleTime: Infinity, // Ensures query is never automatically re-fetched. 
        keepPreviousData: true // Previous data will remain whilst query is being re-fetched.
    })
}