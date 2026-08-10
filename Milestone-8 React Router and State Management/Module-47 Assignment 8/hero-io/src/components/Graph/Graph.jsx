import {
    Bar,
    BarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";


const Graph = ({ ratings }) => {
    const sortingRatings = [...ratings].sort((a, b) => {
        const ratingA = Number(a.name.split(" ")[0]);
        const ratingB = Number(b.name.split(" ")[0]);

        return ratingB - ratingA;
    })

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart data={sortingRatings} layout="vertical" margin={{
                    right: 20,
                }}
                >
                    <XAxis type="number" axisLine={false} tickLine={false}
                    />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false}
                    />
                    <Tooltip />
                    <Bar dataKey="count" fill="#FF8811" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Graph;