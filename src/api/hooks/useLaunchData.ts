import { useQuery } from 'react-query'
import { getLaunchData } from '../getLaunchData'

export const useLaunchData = () => {
    return useQuery('launchData', getLaunchData, {
        staleTime: Infinity, // Ensures data is never automatically re-fetched.
        initialData: [], 
        keepPreviousData: true // Previous data will remain whilst new data is being fetched.
    })
}