
// import { motion } from "framer-motion"
import { Shared } from "../../assets/Shared"
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
          <Analytics rate="" colors={'#C2E7B1'} title={'Total Earnings'} amount={'$4,500.00'} link={'View Net Earnings'} rate2={24.25}/>
          <Analytics rate="" colors={'#9EB1D8'} title={'Total Earnings'} amount={'$4,500.00'} link={'View Net Earnings'} rate2={73.17}/>
          <Analytics rate="" colors={'#CE7F54'} title={'Total Earnings'} amount={'$4,500.00'} link={'View Net Earnings'} rate2={43.90}/>
        </div>
      </div>
  )
}

export default Balance
