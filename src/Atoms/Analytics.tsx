import { Link } from "react-router-dom"
import { Shared } from "../assets/Shared"
// import { MoneySquare } from "iconoir-react/solid"
import { motion } from "framer-motion"
import styles from '../assets/Shared.module.css'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Props{
  colors: string, 
  icon?: React.ReactNode, 
  title: string, 
  link: string, 
  amount: string, 
  rate: string, 
  rate2?: number, 
}

const Analytics: React.FC<Props> =({colors, icon, title, link, amount, rate, rate2}) => {
  return (
    <motion.div 
      initial={{x:100, opacity:0}}
      animate={{x:0, opacity:1}}
      whileHover={{scale:1.05, boxShadow:'0 0 20px rgba(68, 91, 138, 0.25)', zIndex:20}}
      className={`${styles.box} w-full flex items-center justify-between md:py-7 py-4 md:px-5 px-3 md:rounded-3xl rounded-2xl`}>
      {/* Right */}
      <div className="Right flex flex-col gap-2">
        {/* icon?? and title */}
        <div className="flex items-center gap-[5%]" style={{fontSize:Shared.Text.small}}>
            {icon &&
                <div style={{backgroundColor: `${colors}40`, color:colors}} className=' inline-flex md:p-2 p-1 rounded-md'>
                    {icon}
                </div>}
            <p className="text-nowrap">{title}</p>
        </div>
        {/* amount */}
        
        <p style={{fontSize:Shared.Text.large, fontWeight:'bold'}}>{amount}</p>
        {/* rate */}
        {rate &&
            <div  style={{backgroundColor: `${colors}40`}} className="p-1 w-fit rounded-lg inline-flex">
              
              <p style={{fontSize:Shared.Text.small, fontWeight:'bold', color:colors}} className="inline-flex">{rate}</p>
            </div>}
        {/* link */}
        <Link to={''} style={{fontSize:Shared.Text.small}} className="underline opacity-50 text-nowrap">{link}</Link>
      </div>

      {/* left */}

          {rate2 &&
            <div className="w-24">
              <CircularProgressbar 
                value={rate2} 
                maxValue={100} 
                text={`+${rate2}%`}
                styles={{
                  path: { stroke: colors, },
                  trail: { stroke: `${colors}40`, },
                  text: { fill: colors, fontWeight: 'bold', fontSize: Shared.Text.small, },
                }}/>
              </div>}
        
    </motion.div>
  )
}

export default Analytics
