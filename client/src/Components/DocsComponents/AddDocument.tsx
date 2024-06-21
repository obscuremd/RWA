import { Check, FolderPlus, Page, XmarkCircle } from 'iconoir-react'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { AddDocumentState } from '../../States/AddDocumentState'
import { AnimatePresence, motion } from 'framer-motion';
import { AddButton } from '../../Atoms/Buttons/AddButton';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { zoomies } from 'ldrs'
import { IconButton } from '../../Atoms/Buttons/IconButton';
import toast from 'react-hot-toast';
import axios from 'axios'
import { generateRandomString, url } from '../../assets/Shared';


interface ModalProps{
    name: string
    value: boolean 
    func: ()=>void
}

const AddDocument = () => {

    const [randomString, setRandomString] = useState('ppp');
    useEffect(() => {
        setRandomString(generateRandomString(10));
    }, [])

    zoomies.register()
    const storage = getStorage()
    const [document, setDocument] = useState<File|null>(null);
    const [documentUrl, setDocumentUrl] = useState('');

   
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setDocument(e.target.files[0]);
        }
    };

    const [loading, setLoading] = useState(false)
    const [createDocumentloading, setCreateDocumentLoading] = useState(false)
    const [uploaded, setUploaded] = useState(false)
    const [checkBoxVisible, setCheckBoxVisible] = useState(false)

    const uploadDoc = async() =>{
        if (!document) {
            toast.error("No file selected");
            return;
        }
        setLoading(true)
        const ImageRef = ref(storage,  `files/${document?.name}`)

        try {
            const upload = await uploadBytes(ImageRef, document)
            const url = await getDownloadURL(upload.ref)
            setDocumentUrl(url)
            setLoading(false)
            setUploaded(true)
            setCheckBoxVisible(true)
        } catch (error) {
            setLoading(false)
            toast.error('error uploading ')
            console.log(error)
        }
    }

    const [addDocumentVisible, setAddDocumentVisible] = useRecoilState(AddDocumentState)

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

    const createDocument =async()=>{
        setCreateDocumentLoading(true)

        const fileName = document?.name;
        const fileNameWithoutExtension = fileName?.substring(0, fileName?.lastIndexOf('.')) || fileName;
        const fileExtension = fileName?.substring(fileName?.lastIndexOf('.') + 1);
    

        try {
            
            await axios.post(`${url}/docs/66716ae91527ac8d699703f2`,{
                document:documentUrl,
                name:fileNameWithoutExtension,
                type:`.${fileExtension}`,
                serialNumber:`RWA-${randomString}`,
                status:"pending",
                connections:connections,
                billing:billing,
                sharing:sharing
            })

            setTimeout(() => {
                toast.success('document uploaded successfully')
                setAddDocumentVisible(false)
                window.location.reload()
            }, 5000);
        } catch (error) {
            setCreateDocumentLoading(false);
            toast.error('error')
            console.error(error)
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
            <div className='flex flex-col gap-2'>
                <button onClick={()=>setAddDocumentVisible(!addDocumentVisible)} className='text-[#445B8A] self-end'>
                    <XmarkCircle/>
                </button>
                <p className='capitalize text_medium font-medium self-center'>Upload your files here</p>
                <p className='capitalize text_small opacity-50 font-medium self-center'>files should be zip, pdf, text, png</p>
            </div>

            {document === null
                ?<label htmlFor='fileInput' className='box md:w-52 w-40 h-40 md:h-52 flex flex-col items-center justify-center rounded-2xl cursor-pointer'>
                    <FolderPlus className='md:text-7xl text-5xl text-[#445B8A]'/>
                    <p className='capitalize text_small opacity-50 font-medium'>select your file here</p>
                </label>
                
                :<div className='box md:w-52 w-40 h-48 md:h-60 flex flex-col gap-2 items-center justify-center rounded-2xl cursor-pointer'>
                    <button onClick={()=>setDocument(null)} className='text-[#445B8A] self-end mr-5'>
                        <XmarkCircle/>
                    </button>
                    <Page className='md:text-7xl text-5xl text-[#445B8A]'/>
                    <p className='capitalize text_small opacity-50 font-medium max-w-[12em] truncate'>{document.name}</p>
                    {loading 
                        ?<l-zoomies size="80" stroke="5" bg-opacity="0.1" speed="1.4" color="#5372B1"/>
                        :(uploaded 
                            ?<IconButton icon={<Check/>} name='Submitted'/>
                            :<AddButton name='Upload Document' func={uploadDoc}/>)}
                </div>
                }

            <input type="file" hidden id='fileInput' onChange={handleFileChange}/>
        
            {checkBoxVisible &&
                <motion.div initial={{y:-20}} animate={{y:0}} className='flex flex-col md:gap-7 gap-3'>
                    <CheckBox name='connections' value={connections} func={()=>setConnections(!connections)}/>
                    <CheckBox name='billings' value={billing} func={()=>setBilling(!billing)}/>
                    <CheckBox name='sharing' value={sharing} func={()=>setSharing(!sharing)}/>
                    {createDocumentloading
                        ?<l-zoomies size="80" stroke="5" bg-opacity="0.1" speed="1.4" color="#5372B1"/>
                        :<AddButton name='create document' func={createDocument}/>}
                </motion.div>}
        </div>
        </motion.div>
    </AnimatePresence>
    )
}

export default AddDocument