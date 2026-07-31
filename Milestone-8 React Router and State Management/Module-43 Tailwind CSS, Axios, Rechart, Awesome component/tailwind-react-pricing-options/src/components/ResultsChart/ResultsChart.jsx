import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const resultData = [
    {
        "id": 1,
        "name": "Alice",
        "physics": 78,
        "chemistry": 82,
        "mathematics": 91
    },
    {
        "id": 2,
        "name": "Ben",
        "physics": 65,
        "chemistry": 74,
        "mathematics": 69
    },
    {
        "id": 3,
        "name": "Charlie",
        "physics": 88,
        "chemistry": 90,
        "mathematics": 95
    },
    {
        "id": 4,
        "name": "Diana",
        "physics": 72,
        "chemistry": 68,
        "mathematics": 76
    },
    {
        "id": 5,
        "name": "Ethan",
        "physics": 91,
        "chemistry": 87,
        "mathematics": 93
    },
    {
        "id": 6,
        "name": "Fiona",
        "physics": 56,
        "chemistry": 63,
        "mathematics": 58
    },
    {
        "id": 7,
        "name": "George",
        "physics": 84,
        "chemistry": 79,
        "mathematics": 88
    },
    {
        "id": 8,
        "name": "Hannah",
        "physics": 69,
        "chemistry": 73,
        "mathematics": 81
    },
    {
        "id": 9,
        "name": "Ian",
        "physics": 77,
        "chemistry": 85,
        "mathematics": 80
    },
    {
        "id": 10,
        "name": "Julia",
        "physics": 93,
        "chemistry": 89,
        "mathematics": 97
    }
]

export const ResultsChart = () => {
    return (
        <div className="max-w-300 mx-auto mt-30">
            <LineChart width="100%" height={500} responsive data={resultData} margin={{
                top: 20,
                right: 20,
                bottom: 5,
                left: 0,
            }}>
                <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
                <Line dataKey="mathematics" name="math" />
                <Line type="monotone" dataKey="physics" stroke="red" strokeWidth={2} />
                <Line dataKey="chemistry" stroke="green" />
                <XAxis dataKey="name" />
                <YAxis width="auto" label={{ value: 'Marks', position: 'insideLeft', angle: -90 }} />
                <Tooltip />
                <Legend />
                {/* <Legend align="right"/> */}
            </LineChart>
        </div>
    )
}
