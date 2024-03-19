import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

const OptionCountries = () => {
    const [countries, setCounties] = useState([])
    const fetchAllCountries = useCallback(
        async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/User/GeTAllCountries`)
                setCounties(data);
            } catch (error) {
                console.error(error);
            }
        }, []
    )
    useEffect(() => {
        fetchAllCountries()
    }, [fetchAllCountries])
    return (
        <>
            <option value="" className='text-black' >Country</option>
            {
                countries.map(country => (
                    <option
                        key={country.id}
                        value={country.id}
                        className='text-black'
                    >
                        {country.name}
                    </option>
                ))
            }
        </>
    )
}

export default OptionCountries