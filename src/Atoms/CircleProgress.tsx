import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { isMobile } from '../assets/Shared'

interface props{
    value:number
    color:string 
}

const CircleProgress:React.FC<props> = ({value, color}) => {
return (
    <div className="md:w-24 w-16">
            <CircularProgressbar 
                value={value} 
                maxValue={100} 
                text={`+${value}%`}
                styles={{
                    path: { stroke: color, },
                    trail: { stroke: `${color}40`, },
                    text: { fill: color, fontWeight: 'bold', fontSize:isMobile ? '0.9rem':'0.8rem', },
                }}/>
    </div>
    )
}

export default CircleProgress