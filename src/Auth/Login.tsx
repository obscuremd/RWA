// import splash from '../assets/splash.png'
// import { Shared } from '../assets/Shared'
// import { useState } from 'react';
// import { EyeClosed, EyeSolid, Mail} from 'iconoir-react';
// import { Lock } from 'iconoir-react/regular';
// import { useSignIn } from '@clerk/clerk-react';
// import toast, { Toaster } from 'react-hot-toast';
// import { waveform } from 'ldrs'
// import { motion } from 'framer-motion';

import { useState } from "react"

// waveform.register()

// interface Props{
//   setActives: (value: number) => void
// }

// const Login : React.FC<Props> = ({setActives}) => {
  
//   const [activeForm, setActiveForm] = useState(0)

//   const {isLoaded, signIn, setActive} =useSignIn()
//   const [loading, setLoading] = useState(false)

//   const [passwordFocus, setPasswordFocus] = useState(false)
//   const [emailFocus, setEmailFocus] = useState(false)
//   const [OTPFocus, setOTPFocus] = useState(false)

//   const [passwordVisible, setPasswordVisible] = useState(false)

//   const [email, setEmail]= useState('')
//   const [password, setPassword]= useState('')
//   const [code, setCode]= useState('')

//   const verify =async()=>{
//    const completeSignIn = await signIn?.attemptFirstFactor({code})

//     if (completeSignIn.status === 'complete') {
//       await setActive({session: completeSignIn.createdSessionId}), console.log(completeSignIn.createdSessionId);
//       setTimeout(()=>{
//         setLoading(false)
//         toast.success('logged in successfully')
//         window.location.reload()
//       },2000)
//     }
//     else{
//       setLoading(false)
//       console.log(completeSignIn)
//     }
//   }
  
  
//   const Login =async()=>{
    
//     if(!isLoaded){return}
    
//     if(email =='' || password === ''){
//       setLoading(true)
//       setTimeout(()=>{
//         toast.error('Please enter your email/ password')
//         setLoading(false)  
//       },1000)
//     }
//     else{
      
//       setLoading(true)

//       try {
//         await signIn.create({
//           identifier: email,
//           password: password
//         })

//       await signIn.prepareFirstFactor({strategy:'email_code'})

//       setActiveForm(2)

//         // setTimeout(()=>{
//         //   toast.success('code sent')
//         //   window.location.reload()
//         // },2000)
        
        
//       } catch (err:unknown) {
        
//         const error = err as { errors?: { code: string }[] };
        
//         setLoading(false)
//         if(error.errors && error.errors[0]?.code === 'form_param_format_invalid'){
//           toast.error('Email/Password is invalid')
//         }else{
//           toast.error(JSON.stringify(error.errors && error.errors[0]?.code))
//           console.log(JSON.stringify(error));
//         }
//       }
//     }
    
//   }
  
//   const LoginForm =()=>(
//     <div className='md:w-[40%] w-full flex flex-col md:gap-11 gap-5 md:px-14 px-5'>
//         <motion.p initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.1}}} style={{fontSize:Shared.Text.xxl, fontWeight:'700'}}>Login</motion.p>
        
//         <motion.p initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.2}}} style={{fontSize:Shared.Text.small}} className='flex gap-2'>Don’t have an account?
//         <motion.button whileHover={{scale:1.1, textShadow:'0 0 5px #9eb1d876'}} onClick={()=>setActives(0)} className='text-[#9eb1d8] font-bold'>Register</motion.button>
//         </motion.p>
        
//         {/* inputs */}
//         <div className='flex flex-col md:gap-5 gap-2 w-full'>
        
//         {/* Email */}
//         <motion.div 
//           initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.3}}}
//           className='flex gap-3 px-3 w-full rounded-2xl border-[1px] outline-none h-full items-center'
//           style={{borderColor:emailFocus?'#5979b7':'#445B8A',fontSize:Shared.Text.small}}>
//         <div className='bg-[#2F406480] border-[1px] border-[#445B8A] p-1 rounded-full'>
//         <Mail />
//         </div>
//         <input
//         onFocus={()=>setEmailFocus(true)}
//         onBlur={()=>setEmailFocus(false)}
//         onChange={(e)=>setEmail(e.target.value)}
//         type='email'
//         placeholder={'E-mail'} 
//         className="p-3 w-full rounded-l-full bg-transparent outline-none border-none" />
//         </motion.div>
        
//         {/* password */}
//         <motion.div 
//         initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.4}}}
//         className='flex gap-3 px-3 w-full rounded-2xl border-[1px] outline-none h-full items-center'
//         style={{borderColor:passwordFocus?'#5979b7':'#445B8A',fontSize:Shared.Text.small}}>
//         <div className='bg-[#2F406480] border-[1px] border-[#445B8A] p-1 rounded-full'>
//         <Lock />
//         </div>
//         <input
//         onFocus={()=>setPasswordFocus(true)}
//         onBlur={()=>setPasswordFocus(false)}
//         onChange={(e)=>setPassword(e.target.value)}
//         type={passwordVisible?'text':'password'} 
//         placeholder={'Password'} 
//         className="p-3 w-full rounded-l-full bg-transparent " />
//         <button onClick={()=>setPasswordVisible(!passwordVisible)} style={{fontSize:Shared.Text.large}}>
//         {passwordVisible?<EyeSolid/>:<EyeClosed/>}
//         </button>
//         </motion.div>
        
//         </div>
        
        
        
//         <motion.button
//         initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.5}}}
//         whileHover={{scale:1.05, boxShadow:'0 0 10px #2F4064BF'}}
//         onClick={Login}
//         style={{fontSize: Shared.Text.large}}
//         className="AuthButton md:px-12 md:py-2 px-3 py-3 w-full rounded-xl font-bold "
//         >
//         {loading
//           ?<l-waveform size="35" stroke="3.5" speed="1" color="white"/>
//           :'Login'} 
//           </motion.button>
//           </div>
//       )
//   const VerifyForm =()=>(
//     <div className='md:w-[40%] w-full flex flex-col md:gap-11 gap-5 md:px-14 px-5'>
//         <p style={{fontSize:Shared.Text.xxl, fontWeight:'700'}}>Verify Email</p>
    
//         <p style={{fontSize:Shared.Text.small}} className='flex gap-2'>enter a digit otp to verify your email</p>
        
//         {/* inputs */}
//         <div className='flex flex-col md:gap-5 gap-2 w-full'>
        
//         {/* Otp */}
//         <motion.div 
//           initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.3}}}
//           className='flex gap-3 px-3 w-full rounded-2xl border-[1px] outline-none h-full items-center'
//           style={{borderColor:OTPFocus?'#5979b7':'#445B8A',fontSize:Shared.Text.small}}>
//             <div className='bg-[#2F406480] border-[1px] border-[#445B8A] p-1 rounded-full'>
//             <Mail />
//             </div>
//             <input
//               onFocus={()=>setOTPFocus(true)}
//               onBlur={()=>setOTPFocus(false)}
//               onChange={(e)=>setCode(e.target.value)}
//               type='email'
//               placeholder={'E-mail'} 
//               className="p-3 w-full rounded-l-full bg-transparent outline-none border-none" />
//         </motion.div>
        
//         </div>
        
//         <motion.button
//         initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.5}}}
//         whileHover={{scale:1.05, boxShadow:'0 0 10px #2F4064BF'}}
//         onClick={verify}
//         style={{fontSize: Shared.Text.large}}
//         className="AuthButton md:px-12 md:py-2 px-3 py-3 w-full rounded-xl font-bold "
//         >
//         {loading
//           ?<l-waveform size="35" stroke="3.5" speed="1" color="white"/>
//           :'Verify'} 
//           </motion.button>
//           </div>
//       )
  
//   return (
//     <div className='flex flex-col-reverse md:flex-row md:gap-36 gap-8 items-center h-full'>
    
//     <Toaster toastOptions={{className:'toast'}}/>
    
//     {/* Login */}
//       {activeForm === 0 && <LoginForm/>}
//       {activeForm === 1 && <VerifyForm/>}
      
//       {/* splash & slogan
//       <div className='flex justify-center items-center md:bg-[#2F406480] md:p-14 p-5 md:h-screen'>
//       <motion.img initial={{x:'50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.5}}} src={splash} alt="" className='md:w-[80%] w-[60%]'/>
//       </div> */}
//       </div>
//     )
//   }

 
  
  
//   export default Login





 const Login : React.FC<Props> = ({setActives})=>{

  const [active, setActive] = useState(0)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')

  const LoginForm =()=>(
    <div>
      <input type="text" className="AuthInput" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" className="AuthInput" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button className="AuthButton">Submit</button>
    </div>
  )


  const VerifyForm =()=>(
    <div>
      
      <input type="text" className="AuthInput" value={code} onChange={(e)=>setCode(e.target.value)}/>
      <button className="AuthButton">Submit</button>
    </div>
  )

  return(
    <>
      {active === 0 && <LoginForm/>}
      {active === 1 && <VerifyForm/>}

    </>
  )
}

interface Props{
  setActives: (value: number) => void
}

export default Login