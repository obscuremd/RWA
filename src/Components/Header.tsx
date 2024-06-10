import { useLocation } from "react-router-dom"
import { Shared } from "../assets/Shared"
import { BellNotification, LogOut, Search, 
  // Settings 
} from "iconoir-react"
import { motion } from "framer-motion"
import { useClerk } from "@clerk/clerk-react"


const Header = () => {

  const {signOut} = useClerk()

  const handleSignOut =async()=>{
    await signOut()
  }

  const isMobile = window.innerWidth < 768

    const location = useLocation().pathname
    const routeName = location.split('/').pop()

  return (
    <div className="py-4 md:px-8 pl-[13%] pr-4 border-b-[1px] border-[#445B8A] w-full flex justify-between items-center sticky top-0 backdrop-blur-md">
      {/* route name */}
      <p className="capitalize font-bold text-nowrap" style={{fontSize:Shared.Text.xl}}>{routeName==''?'Dashboard':routeName}</p>
      {/* input */}
      <div className="w-[50%] flex gap-3 justify-center items-center" style={{fontSize:Shared.Text.small}} >
            <motion.input 
            whileFocus={{borderColor:'#5d7cb9'}}
            type="text" 
            placeholder="Find The Tea" 
            className="md:py-3 p-2 md:px-5 w-full rounded-full bg-[#2F406480] border-[1px] border-[#445B8A] outline-none" />
        {!isMobile && <div className="md:w-12 w-6 md:h-12 h-6 rounded-full border-[1px] border-[#445B8A] flex justify-center items-center"><Search/></div>}
      </div>
      {/* notification and settings */}
      <div className="flex md:gap-5 gap-1"  style={{fontSize:Shared.Text.small}}>
        <div className="relative">
          <div className="absolute left-[70%] bottom-[70%] md:w-5 w-3 md:h-5 h-3 rounded-full bg-[#C2E7B1] text-[#445B8A] flex justify-center items-center">14</div>
          <div className="md:w-10 w-5 h-5 md:h-10 rounded-full border-[1px] border-[#445B8A] flex justify-center items-center"><BellNotification/></div>
        </div>
        <button onClick={handleSignOut} className="md:w-10 w-5 h-5 md:h-10 rounded-full border-[1px] border-[#445B8A] flex justify-center items-center"><LogOut/></button>
      </div>
    </div>
  )
}

export default Header
