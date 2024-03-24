import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const providerContext = createContext()
const AppProvider = ({ children }) => {
    const data = JSON.parse(localStorage?.getItem('user'))
    const [user, setUser] = useState(data)
    return (
        <providerContext.Provider value={{ user, setUser }}>
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