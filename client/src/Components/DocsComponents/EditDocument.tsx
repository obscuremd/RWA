import { Check, XmarkCircle } from 'iconoir-react'
import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {  EditDocumentState } from '../../States/AddDocumentState'
import { AnimatePresence, motion } from 'framer-motion';
import { zoomies } from 'ldrs'
import { IconButton } from '../../Atoms/Buttons/IconButton';
import toast from 'react-hot-toast';
import axios from 'axios'
import { url } from '../../assets/Shared';
import { Dropdown } from '../../Atoms/Buttons/Dropdown';
import { Button } from '../../Atoms/Buttons/Button';
import { DocsId } from '../../States/DocsData';
import { MongoUser } from '../../States/LoggedInState';



interface ModalProps{
    name: string
    value: boolean 
    func: ()=>void
}

zoomies.register()

const EditDocument = () => {

    const User = useRecoilValue(MongoUser)

    // document Id
    const docId = useRecoilValue(DocsId)
    
     // dropdown state
    const status = ["complete", "pending", "canceled"]
    const [statusIndex, setActiveIndex] = useState(0)

    // dropdown visible state
    const [dropdown , setDropdown] = useState(false)

    const [loading, setLoading] = useState(false)

    const [editDocumentVisible, setEditDocumentVisible] = useRecoilState(EditDocumentState)

    const [connections, setConnections] = useState(false)
    const [billing, setBilling] = useState(false)
    const [sharing, setSharing] = useState(false)
    
    const CheckBox:React.FC<ModalProps> =({name, value, func})=>(
        <div className="flex items-center text_small gap-5">
            <button onClick={func} className="box md:w-5 w-6 h-6 md:h-5 rounded-full flex items-center justify-center">
            <AnimatePresence>
                {value && 
                    <motion.div initial={{scale:0}} animate={{scale:1}} exit={{scale:0}}>
                        <Check/>
                    </motion.div>}
            </AnimatePresence>
            </button>

            <p>{name}</p>
        </div>
    )

    const edit = async()=>{
        setLoading(true)
        try {
            await axios.put(`${url}/docs/${docId}`,{userId:User?._id,connections:connections, billing:billing, sharing:sharing ,status:status[statusIndex]})

            toast.success('doc updated successfully')
            setTimeout(() => {
                setLoading(false)
                window.location.reload();
            }, 2000);
        } catch (error) {
            setLoading(false);
            toast.error('error')
        }
    }

    const deleteDoc = async()=>{
        setLoading(true)
        try {
            await axios.delete(`${url}/docs/${docId}`,{data:{userId:User?._id}})

            toast.success('doc updated successfully')
            setTimeout(() => {
                setLoading(false)
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error('error')
        }
    }



return (
    <AnimatePresence>
        <motion.div
            initial={{opacity:0, scale:0}}
            animate={{opacity:1, scale:1}} 
            exit={{opacity:0, scale:0}}
            className='fixed w-[90%] md:w-[80%] h-[80vh] backdrop-blur-sm flex items-center justify-center'>
        <div className='box p-5 flex flex-col gap-7 rounded-2xl items-center'>
            <div className='flex justify-between w-full'>
                <p className='capitalize text_medium font-medium'>Edit Section</p>
                <button onClick={()=>setEditDocumentVisible(!editDocumentVisible)} className='text-[#445B8A]'>
                    <XmarkCircle/>
                </button>
            </div>

            <motion.div initial={{y:-20}} animate={{y:0}} className='flex flex-col md:gap-7 gap-3'>
                <Dropdown data={status} dropdown={dropdown} setDropdown={setDropdown} index={statusIndex} setIndex={setActiveIndex} padding={5} />
                <p className='capitalize text_small opacity-50'>Change Settings</p>
                <CheckBox name='connections' value={connections} func={()=>setConnections(!connections)}/>
                <CheckBox name='billings' value={billing} func={()=>setBilling(!billing)}/>
                <CheckBox name='sharing' value={sharing} func={()=>setSharing(!sharing)}/>

                <div className='pt-5 border-t-[1px] border-[#445B8A]'>
                    {loading 
                        ?<l-zoomies size="80" stroke="5" bg-opacity="0.1" speed="1.4" color="#5372B1"/>
                        :<div className='flex gap-10 items-center'>
                            <IconButton name='Delete' icon={<XmarkCircle/>} extraIconStyle='text-[#FF6584]' func={deleteDoc}/>
                            <div className='flex gap-2'>
                                <Button name='Cancel' func={()=>setEditDocumentVisible(!editDocumentVisible)}/>
                                <Button name='Save Changes' func={edit}/>
                            </div>
                        </div>}
                </div>
            </motion.div>
        </div>
        </motion.div>
    </AnimatePresence>
    )
}

export default EditDocument