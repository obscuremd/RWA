import { Area, AreaChart, Legend, ResponsiveContainer, Tooltip } from "recharts"
// import { Shared } from "../../assets/Shared"
import { CustomToolTip } from "./CustomToolTip"
import React from "react"

interface DataItem {
  // Define the shape of your data item here
}

interface Props<T>{
  Data: T[]
}

const AreaChartComponent: React.FC<Props<DataItem>> = ({Data}) => {
  return (
    <ResponsiveContainer>
      <AreaChart data={Data}>
        <Legend />
        <Tooltip content={<CustomToolTip active label="" payload={[]} />}/>
        <Area type={"monotone"} dataKey='salesProduct1' stackId={1}/>
        <Area type={"monotone"} dataKey='salesProduct2' stackId={2} stroke="#C2E7B1" fill="#C2E7B1"/>
      </AreaChart>
    </ResponsiveContainer>
  )
}



export default AreaChartComponent
