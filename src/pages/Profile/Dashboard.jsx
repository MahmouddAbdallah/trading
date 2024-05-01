import { CartesianGrid, Line, Tooltip, LineChart, ResponsiveContainer, XAxis } from "recharts"
import SampleChart from "./component/Pie";

const Dashboard = () => {
    const data = [
        {
            name: 'Mon',
            pv: 2400,
            status: "Best"
        },
        {
            name: 'Tue',
            pv: 1398,
            status: "Good"
        },
        {
            name: 'Wed',
            pv: 2000,
            status: "Good"
        },
        {
            name: 'Thu',
            pv: 3908,
            status: "Normal"
        },
        {
            name: 'Fri',
            pv: 4800,
            status: "Normal"
        },
        {
            name: 'Sat',
            pv: 3800,
            status: "Good"
        },
        {
            name: 'Sun',
            pv: 4300,
            status: "Best"
        },
    ];
    return (
        <div className="w-full px-5 md:px-10 lg:px-0">
            <div className='mb-16 flex'>
                <SampleChart />
            </div>
            <div className="flex flex-wrap gap-14 lg:gap-32">
                <div className='bg-[#EBEFF3] px-2 shadow rounded-md w-full lg:w-fit shadowBtn'>
                    <div className="py-4">
                        <span className="font-bold text-xl text-[#003966]">Direct Sells</span>
                    </div>
                    <div className='h-60 w-full lg:w-[450px]'>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart width={300} height={100} data={data}>
                                <XAxis dataKey={'name'} style={{ fontSize: "16px", fontWeight: "700", }} />
                                <CartesianGrid fill='#EBEFF3' stroke='rgb(0 0 0 / 0.5)' vertical={false} style={{ strokeWidth: ".5" }} />
                                <Tooltip />
                                <Line type="monotone" dataKey="pv" style={{ stroke: "#D6DADE", boxShadow: "inset 0 0 10px #f8a100" }} strokeWidth={20} dot={{ r: .5, fill: "#D9DEE1", style: { stroke: "#428BAD" } }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='bg-[#EBEFF3] px-2 shadow rounded-md w-full lg:w-fit shadowBtn'>
                    <div className="py-4">
                        <span className="font-bold text-xl text-[#003966]">Direct Sells</span>
                    </div>
                    <div className='h-60 w-full lg:w-[450px]'>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart width={300} height={100} data={data}>
                                <XAxis dataKey={'name'} style={{ fontSize: "16px", fontWeight: "700", }} />
                                <CartesianGrid fill='#EBEFF3' stroke='rgb(0 0 0 / 0.5)' vertical={false} style={{ strokeWidth: ".5" }} />
                                <Tooltip />
                                <Line type="monotone" dataKey="pv" style={{ stroke: "#D6DADE", boxShadow: "inset 0 0 10px #f8a100" }} strokeWidth={20} dot={{ r: .5, fill: "#D9DEE1", style: { stroke: "#428BAD" } }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard