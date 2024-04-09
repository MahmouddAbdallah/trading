import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const providerContext = createContext()
const AppPackageProvider = ({ children }) => {
    const [packages, setPackages] = useState([])
    const [previewPackage, setPreviewPackage] = useState()
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
        <providerContext.Provider value={{ packages, setPackages, previewPackage, setPreviewPackage }}>
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