import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { UseAppContext } from "../../../context/appContext";

const CommissionsHistory = () => {
    const { user } = UseAppContext()
    const [data, setData] = useState([])
    const getCommissions = useCallback(async () => {
        try {
            const { data } = await axios.get(`/api/Profit?memberId=${user?.customerAttributeId}`)
            setData(data);
        } catch (error) {
            console.error(error);
        }
    }, [user?.customerAttributeId]);

    useEffect(() => {
        getCommissions();
    }, [getCommissions])
    return (
        <div className="px-5 lg:pr-32">
            <div className="space-y-20">
                {data?.map(item =>
                    <div key={item.week_Date_From} className="relative overflow-x-auto shadow-md sm:rounded-3xl">
                        <table className="w-full text-sm text-left rtl:text-right text-[#223F4A] font-medium">
                            <thead className="text-sm lg:text-base text-white whitespace-nowrap bg-[#428BAD]">
                                <tr>
                                    <td className="py-3 px-5 lg:px-8">Weekly Commession</td>
                                    <td className="py-3 px-5 lg:px-8">{item.week_Date_To}  - {item.week_Date_From}   </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-2">
                                    <td className="px-5 lg:px-8 py-5">
                                        Direct
                                    </td>
                                    <td className="px-5 lg:px-8 py-5 text-right">
                                        $ {item?.direct}
                                    </td>
                                </tr>
                                <tr className="border-b-2">
                                    <td colSpan={2} className="px-5 lg:px-8 py-5 text-right">
                                        Weekly Subtotal: $ {item?.total}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                {
                    data?.length == 0 ?
                        <div className="relative overflow-x-auto shadow-md sm:rounded-3xl">
                            <table className="w-full text-sm text-left rtl:text-right text-[#223F4A] font-medium">
                                <thead className="text-sm lg:text-base text-white whitespace-nowrap bg-[#428BAD]">
                                    <tr>
                                        <td className="py-3 px-5 lg:px-8">Weekly Commession</td>
                                        <td className="py-3 px-5 lg:px-8">00/00/0000  - 00/00/0000   </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b-2">
                                        <td colSpan={2} className="px-5 lg:px-8 py-5 text-center">
                                            No Records found
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        : ""
                }
            </div>
        </div>
    )
}

export default CommissionsHistory