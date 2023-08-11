import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../store/demoSlice'
import { useEffect } from 'react'

const homeModel = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser());
    }, [])

    const fetchData = () => {
        dispatch(fetchUser());
    }

    return {
        fetchData
    }
}

export default homeModel