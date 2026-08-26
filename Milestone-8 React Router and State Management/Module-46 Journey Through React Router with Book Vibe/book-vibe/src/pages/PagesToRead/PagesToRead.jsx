import booksData from "../../../public/booksData.json";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];

// #endregion
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};


const TriangleBar = (props) => {
  const { x, y, width, height, index } = props;

  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: 'strokeWidth 0.3s ease-out',
      }}
    />
  );
};

const CustomColorLabel = (props) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};


const PagesToRead = () => {
  return (
    <div className="rounded md:rounded-2xl bg-gray-100 p-1 sm:p-5 md:p-10 lg:p-20 my-12">
      <BarChart
        style={{ width: '100%', maxHeight: '700px', aspectRatio: 1.618 }}
        responsive
        data={booksData}
        margin={{
          top: 20,
          right: 0,
          left: 10,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip cursor={{ fillOpacity: 0.5 }} />
        <XAxis dataKey="bookName" interval={0} angle={-25}
          textAnchor="end"
          height={50}
          tick={{
            fontSize: 8,
            fill: "#374151",   // text color
            fontWeight: 300,
          }} />
        <YAxis width="auto" dataKey="totalPages" />
        <Bar dataKey="totalPages" fill="#8884d8" shape={TriangleBar} activeBar>
          <LabelList content={CustomColorLabel} position="top" />
        </Bar>
      </BarChart>
    </div>
  );
};

export default PagesToRead;