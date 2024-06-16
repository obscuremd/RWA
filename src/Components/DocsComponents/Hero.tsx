import Folder from './Folder'
import FolderDescription from './FolderDescription'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row md:gap-[10%] gap-5 items-center'>
        <Folder/>
        <FolderDescription/>
    </div>
  )
}

export default Hero