
const HoldingTank = () => {
    return (
        <div>
            <div className="px-5 lg:pr-32">
                <div className="mb-10">
                    <h4 className="font-bold text-[#546E7A] text-lg tracking-[2px]">
                        Holding Tank
                    </h4>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-[#223F4A] font-medium">
                        <thead className="text-sm lg:text-base text-white whitespace-nowrap bg-[#428BAD]">
                            <tr>
                                <th className="py-3 px-5 lg:px-8">Name</th>
                                <th className="py-3 px-5 lg:px-8">Email</th>
                                <th className="py-3 px-5 lg:px-8">Back-office Id</th>
                                <th className="py-3 px-5 lg:px-8"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-5 lg:px-8 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full flex justify-center items-center text-white bg-blue-500">
                                            J
                                        </div>
                                        <span className="text-sm lg:text-base whitespace-nowrap">
                                            John Doe
                                        </span>
                                    </div>
                                </td>
                                <td className="px-5 lg:px-8 py-3 ">
                                    john.doe@example.com
                                </td>
                                <td className="px-5 lg:px-8 py-3 ">393939393</td>
                                <td className="px-5 lg:px-8 py-3 ">
                                    <button className="p-3 bg-[#0AF859] text-white rounded-md">Registered</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 lg:px-8 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full flex justify-center items-center text-white bg-blue-500">
                                            J
                                        </div>
                                        <span className="text-sm lg:text-base whitespace-nowrap">
                                            John Doe
                                        </span>
                                    </div>
                                </td>
                                <td className="px-5 lg:px-8 py-3 ">
                                    john.doe@example.com
                                </td>
                                <td className="px-5 lg:px-8 py-3 ">393939393</td>
                                <td className="px-5 lg:px-8 py-3 ">
                                    <button className="px-3 py-1 bg-[#FF3232] text-white rounded-md">Not <br /> Registered</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HoldingTank