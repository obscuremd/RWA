import CircleProgress from '../../Atoms/CircleProgress'
import { ipsum } from '../../assets/Data'
import { AddButton } from '../../Atoms/Buttons/AddButton'

const Folder = () => {
  return (
    <div className='box flex flex-col md:gap-5 gap-2 p-2 rounded-2xl'>
      {/* first part */}
      <div className='box flex p-3 gap-2 rounded-2xl items-center justify-center'>
        <CircleProgress color='#C2E7B1' value={54.67}/>

        <div className='flex flex-col gap-2'>
          <p className='text_medium font-bold'>Document Stats</p>
          <p className='line-clamp-4 md:w-[28em] w-[26em] overflow-hidden text_small opacity-50'>{ipsum}</p>
        </div>

      </div>
      {/* second part */}
      <div className='flex md:p-2 justify-between rounded-2xl items-center'>

        <div className='flex md:gap-5 gap-3'>
          <div className='flex gap-2 items-center'>
            <p className='md:text-lg text-xs font-bold'>231</p>
            <p className='text_small font-bold opacity-50 capitalize w-[5em]'>Complete</p>
          </div>
          <div className='flex gap-2 items-center'>
            <p className='md:text-lg text-xs font-bold'>191</p>
            <p className='text_small font-bold opacity-50 capitalize w-[5em]'>pending</p>
          </div>
          <div className='flex gap-2 items-center'>
            <p className='md:text-lg text-xs font-bold'>392</p>
            <p className='text_small font-bold opacity-50 capitalize w-[5em]'>Deleted</p>
          </div>
        </div>

        <AddButton func={()=>console.log(1)} name='Projects'/>
      </div>
    </div>
  )
}

export default Folder