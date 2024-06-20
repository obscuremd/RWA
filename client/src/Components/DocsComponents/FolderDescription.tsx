
import {  NavArrowDown } from 'iconoir-react'
import { AddButton } from '../../Atoms/Buttons/AddButton'
import { Button } from '../../Atoms/Buttons/Button'
import Chip from '../../Atoms/Chip'
import { useRecoilState, useRecoilValue } from 'recoil'
import { AddDocumentState } from '../../States/AddDocumentState'
import { DocsData } from '../../States/DocsData'
import { formatDate } from '../../assets/Shared'
import { activeTable } from '../../States/ActiveTable'


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
interface ColumnProps{
  head1: string
  property1: string
  head2: string
  property2?: string
  element?: React.ReactNode
}

const Columns:React.FC<ColumnProps> =({head1, property1,head2, property2,element})=>(
  <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <p className='text_small font-bold capitalize'>{head1}</p>
        <p className='text_small opacity-50'>{property1}</p>
      </div>
      {element ?
        <div className='flex flex-col gap-'>
          <div className='text_small font-bold capitalize'>{head2}</div>
          {element}
        </div>
        :
        <div className='flex flex-col gap-2'>
          <p className='text_small font-bold capitalize'>{head2}</p>
          <p className='text_small opacity-50'>{property2}</p>
        </div>
      }
  </div>
)


const FolderDescription = () => {

  const activeDoc = useRecoilValue(activeTable)
  const doc = useRecoilValue<Document[]>(DocsData)
  const specificDoc: Document | undefined = doc[activeDoc]
  
  const [addDocumentVisible, setAddDocumentVisible] = useRecoilState(AddDocumentState)
  addDocumentVisible
  
  return (
    <div className='flex flex-col md:items-end h-full justify-between w-full md:w-fit'>
      {/* buttons */}
      <div className='flex items-center gap-2 self-end'>
        <Button func={()=>console.log(1)} name='Edit' icon={<NavArrowDown/>}/>
        <AddButton func={()=>setAddDocumentVisible(true)} name='add document'/>
      </div>

      {/* info */}
      <div className='flex flex-col gap-8 '>
        <p className='text_medium font-bold capitalize'>{specificDoc?.name}</p>

        <div className='flex gap-5 justify-between'>

          {/* column 1 */}
            <Columns 
              head1={'type'} 
              property1={specificDoc?.type} 
              head2='status' 
              element={<Chip 
                          text={specificDoc?.status}
                          color={
                            specificDoc?.status === 'complete' ? "#C2E7B1" : 
                            specificDoc?.status === 'pending' ? "#CE7F54" : 
                            specificDoc?.status === 'canceled' ? "#FF6584" : 
                            "#000000" // default color if none of the conditions match
                          }/>}/>
          {/* column 2 */}
            <Columns head1={'serial no.'} property1={specificDoc.serialNumber} head2='start Date' property2={formatDate(specificDoc.createdAt)}/>
          {/* column 3 */}
            <Columns head1={'connection'} property1={specificDoc.connections ?'enabled':'disabled'} head2='end date' property2={formatDate(specificDoc.updatedAt)}/>
          {/* column 3 */}
            <Columns head1={'billing'} property1={specificDoc.connections ?'enabled':'disabled'} head2='sharing' property2={specificDoc.connections ?'allowed':'restricted'}/>
          

        </div>
      </div>
    </div>
  )
}

export default FolderDescription