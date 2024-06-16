import React from 'react'

interface Props{
    text:string
    color:string
}

const Chip:React.FC<Props> = ({text, color}) => {
  return (
    <div style={{background:`${color}40`, color:color}} className={`text_small p-1 rounded-lg font-medium w-fit`}>
        {text}
    </div>
  )
}

export default Chip