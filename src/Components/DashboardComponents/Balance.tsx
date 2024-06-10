
// import { motion } from "framer-motion"
import { Shared } from "../../assets/Shared"
import { DollarCircle} from 'iconoir-react'
import Analytics from "../../Atoms/Analytics"
import Dropdown from "../../Atoms/Buttons/Dropdown"


const projects =['Project 1', 'Gold Project', 'House Project', 'Smart Contract', 'BUI contract', 'Erhenede Mudiaga Daniel']

interface Props{
  dropdown:boolean, 
  setDropdown:(value: boolean) => void, 
  index:number, 
  setIndex:(value: number) => void
}

const Balance : React.FC<Props> = ({dropdown, setDropdown, index, setIndex}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 w-full md:items-center">

        {/* paragraph */}
        <div className="flex flex-col gap-5">
          <p style={{fontSize:Shared.Text.large}} className="capitalize font-bold text-nowrap">what’s the <br /> plan for today?</p>
          <Dropdown truncate="" data={projects} dropdown={dropdown} index={index} setDropdown={setDropdown} setIndex={setIndex} number={true} padding={4} dataStyle={'w-[6em] truncate'}/>
        </div>

        <div className='flex gap-[2%] w-full overflow-scroll md:overflow-visible'>
          <Analytics icon rate="" colors={'#C2E7B1'} title={'Estimated'} amount={'$4,500.00'} link={'View Net Earnings'} rate2={'+24.25%'} icon2={<DollarCircle/>}/>
          <Analytics icon rate="" colors={'#9EB1D8'} title={'Estimated'} amount={'$4,500.00'} link={'View Net Earnings'} rate2={'+24.25%'} icon2={<DollarCircle/>}/>
          <Analytics icon rate="" colors={'#CE7F54'} title={'Estimated'} amount={'$4,500.00'} link={'View Net Earnings'} rate2={'+24.25%'} icon2={<DollarCircle/>}/>
        </div>
      </div>
  )
}

export default Balance
