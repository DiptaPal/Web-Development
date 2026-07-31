import { use } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export const MarksChart = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    // data processing for the chart

    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.mathematics
        }

        const avg = (student.physics + student.chemistry + student.math) / 3;

        student.avg = avg;

        return student;
    })


    return (
        <div className="mt-10">
            <BarChart
                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={marksChartData}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip />
                <Legend />
                <Bar dataKey="avg" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[0, 0, 0, 0]} />
                <Bar dataKey="math" fill="#82ca9d" activeBar={{ fill: 'gray', stroke: 'gray' }} radius={[10, 10, 0, 0]} />
                <Bar dataKey="chemistry" fill="gray" activeBar={{ fill: 'orange', stroke: 'orange' }} />
                <Bar dataKey="physics" fill="blue" activeBar={{ fill: 'yellow', stroke: 'yellow' }} />
            </BarChart>
        </div>
    )
}
