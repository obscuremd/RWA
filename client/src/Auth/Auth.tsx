import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import EmailVerification from './EmailVerification'
import LoginVerification from './LoginVerification'

const Auth = () => {
  const [active, setActives] = useState(1)
  return (
    <div>
        {active === 0 && <Register setActives={setActives}/> }
        {active === 1 && <Login setActives={setActives}/>}
        {active === 2 && <EmailVerification setActives={setActives}/>}
        {active === 3 && <LoginVerification setActives={setActives}/>}
    </div>
  )
}

export default Auth