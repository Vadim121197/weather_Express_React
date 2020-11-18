import { useState, useEffect } from 'react'

export const usePosition = () => {
    const [position, setPosition] = useState({})
    const [error, setError] = useState(null)

    const getCurrentLocation = async () =>
        await navigator.geolocation.getCurrentPosition(
            position => {
                setPosition(position.coords)
            },
            error => {
                setError(error)
            },
            {
                enableHighAccuracy: false,
                timeout: 20000,
                maximumAge: 0,
                distanceFilter: 10,
            }
        )

    useEffect(() => {
        const geo = navigator.geolocation

        if (!geo) {
            setError('Геолокация не поддерживается браузером')
            return
        }
        getCurrentLocation()
    }, [])

    return { position, error }
}
