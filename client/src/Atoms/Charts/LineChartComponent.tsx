import { Legend, Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import { CustomToolTip } from './CustomToolTip'

interface DataItem {
  // Define the shape of your data item here
}

interface Props<T>{
  Data: T[]
}
const LineChartComponent: React.FC<Props<DataItem>> =({Data}) => {
  return (
    <ResponsiveContainer>
      <LineChart data={Data}>
        <Legend/>
        <Tooltip content={<CustomToolTip active label="" payload={[]} />}/>
        <Line dataKey={'salesProduct1'}/>
        <Line dataKey={'salesProduct2'} stroke='#C2E7B1'/>
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartComponent
