import splash from '../assets/splash.png'
import { Shared } from '../assets/Shared'
import { useState } from 'react';
import { EyeClosed, EyeSolid, Mail} from 'iconoir-react';
import { Lock } from 'iconoir-react/regular';
import { useSignIn } from '@clerk/clerk-react';
import toast from 'react-hot-toast';
import { waveform } from 'ldrs'
import { motion } from 'framer-motion';


waveform.register()

interface Props{
  setActives: (value: number) => void
}

const Login : React.FC<Props> = ({setActives}) => {
  
  const [activeForm, setActiveForm] = useState(0)

  const {isLoaded, signIn} =useSignIn()
  const [loading, setLoading] = useState(false)

  const [passwordFocus, setPasswordFocus] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)

  const [passwordVisible, setPasswordVisible] = useState(false)

  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')

 
  
  
  const Login =async()=>{
    
    if(!isLoaded){return}
    
    if(email =='' || password === ''){
      setLoading(true)
      setTimeout(()=>{
        toast.error('Please enter your email/ password')
        setLoading(false)  
      },1000)
    }
    else{
      
      setLoading(true)

      try {
        await signIn.create({
          strategy:'email_link',
          redirectUrl:`${window.location.origin}/`,

          identifier: email,
          // password: password
        })


      
      setTimeout(()=>{
        toast.success('code sent')
        setActiveForm(1)
        setLoading(false)
          // window.location.reload()
        },2000)
        
        
      } catch (err:unknown) {
        
        const error = err as { errors?: { code: string }[] };
        
        setLoading(false)
        if(error.errors && error.errors[0]?.code === 'form_param_format_invalid'){
          toast.error('Email/Password is invalid')
        }else{
          toast.error(JSON.stringify(error.errors && error.errors[0]?.code))
          console.log(JSON.stringify(error));
          console.log(error)
        }
      }
    }
    
  }
  
  
  return (
    <div className='flex flex-col-reverse md:flex-row md:gap-36 gap-8 items-center h-full'>
    
    
    
    {/* Login */}
      {activeForm === 0 && 
        <div className='md:w-[40%] w-full flex flex-col md:gap-11 gap-5 md:px-14 px-5'>
        <motion.p initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.1}}} style={{fontSize:Shared.Text.xxl, fontWeight:'700'}}>Login</motion.p>
        
        <motion.p initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.2}}} style={{fontSize:Shared.Text.small}} className='flex gap-2'>Don’t have an account?
        <motion.button whileHover={{scale:1.1, textShadow:'0 0 5px #9eb1d876'}} onClick={()=>setActives(0)} className='text-[#9eb1d8] font-bold'>Register</motion.button>
        </motion.p>
        
        {/* inputs */}
        <div className='flex flex-col md:gap-5 gap-2 w-full'>
        
        {/* Email */}
        <motion.div 
          initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.3}}}
          className='flex gap-3 px-3 w-full rounded-2xl border-[1px] outline-none h-full items-center'
          style={{borderColor:emailFocus?'#5979b7':'#445B8A',fontSize:Shared.Text.small}}>
        <div className='bg-[#2F406480] border-[1px] border-[#445B8A] p-1 rounded-full'>
        <Mail />
        </div>
        <input
        onFocus={()=>setEmailFocus(true)}
        onBlur={()=>setEmailFocus(false)}
        onChange={(e)=>setEmail(e.target.value)}
        type='email'
        placeholder={'E-mail'} 
        className="p-3 w-full rounded-l-full bg-transparent outline-none border-none" />
        </motion.div>
        
        {/* password */}
        <motion.div 
        initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.4}}}
        className='flex gap-3 px-3 w-full rounded-2xl border-[1px] outline-none h-full items-center'
        style={{borderColor:passwordFocus?'#5979b7':'#445B8A',fontSize:Shared.Text.small}}>
        <div className='bg-[#2F406480] border-[1px] border-[#445B8A] p-1 rounded-full'>
        <Lock />
        </div>
        <input
        onFocus={()=>setPasswordFocus(true)}
        onBlur={()=>setPasswordFocus(false)}
        onChange={(e)=>setPassword(e.target.value)}
        type={passwordVisible?'text':'password'} 
        placeholder={'Password'} 
        className="p-3 w-full rounded-l-full bg-transparent " />
        <button onClick={()=>setPasswordVisible(!passwordVisible)} style={{fontSize:Shared.Text.large}}>
        {passwordVisible?<EyeSolid/>:<EyeClosed/>}
        </button>
        </motion.div>
        
        </div>
        
        
        
        <motion.button
        initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.5}}}
        whileHover={{scale:1.05, boxShadow:'0 0 10px #2F4064BF'}}
        onClick={Login}
        style={{fontSize: Shared.Text.large}}
        className="AuthButton md:px-12 md:py-2 px-3 py-3 w-full rounded-xl font-bold "
        >
        {loading
          ?<l-waveform size="35" stroke="3.5" speed="1" color="white"/>
          :'Login'} 
          </motion.button>
          </div>}
      
      {activeForm === 1 && 
        <div className='md:w-[40%] w-full flex flex-col md:gap-5 gap-5 md:px-14 px-5'>
        <p style={{fontSize:Shared.Text.xxl, fontWeight:'700'}}>Verify Email</p>
    
        <p style={{fontSize:Shared.Text.small}} className='flex gap-2'>To verify your identity, please click on the link we have just sent to your email.</p>
        
          </div>}
      
      {/* splash & slogan */}
      <div className='flex justify-center items-center md:bg-[#2F406480] md:p-14 p-5 md:h-screen'>
      <motion.img initial={{x:'50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.5}}} src={splash} alt="" className='md:w-[80%] w-[60%]'/>
      </div>
      </div>
    )
  }

 
  
  
  export default Login




