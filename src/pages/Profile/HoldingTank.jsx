import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { UseAppContext } from "../../context/appContext";

const HoldingTank = () => {
    const [tanks, setTanks] = useState([]);
    const { user } = UseAppContext()
    // const [open, setOpen] = useState(false);
    const getHoldingTank = useCallback(
        async () => {
            try {
                const { data } = await axios.get(`/api/User/GetAllHoldingTank?sponsorId=${user.referId}`)
                setTanks(data)
            } catch (error) {
                toast.error(error?.response?.data?.message || 'There is an Error')
                console.error(error);
            }
        }, [user]
    )
    useEffect(() => {
        getHoldingTank()
    }, [getHoldingTank])

    return (
        <div>
            <div className="px-5 lg:pr-32">
                <div className="mb-10">
                    <h4 className="font-bold text-[#546E7A] text-lg tracking-[2px]">
                        My team
                    </h4>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-[#223F4A] font-medium">
                        <thead className="text-sm lg:text-base text-white whitespace-nowrap bg-[#428BAD]">
                            <tr>
                                <th className="py-3 px-5 lg:px-8">Name</th>
                                <th className="py-3 px-5 lg:px-8">Email</th>
                                <th className="py-3 px-5 lg:px-8">Back-office Id</th>
                                <th className="py-3 px-5 lg:px-8">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tanks?.length == 0 ?
                                <tr>
                                    <td colSpan={4} className="px-5 lg:px-8 py-3 text-center">No Records found</td>
                                </tr>
                                :
                                tanks?.map(item =>
                                    <tr key={item.customerAttributeId}>
                                        <td className="px-5 lg:px-8 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full flex justify-center items-center text-white bg-blue-500">
                                                    {item?.name?.split('')[0]}
                                                </div>
                                                <span className="text-sm lg:text-base whitespace-nowrap">
                                                    {item.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-5 lg:px-8 py-3 ">
                                            {item.email}
                                        </td>
                                        <td className="px-5 lg:px-8 py-3 ">{item.backOfficeId}</td>
                                        <td className="px-5 lg:px-8 py-3 ">
                                            <button
                                                disabled={item.status == 'Active' && !item.hasParent ? false : true}
                                                // onClick={() => { setOpen(!open) }}
                                                className={`p-3 ${item.status == 'Active' && !item.hasParent ? 'bg-[#0AF859]' : "bg-red-500"} text-white rounded-md`}>
                                                {item.status}
                                            </button>
                                            {/* {open &&
                                                <div className="fixed bg-black/10 top-0 left-0 h-svh w-svw z-50 flex justify-center">
                                                    <div className="w-full md:w-[500px] bg-white h-80 rounded-md">

                                                    </div>
                                                </div>
                                            } */}
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HoldingTank