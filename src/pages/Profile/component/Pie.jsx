import { Pie, PieChart, Cell, Label } from "recharts";

const data = [
    { name: "Bubble Tea Sold", value: 80 },
    { name: "Bubble Tea Left", value: 20 },
];

const SampleChart = () => {
    return (
        <div className="card-services rounded-xl w-fit px-5">
            <div>
                <div className=" pl-3 pt-3">
                    <span className="font-bold text-xl text-[#003966]">Sells</span>
                </div>
                <PieChart width={200} height={200}>
                    <Pie data={data}
                        paddingAngle={0}
                        fillOpacity={50} dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius={30}
                        style={{ filter: 'drop-shadow(1px 1px 10px rgba(187, 187,187, .50))' }}
                        className="fill-[#EBEFF3] shadow-xl stroke-[#EBEFF3]"
                    />
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        dataKey="value" // make sure to map the dataKey to "value"
                        innerRadius={60} // the inner and outer radius helps to create the progress look
                        outerRadius={80}
                    >
                        {data.map((_, index) => {
                            if (index === 1) {
                                return <Cell key={`cell-${index}`} fill="#f3f6f9" />; // make sure to map the index to the colour you want
                            }
                            return <Cell key={`cell-${index}`} fill="#428BAD" />;
                        })}
                        <Label
                            value={`${data[0].value} %`}
                            position="center"
                            fill="#000000"
                            width={10}
                            style={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                fontFamily: "Roboto"
                            }}
                        />
                    </Pie>
                </PieChart>
            </div>
        </div>
    );
};

export default SampleChart;
