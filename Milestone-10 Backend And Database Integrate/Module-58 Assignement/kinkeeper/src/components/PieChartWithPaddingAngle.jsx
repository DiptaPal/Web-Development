"use client"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const COLORS = ["#244D3F", "#7F37F5", "#37A163"];

const PieChartWithPaddingAngle = ({
    isAnimationActive = true, pieData
}) => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <PieChart>
                <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="60%"
                    outerRadius="85%"
                    cornerRadius="10%"
                    paddingAngle={5}
                    isAnimationActive={isAnimationActive}
                >
                    {pieData.map((entry, index) => (
                        <Cell key={entry.name} fill={COLORS[index]} />
                    ))}
                </Pie>

                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};


export default PieChartWithPaddingAngle;