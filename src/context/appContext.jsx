import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
// import { toast } from 'react-hot-toast'

const providerContext = createContext()
const AppProvider = ({ children }) => {
    const data = JSON.parse(localStorage?.getItem('user'))
    const [user, setUser] = useState(data)

    const [balance, setBalance] = useState('')

    const [packages, setPackages] = useState([1, 2, 3, 4, 5, 6])
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
            setPackages(typeof data == 'string' ? [1, 2, 3, 4, 5, 6] : data)
        } catch (error) {
            // toast.error(error?.response?.data || "Can not get packages")
            console.error(error);
        }
    }
    useEffect(() => {
        fetchPackages()
    }, []);


    const getBalance = useCallback(async () => {
        try {
            const { data } = await axios.get(`/api/BankController/LastSignupBalance?userId=${user?.customerAttributeId}`)
            setBalance(data?.balance)
        } catch (error) {
            console.error(error);
        }
    }, [user])

    useEffect(() => {
        getBalance()
    }, [getBalance]);

    return (
        <providerContext.Provider value={{ user, setUser, packages, setPackages, previewPackage, setPreviewPackage, setCart, cart, balance }}>
            {children}
        </providerContext.Provider>
    )
}

export const UseAppContext = () => {
    return useContext(providerContext)
}

AppProvider.propTypes = {
    children: PropTypes.element.isRequired
}

export default AppProvider