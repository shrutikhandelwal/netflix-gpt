import {useState, useRef} from 'react'
import Header from './Header'
import { Form } from 'react-router-dom'
import checkValidData from '../utils/validate'


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const email = useRef()
  const password = useRef()


  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/US-en-20250113-TRIFECTA-perspective_5bde7b75-98f7-439c-8d45-244f70e1b5ae_large.jpg" alt="background" />
         </div>
     
      <Form 
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
        onSubmit = {(e) => e.preventDefault()} 
        // {/* this will prevent submitting the form when click submit button */}
        >
        
            
            <h1 className="font-bold text-3xl py-4"> 
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            <input 
              ref={email}
              type="text" 
              placeholder="Email Address" 
              className="p-4 my-4 w-full bg-gray-700"
            />  
            {!isSignInForm && 
            <input 
              type="text" 
              placeholder="Full Name" 
              className="p-4 my-4 w-full bg-gray-700"
            />}
          <input 
            ref={password}
            type="text" 
            placeholder="password" 
            className="p-4 my-4 w-full bg-gray-700"  
          />
          <p className="text-red-500 font-bold text-lg py-3"> {errorMessage}</p>
          <button 
            className="p-4 my-6  bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
              {isSignInForm ?"Sign In" : "Sign Up"} 
          </button>

          <p 
            className="py-4 cursor-pointer" 
            onClick={toggleSignInForm} > 
            { isSignInForm ? "New to Netflix? Sign up Now." : "Already Registered? Sign in Now."}
          </p>
      </Form>
    </div>
  )
}

export default Login