// import React from 'react'

import { Check, MoreVert, Xmark } from "iconoir-react"
import Chip from "./Chip"
import { useState } from "react"
import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilState } from "recoil";
import { activeTable } from '../States/ActiveTable';
import { Dropdown } from "./Buttons/Dropdown";
import { Button } from "./Buttons/Button";

interface Props{
  tableData: string[] | number[]
}

const Table:React.FC<Props> = ({tableData}) => {

  const [active, setActive] = useState(false)

  const [modal, setModal] = useState(false)
  const [activeModal, setActiveModal] = useState(0)

  const [dropdown , setDropdown] = useState(false)
  
  const [activeTables, setActiveTables] = useRecoilState(activeTable)

  const status = ["completed", "pending", "canceled"]
  const [statusIndex, setActiveIndex] = useState(0)

  const ModalCheckBox =()=>{

    const [modalCheckBox, setModalCheckBox] = useState(false)

    return(
      <div className="flex items-center text_small gap-5">
        <button onClick={()=>setModalCheckBox(!modalCheckBox)} className="box md:w-5 w-6 h-6 md:h-5 rounded-full flex items-center justify-center">
          <AnimatePresence>
            {modalCheckBox && 
              <motion.div initial={{scale:0}} animate={{scale:1}} exit={{scale:0}}>
                <Check/>
              </motion.div>
              }
          </AnimatePresence>
        </button>

        <p>Connections</p>
      </div>
    )
  }

  const data = tableData

  return (
    <div className="overflow-scroll md:overflow-visible  flex flex-col gap-2">
        {/* elements*/}
        <div className="box bg-none w-fit md:w-full py-2 px-4 rounded-2xl flex items-center justify-between gap-10 md:gap-0 capitalize text_small text-nowrap">
            {/* checkBov */}
            <div className="flex items-center gap-10">
              <button onClick={()=>setActive(!active)} className="box md:w-10 w-6 h-6 md:h-10 rounded-full flex items-center justify-center text-xs md:text-lg">
                <AnimatePresence>
                  {active && 
                    <motion.div initial={{scale:0}} animate={{scale:1}} exit={{scale:0}}>
                      <Check/>
                    </motion.div>
                    }
                </AnimatePresence>
              </button>
              <p className="w-[10em]">name</p>
            </div>

            <p className="w-[10em]">serial no.</p>
            <p className="w-[10em]">status</p>
            <p className="w-[10em]">start date</p>
            <p className="w-[10em]">end date</p>
            <MoreVert className="text-transparent"/>
        </div>
        {/* elements*/}
        {data.map((item, index)=>(
          <div key={index} className="relative border-[1px] border-[#445B8A] bg-none w-fit md:w-full py-2 px-4  rounded-2xl flex items-center justify-between gap-10 md:gap-0 capitalize text_small text-nowrap" style={{background:activeTables ===index ? '#2F406480':``}}>
            {/* checkBov */}
            <div className="flex items-center gap-10">
            <button onClick={()=>setActiveTables(index)} className="box md:w-10 w-6 h-6 md:h-10 rounded-full flex items-center justify-center text-xs md:text-lg">
                <AnimatePresence>
                  {active || activeTables === index &&
                    <motion.div initial={{scale:0}} animate={{scale:1}} exit={{scale:0}}>
                      <Check/>
                      
                    </motion.div>
                    }
                </AnimatePresence>
              </button>
              <p className="w-[10em]">Genshin Impact</p>
            </div>

            <p className="w-[10em]">RWA-fed19hdiqi{item}</p>
            <p className="w-[10em]"><Chip text="Complete" color="#C2E7B1"/></p>
            <p className="w-[10em]">24-07-2024</p>
            <p className="w-[10em]">24-07-2024</p>
            <button onClick={()=>[setModal(!modal), setActiveModal(index)]}>
              <MoreVert/>
            </button>
            <AnimatePresence>
              {modal && activeModal === index &&
                <motion.div 
                  initial={{y:-20, opacity:0}}
                  animate={{y:0, opacity:1}}
                  exit={{y:-20, opacity:0}}
                  className="absolute box md:p-5 p-3 top-6 right-7 z-10 backdrop-blur-sm rounded-2xl flex flex-col md:gap-7 gap-3">
                    <Dropdown data={status} dropdown={dropdown} setDropdown={setDropdown} index={statusIndex} setIndex={setActiveIndex} padding={2} />
                    <ModalCheckBox/>
                    <ModalCheckBox/>
                    <ModalCheckBox/>
                    <ModalCheckBox/>
                    <Button icon={<Xmark/>} func={()=>console.log('pp')}  name="delete"/>
              </motion.div>}
            </AnimatePresence>
        </div>
        ))
        }
    </div>
  )
}

export default Table