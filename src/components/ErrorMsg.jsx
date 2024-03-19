import React from 'react'
import PropTypes from 'prop-types'


const ErrorMsg = ({ message }) => {
    return (
        <React.Fragment>
            {message &&
                <div className='pt-3'>
                    <span className='text-red-500 text-xs font-semibold'>
                        {message}
                    </span>
                </div>
            }
        </React.Fragment>
    )
}

export default ErrorMsg

ErrorMsg.propTypes = {
    message: PropTypes.string
}
