import PropTypes from 'prop-types'
import TableData from '../component/TableData'

const EwalletAccountHistory = () => {
    return (
        <div className="px-5 md:px-10 lg:pl-0 lg:pr-10">
            <div>
                <span className="text-xl md:text-2xl lg:text-3xl text-[#003966] font-semibold">
                    Ewallet Account History
                </span>
            </div>
            <div className="grid grid-cols-12 mt-10 gap-5 lg:gap-10">
                <CardUser title={'Name'} text={'Ammar Hegazy'} />
                <CardUser title={'Hold Amount'} text={'$128,320'} />
                <CardUser title={'Available Amount'} text={'$128,320'} />
                <CardUser title={'Total Amount'} text={'$128,320'} />
            </div>
            <div className='relative sm:rounded-xl blackWhiteShadow px-1 sm:px-5 md:px-10 lg:px-12 pb-5 overflow-x-auto mt-14'>
                <table className='w-full'>
                    <thead className='border-b border-gray-300 whitespace-nowrap text-[#285D89] md:text-base lg:text-lg'>
                        <tr>
                            <th className='py-3 lg:py-5 px-10 text-center'>Hold Amount</th>
                            <th className='py-3 lg:py-5 px-10 text-center'>Issue Date</th>
                            <th className='py-3 lg:py-5 px-10 text-center'>Release Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center'>
                            <td colSpan="3" className='pt-5'>No Records found</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='relative sm:rounded-xl blackWhiteShadow px-1 sm:px-5 md:px-10 lg:px-12 pb-5 overflow-x-auto mt-14'>
                <table className='w-full'>
                    <thead className='border-b border-gray-300 whitespace-nowrap text-[#285D89] md:text-base lg:text-lg'>
                        <tr>
                            <th className='py-3 lg:py-5 px-10 text-center'>Global Date</th>
                            <th className='py-3 lg:py-5 px-10 text-center'>Type</th>
                            <th className='py-3 lg:py-5 px-10 text-center'>Global Description</th>
                            <th className='py-3 lg:py-5 px-10 text-center'>Dedit</th>
                            <th className='py-3 lg:py-5 px-10 text-center'>Credit</th>
                            <th className='py-3 lg:py-5 px-10 text-center'>Balance</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <TableData
                            globalDate={'Jan 19, 2024 10:35 AM'}
                            type={'Adjust'}
                            globalDescription={'Transfer on Dec 4th rejected due to outstanding payable'}
                            dedit={"10.00"}
                            credit={'10.00'}
                            balance={'3.00'}
                        />
                        <TableData
                            globalDate={'Jan 19, 2024 10:35 AM'}
                            type={'Adjust'}
                            globalDescription={'Transfer on Dec 4th rejected due to outstanding payable'}
                            dedit={"10.00"}
                            credit={'-'}
                            balance={'3.00'}
                        />
                        <TableData
                            globalDate={'Jan 19, 2024 10:35 AM'}
                            type={'Adjust'}
                            globalDescription={'Transfer on Dec 4th rejected due to outstanding payable'}
                            dedit={"10.00"}
                            credit={'-'}
                            balance={'3.00'}
                        />
                        <TableData
                            globalDate={'Jan 19, 2024 10:35 AM'}
                            type={'Adjust'}
                            globalDescription={'Transfer on Dec 4th rejected due to outstanding payable'}
                            dedit={"10.00"}
                            credit={'10.00'}
                            balance={'3.00'}
                        />
                    </tbody>
                </table>
            </div>
        </div >
    )
}

const CardUser = ({ title, text }) => {
    return <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 blackWhiteShadow px-5 py-3 rounded-3xl">
        <span className="block text-[#285D89] text-base lg:text-lg font-semibold">
            {title}
        </span>
        <span className="block font-semibold">
            {text}
        </span>
    </div>
}
CardUser.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}



export default EwalletAccountHistory