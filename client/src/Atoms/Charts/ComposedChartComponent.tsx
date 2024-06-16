import { Area, Bar, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip } from 'recharts'
import { CustomToolTip } from './CustomToolTip'

interface DataItem {
  // Define the shape of your data item here
}

interface Props<T>{
  Data: T[]
}

const ComposedChartComponent: React.FC<Props<DataItem>> =({Data}) => {
  return (
    <ResponsiveContainer>
      <ComposedChart data={Data}>
        <Tooltip content={<CustomToolTip active label="" payload={[]} />}/>
        <Legend/>
        <Area dataKey={'salesProduct1'}/>
        <Bar dataKey={'salesProduct2'} fill='#C2E7B1' barSize={20}/>
        <Line dataKey={'salesProduct3'} stroke='#CE7F54'/>
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default ComposedChartComponent
