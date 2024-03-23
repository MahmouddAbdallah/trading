import { Tooltip } from "bootstrap"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
// import circle from '../../assets/circle.png'
// import cRed from '../../assets/circle/DonutChartRed.svg'
// import cYellow from '../../assets/circle/ChartYellow.svg'
// import cPurple from '../../assets/circle/ChartPurple.svg'
// import cGreen from '../../assets/circle/Chart.svg'

const Profile = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 2000,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="w-full">
            <div className='bg-[#EBEFF3] px-2 shadow rounded-md w-fit shadowBtn'>
                <div className="py-4">
                    <span className="font-bold text-xl text-[#003966]">Direct Sells</span>
                </div>
                <div className='h-80 w-[500px]'>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={300} height={100} data={data}>
                            <XAxis style={{ fontSize: "20px", fontWeight: "700", }} />
                            <YAxis direction={''} />
                            {/* <Legend /> */}
                            <CartesianGrid fill='#EBEFF3' stroke='rgb(0 0 0 / 0.5)' vertical={false} style={{ strokeWidth: ".5" }} />
                            <Tooltip />
                            <Line type="monotone" dataKey="pv" style={{ stroke: "#D6DADE", boxShadow: "inset 0 0 10px #f8a100" }} strokeWidth={20} dot={{ r: .5, fill: "#D9DEE1", style: { stroke: "#428BAD" } }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Profile