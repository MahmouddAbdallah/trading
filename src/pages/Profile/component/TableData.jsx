import PropTypes from 'prop-types'

const TableData = ({ globalDate, globalDescription, dedit, credit, balance }) => {
    return (
        <tr className='border-b border-black'>
            <td className='text-center text-sm py-3'>{globalDate}</td>
            <td className='text-center text-sm py-3'>
                {globalDescription}
            </td>
            <td className='text-center text-sm py-3'>{dedit}</td>
            <td className='text-center text-sm py-3'>{credit}</td>
            <td className='text-center text-sm py-3'>{balance}</td>
        </tr>
    )
}

TableData.propTypes = {
    globalDate: PropTypes.string,
    globalDescription: PropTypes.string,
    dedit: PropTypes.number,
    credit: PropTypes.number,
    balance: PropTypes.number
}

export default TableData