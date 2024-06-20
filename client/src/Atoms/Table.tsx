// import React from 'react'

import { Check, MoreVert } from "iconoir-react"
import Chip from "./Chip"
import { useState } from "react"
import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from "recoil";
import { activeTable } from '../States/ActiveTable';
import { DocsData } from "../States/DocsData";
import { formatDate } from '../assets/Shared';

interface Props{
}

interface Document {
  _id: string;
  name: string;
  userId: string;
  type: string;
  serialNumber: string;
  status: string;
  connections: boolean; // replace with correct type if known
  billing: boolean; // replace with correct type if known
  sharing: boolean; // replace with correct type if known
  createdAt: string;
  updatedAt: string;
}

const Table:React.FC<Props> = () => {

  const doc = useRecoilValue<Document[]>(DocsData)

  

  // main check box state
  const [active, setActive] = useState(false)

  // modal visible state
  const [modal, setModal] = useState(false)
  const [activeModal, setActiveModal] = useState(0)

  
  
  // active table state
  const [activeTables, setActiveTables] = useRecoilState(activeTable)


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
        {doc.map((item, index)=>(
          <div onClick={()=>setActiveTables(index)} key={index} className="relative border-[1px] border-[#445B8A] bg-none w-fit md:w-full py-2 px-4  rounded-2xl flex items-center justify-between gap-10 md:gap-0 capitalize text_small text-nowrap" style={{background:activeTables ===index ? '#2F406480':``}}>
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
              <p className="w-[10em] truncate">{item?.name}</p>
            </div>

            <p className="w-[10em]">{item?.serialNumber}</p>
            <div className="w-[10em]">
                <Chip text={item.status} 
                  color={
                    item.status === 'complete' ? "#C2E7B1" : 
                    item.status === 'pending' ? "#CE7F54" : 
                    item.status === 'canceled' ? "#FF6584" : 
                    "#000000" // default color if none of the conditions match
                  }/>
                  </div>
            <p className="w-[10em]">{formatDate(item.createdAt)}</p>
            <p className="w-[10em]">{formatDate(item.updatedAt)}</p>
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
                    <p>edit</p>
                    <p>share</p>
                    <p>Delete</p>
              </motion.div>
              }
            </AnimatePresence>
        </div>
        ))
        }
    </div>
  )
}

export default Table