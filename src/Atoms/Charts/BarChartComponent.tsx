import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip } from 'recharts'
import { CustomToolTip } from './CustomToolTip'

interface DataItem {
  // Define the shape of your data item here
}

interface Props<T>{
  Data: T[]
}

const BarChartComponent: React.FC<Props<DataItem>> = ({Data}) => {
  return (
    <ResponsiveContainer>
      <BarChart data={Data}>
        <Tooltip content={<CustomToolTip active label="" payload={[]} />}/>
        <Legend/>
        <Bar dataKey={'salesProduct1'} fill='#3182BD'/>
        <Bar dataKey={'salesProduct2'} fill='#C2E7B1'/>
      </BarChart>
    </ResponsiveContainer>
  )
}


export default BarChartComponent
