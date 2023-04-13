import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

export default function Recharts() {
  return (
    <ResponsiveContainer width='99%' aspect={2}>
      <PieChart>
        <Legend verticalAlign='top' height={4} />
        <Pie
          dataKey='value'
          isAnimationActive={false}
          data={data01}
          cx={200}
          cy={200}
          outerRadius={80}
          fill='#E7ACF5'
          label
        />
        <Pie
          dataKey='value'
          data={data02}
          cx={500}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill='#5AD6DB'
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
