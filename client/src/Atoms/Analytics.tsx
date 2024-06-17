import { Link } from "react-router-dom"
// import { MoneySquare } from "iconoir-react/solid"
import { motion } from "framer-motion"

import 'react-circular-progressbar/dist/styles.css';
import CircleProgress from "./CircleProgress";
import Chip from "./Chip";

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
      className={`box w-full flex items-center justify-between md:py-7 py-4 md:px-5 px-3 md:rounded-3xl rounded-2xl`}>
      {/* Right */}
      <div className="Right flex flex-col gap-2">
        {/* icon?? and title */}
        <div className="flex items-center gap-[5%] text_small">
            {icon &&
                <div style={{backgroundColor: `${colors}40`, color:colors}} className=' inline-flex md:p-2 p-1 rounded-md'>
                    {icon}
                </div>}
            <p className="text-nowrap">{title}</p>
        </div>
        {/* amount */}
        
        <p className="text_medium font-bold">{amount}</p>
        {/* rate */}
        {rate &&
          <Chip color={colors} text={rate}/>
        }
        {/* link */}
        <Link to={''} className="underline opacity-50 text-nowrap text_small">{link}</Link>
      </div>

      {/* left */}

          {rate2 &&
          <div className="ml-5 md:ml-0">

            <CircleProgress color={colors} value={rate2}/>
          </div>
            }
        
    </motion.div>
  )
}

export default Analytics
