import splash from '../assets/splash.png'
import { characters, Shared } from '../assets/Shared'
import { useState } from 'react';
import { EyeClosed, EyeSolid, Mail, User } from 'iconoir-react';
import { Lock } from 'iconoir-react/regular';
import { useSignUp } from '@clerk/clerk-react';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

interface Props{
  setActives: (value: number) => void
}

const Register : React.FC<Props> = ({setActives}) => {

  const {isLoaded, signUp} =useSignUp()


  const [passwordFocus, setPasswordFocus] = useState(false)
  const [password2Focus, setPassword2Focus] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [passwordVisible, setPasswordVisible] = useState(false)

  const [username, setUsername]= useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [password2, setPassword2]= useState('')

  const [loading, setLoading] = useState(false)

  const register =async()=>{

    setLoading(true)

    if(!isLoaded){
      return
    }

    if(username === '' && email === '' && password === ''){
      setTimeout(()=>{
        toast.error('fields must not be empty')
        setLoading(false)
      },2000)
    }

    else if(username.length < 4 || username.length > 64){
      setTimeout(()=>{
        toast.error('username must be between 4 and 64 characters')
        setLoading(false)
      },2000)
    }

    else if(password.length < 8){
      setTimeout(()=>{
        toast.error('password must be at least 8 characters long')
        setLoading(false)
      },2000)
    }

    else if (!characters.test(password)){
      setTimeout(()=>{
        toast.error('password must include at least one special character')
        setLoading(false)
      }, 2000)
    }

    else if(password !== password2){
      setTimeout(()=>{
        toast.error('password mismatch')
        setLoading(false)
      },2000)
    }
    

    else {
      try {
        await signUp.create({
          emailAddress: email,
          username:username,
          password:password
        })

        await signUp.prepareEmailAddressVerification({ strategy:'email_code'})
        toast.success('user created successfully');
        setTimeout(()=>{setActives(2)},2000)
        
      } catch (err:unknown) {

        const error = err as { errors?: { code: string }[] };

        if( error?.errors && error?.errors[0]?.code === 'form_identifier_exists'){
          setTimeout(()=>{
            toast.error('That email address is taken. Please try another.')
            setLoading(false)
          },2000)
        }
        else if(error?.errors && error?.errors[0]?.code === 'form_param_format_invalid'){
          setTimeout(()=>{
            toast.error('invalid email format')
            setLoading(false)
          },2000)
        }
        else{
          toast.error(JSON.stringify(error?.errors && error?.errors[0]?.code))
          setLoading(false)
          console.log(JSON.stringify(error))
          console.log(error);
        }
      }
    }
  }


  return (
    <div className='flex flex-col-reverse md:flex-row md:gap-36 gap-8 items-center h-full'>
      <Toaster toastOptions={{className:'toast'}}/>
      
      {/* create account */}
      <div className='md:w-[40%] w-full flex flex-col md:gap-11 gap-5 md:px-14 px-5'>
        <motion.p initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.1}}} style={{fontSize:Shared.Text.xxl, fontWeight:'700'}}>Sign Up</motion.p>
        
        <motion.p initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.2}}} style={{fontSize:Shared.Text.small}} className='flex gap-2'>Already Have An Account?
          <motion.button whileHover={{scale:1.1, textShadow:'0 0 5px #9eb1d876'}} onClick={()=>setActives(1)} className='text-[#9eb1d8] font-bold'>Log In</motion.button>
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
                className="p-3 w-full rounded-l-full bg-transparent outline-none" />
            </motion.div>
          
            {/* Username */}
            <motion.div
              initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.4}}} 
              className='flex gap-3 px-3 w-full rounded-2xl border-[1px] outline-none h-full items-center'
              style={{borderColor:userFocus?'#5979b7':'#445B8A',fontSize:Shared.Text.small}}>
              <div className='bg-[#2F406480] border-[1px] border-[#445B8A] p-1 rounded-full'>
                <User />
              </div>
              <input
                onFocus={()=>setUserFocus(true)}
                onBlur={()=>setUserFocus(false)}
                onChange={(e)=>setUsername(e.target.value)}
                type='text'
                placeholder={'Username'} 
                className="p-3 w-full rounded-l-full bg-transparent outline-none" />
            </motion.div>
            
            {/* password */}
            <motion.div
              initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.5}}} 
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
                className="p-3 w-full rounded-l-full bg-transparent outline-none" />
                <button onClick={()=>setPasswordVisible(!passwordVisible)} style={{fontSize:Shared.Text.large}}>
                  {passwordVisible?<EyeSolid/>:<EyeClosed/>}
                </button>
            </motion.div>
            
            {/* password again */}
            <motion.div 
              initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.6}}}
              className='flex gap-3 px-3 w-full rounded-2xl border-[1px] outline-none h-full items-center'
              style={{borderColor:password2Focus?'#5979b7':'#445B8A',fontSize:Shared.Text.small}}>
              <div className='bg-[#2F406480] border-[1px] border-[#445B8A] p-1 rounded-full'>
                <Lock />
              </div>
              <input
                onFocus={()=>setPassword2Focus(true)}
                onBlur={()=>setPassword2Focus(false)}
                onChange={(e)=>setPassword2(e.target.value)}
                type={passwordVisible?'text':'password'} 
                placeholder={'Password Again'} 
                className="p-3 w-full rounded-l-full bg-transparent outline-none" />
                <button onClick={()=>setPasswordVisible(!passwordVisible)} style={{fontSize:Shared.Text.large}}>
                  {passwordVisible?<EyeSolid/>:<EyeClosed/>}
                </button>
            </motion.div>
        </div>

        

        <motion.button
            initial={{x:'-50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.7}}}
            whileHover={{scale:1.05, boxShadow:'0 0 10px #2F4064BF'}}
            onClick={register}
            style={{fontSize: Shared.Text.large}}
            className="AuthButton md:px-12 md:py-2 px-3 py-3 w-full rounded-xl font-bold "
          >
            {loading
              ?<l-waveform size="35" stroke="3.5" speed="1" color="white"/>
              :'Register'} 
        </motion.button>
      </div>

      {/* splash & slogan */}
      <div className='flex justify-center items-center md:bg-[#2F406480] md:p-14 p-5 md:h-screen'>
        <motion.img initial={{x:'50%', opacity:0}} animate={{x:0, opacity:1, transition:{delay:0.5}}} src={splash} alt="" className='md:w-[80%] w-[60%]'/>
      </div>
    </div>
  )
}

export default Register