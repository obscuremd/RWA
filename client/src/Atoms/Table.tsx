// import React from 'react'

import { Check, MoreVert } from "iconoir-react"
import Chip from "./Chip"
import { useState } from "react"
import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilState } from "recoil";
import { activeTable } from '../States/ActiveTable';

const Table = () => {

  const [active, setActive] = useState(false)

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
        {[0,1,2,3,4,5].map((item, index)=>(
          <div key={index} className="border-[1px] border-[#445B8A] bg-none w-fit md:w-full py-2 px-4  rounded-2xl flex items-center justify-between gap-10 md:gap-0 capitalize text_small text-nowrap" style={{background:activeTables ===index ? '#2F406480':``}}>
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
            <button>
              <MoreVert/>
            </button>
        </div>
        ))
        }
    </div>
  )
}

export default Table