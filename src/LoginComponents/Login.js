import { useState } from 'react'
import { useHistory } from 'react-router'
import LoginForm from './LoginForm'
import '../CSS/Login.css'

const Login = () => {
    let history =useHistory()
    
    const [user] = useState( {
        email:"user@gmail.com",
        password:"User123456"
    })
    //Function to check if the user's input matches with the information stored in the user state. 
    //If it is true, the user will be redirected to the home page using the useHistory hook.
   
    const checkLogin = (newInfo)=>{
       
        if(user.email === newInfo.email && user.password === newInfo.password){
            return history.push('/Home')
        }
        
        else{
            return alert('Email and password do not match our records. Please double-check and try again')
        }

    }

return (
        <div className='main_ctn'>
            
             <LoginForm checkLogin={checkLogin}/> {/*Passing function as props */}
        
        </div>
    )
}

export default Login
