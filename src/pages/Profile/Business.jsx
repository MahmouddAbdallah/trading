import PropTypes from 'prop-types'
import TableData from './component/TableData'

const Bussiness = () => {
    return (
        <div className="w-full px-5 md:px-10 lg:pl-0 lg:pr-10">
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
            <div className='mt-14'>
                <div className='rounded-xl blackWhiteShadow px-1 sm:px-5 md:px-10 lg:px-12 pb-5'>
                    <table className='w-full table-fixed'>
                        <thead className='w-full border-b border-gray-300'>
                            <tr>
                                <th className='py-3 lg:py-5 text-[#285D89] text-xs md:text-base lg:text-lg'>Hold Amount</th>
                                <th className='py-3 lg:py-5 text-[#285D89] text-xs md:text-base lg:text-lg'>Issue Date</th>
                                <th className='py-3 lg:py-5 text-[#285D89] text-xs md:text-base lg:text-lg'>Release Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center'>
                                <td colSpan="3" className='pt-5'>No Records found</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='mt-14'>
                <div className='rounded-xl blackWhiteShadow px-1 sm:px-5 md:px-10 lg:px-12 pb-5'>
                    <table className='w-full table-fixed'>
                        <thead className='w-full border-b border-gray-300'>
                            <tr>
                                <th className='py-3 lg:py-5 text-[#285D89] text-xs md:text-base lg:text-lg'>Global Date</th>
                                <th className='py-3 lg:py-5 text-[#285D89] text-xs md:text-base lg:text-lg'>Type</th>
                                <th className='py-3 lg:py-5 text-[#285D89] text-xs md:text-base lg:text-lg'>Global Description</th>
                                <th className='py-3 lg:py-5 text-[#285D89] text-xs md:text-base lg:text-lg'>Dedit</th>
                                <th className='py-3 lg:py-5 text-[#285D89] text-xs md:text-base lg:text-lg'>Credit</th>
                                <th className='py-3 lg:py-5 text-[#285D89] text-xs md:text-base lg:text-lg'>Balance</th>
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
            </div>
        </div>
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



export default Bussiness