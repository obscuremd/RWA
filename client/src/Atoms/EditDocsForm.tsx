import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { Dropdown } from './Buttons/Dropdown';
import { Check, Xmark } from 'iconoir-react';
import { Button } from './Buttons/Button';

interface ModalProps{
    name: string
  }

const EditDocsForm = () => {

     // dropdown state
    const status = ["completed", "pending", "canceled"]
    const [statusIndex, setActiveIndex] = useState(0)

    // modal checkbox component
    const [ConfirmButton, setConfirmButton] = useState(false)

    // dropdown visible state
    const [dropdown , setDropdown] = useState(false)


    const ModalCheckBox:React.FC<ModalProps> =({name})=>{
    
        const [modalCheckBox, setModalCheckBox] = useState(false)
        
        return(
          <div className="flex items-center text_small gap-5">
            <button onClick={()=>[setModalCheckBox(!modalCheckBox),setConfirmButton(!modalCheckBox)]} className="box md:w-5 w-6 h-6 md:h-5 rounded-full flex items-center justify-center">
              <AnimatePresence>
                {modalCheckBox && 
                  <motion.div initial={{scale:0}} animate={{scale:1}} exit={{scale:0}}>
                    <Check/>
                  </motion.div>
                  }
              </AnimatePresence>
            </button>
    
            <p>{name}</p>
          </div>
        )
      }

  return (
    <AnimatePresence>
                <motion.div 
                  initial={{y:-20, opacity:0}}
                  animate={{y:0, opacity:1}}
                  exit={{y:-20, opacity:0}}
                  className="absolute box md:p-5 p-3 top-6 right-7 z-10 backdrop-blur-sm rounded-2xl flex flex-col md:gap-7 gap-3">
                    <Dropdown data={status} dropdown={dropdown} setDropdown={setDropdown} index={statusIndex} setIndex={setActiveIndex} padding={5} />
                    <ModalCheckBox name="connections"/>
                    <ModalCheckBox name="billings"/>
                    <ModalCheckBox name="sharing"/>
                    <div className="w-full flex flex-col gap-2">
                      {ConfirmButton && <Button func={()=>console.log('pp')}  name="Confirm"/>}
                      <Button icon={<Xmark/>} func={()=>console.log('pp')}  name="delete"/>
                    </div>
              </motion.div>
            </AnimatePresence>
  )
}

export default EditDocsForm