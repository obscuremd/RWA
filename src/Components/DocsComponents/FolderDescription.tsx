
import {  NavArrowDown } from 'iconoir-react'
import { AddButton } from '../../Atoms/Buttons/AddButton'
import { Button } from '../../Atoms/Buttons/Button'
import Chip from '../../Atoms/Chip'

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
          <p className='text_small font-bold capitalize'>{head2}</p>
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
  return (
    <div className='flex flex-col gap-6 md:items-end'>
      {/* buttons */}
      <div className='flex items-center gap-2'>
        <Button func={()=>console.log(1)} name='Edit' icon={<NavArrowDown/>}/>
        <AddButton func={()=>console.log(1)} name='add document'/>
      </div>

      {/* info */}
      <div className='flex flex-col gap-8'>
        <p className='text_medium font-bold'>Genshin Impact</p>

        <div className='flex gap-5'>

          {/* column 1 */}
            <Columns head1={'type'} property1='pdf' head2='status' element={<Chip text='Completed' color='#C2E7B1'/>}/>
          {/* column 2 */}
            <Columns head1={'serial no.'} property1='RWA-fed19hdiqi' head2='start Date' property2='24-04-2021'/>
          {/* column 3 */}
            <Columns head1={'connection'} property1='enabled' head2='end date' property2='20-05-2023'/>
          {/* column 3 */}
            <Columns head1={'billing'} property1='disabled' head2='sharing' property2='allowed'/>
          

        </div>
      </div>
    </div>
  )
}

export default FolderDescription