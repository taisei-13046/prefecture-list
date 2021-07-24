import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const Graph = (props) => {
	const {data} = props;
	return (
		<>
		<LineChart
		width={1000}
		height={300}
		data={data}
		margin={{
			top: 5,
			right: 30,
			left: 20,
			bottom: 5
		}}
		>
		<CartesianGrid strokeDasharray="3 3" />
		<XAxis dataKey="year" />
		<YAxis />
		<Tooltip />
		<Legend />
		<Line
			type="monotone"
			dataKey="value"
			stroke="#8884d8"
			activeDot={{ r: 8 }}
		/>
		</LineChart>
		</>
	)
}
