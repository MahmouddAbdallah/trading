import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const providerContext = createContext()
const AppPackageProvider = ({ children }) => {
    const [packages, setPackages] = useState([])
    const [previewPackage, setPreviewPackage] = useState(null)

    const [cart, setCart] = useState([])
    const fetchCarts = () => {
        const userData = localStorage?.getItem('cart');
        const carts = JSON.parse(userData) || []
        setCart(carts);
    }

    useEffect(() => {
        fetchCarts()
    }, []);

    const fetchPackages = async () => {
        try {
            const { data } = await axios.get('/api/Admin/GetAllPackages')
            setPackages(data)
        } catch (error) {
            toast.error(error?.response?.data || "Can not get packages")
            console.error(error);
        }
    }
    useEffect(() => {
        fetchPackages()
    }, []);


    return (
        <providerContext.Provider value={{ packages, setPackages, previewPackage, setPreviewPackage, setCart, cart }}>
            {children}
        </providerContext.Provider>
    )
}

export const UsePackageContext = () => {
    return useContext(providerContext)
}

AppPackageProvider.propTypes = {
    children: PropTypes.element.isRequired
}

export default AppPackageProvider