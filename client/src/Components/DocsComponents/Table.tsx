// import React from 'react'

import { Check,
   MoreVert } from "iconoir-react"
import Chip from "../../Atoms/Chip"
import { useState } from "react"
import { AnimatePresence, motion } from 'framer-motion';

const Table = () => {

  const [active, setActive] = useState(false)

  return (
    <div className="soverflow-scroll flex flex-col gap-2">
        {/* elements*/}
        <div className="box bg-none w-fit md:w-full py-2 px-4  rounded-2xl flex items-center justify-between gap-32 md:gap-0 capitalize text_small text-nowrap">
            {/* checkBov */}
            <div className="flex items-center gap-10">
              <button onClick={()=>setActive(!active)} className="box w-10 h-10 rounded-full flex items-center justify-center text-lg">
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
            <MoreVert/>
        </div>
        {/* elements*/}
        <div className="box bg-none w-fit md:w-full py-2 px-4  rounded-2xl flex items-center justify-between gap-32 md:gap-0 capitalize text_small text-nowrap">
            {/* checkBov */}
            <div className="flex items-center gap-10">
              <div className="box w-10 h-10 rounded-full"/>
              <p className="w-[10em]">Genshin Impact</p>
            </div>

            <p className="w-[10em]">RWA-fed19hdiqi</p>
            <p className="w-[10em]"><Chip text="Complete" color="#C2E7B1"/></p>
            <p className="w-[10em]">24-07-2024</p>
            <p className="w-[10em]">24-07-2024</p>
            <MoreVert/>
        </div>
    </div>
  )
}

export default Table