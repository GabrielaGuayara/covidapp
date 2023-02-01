import React,{ useState} from 'react'

const LoginForm = ({checkLogin}) => {
    const [userData, setUserData] = useState(
        {
        email:'',
        password:''}
        )

    const handleSubmit = e =>{
        e.preventDefault();
            checkLogin(userData) // Passing data stored in userData to the Login component.
        }

    return (
    <div className='inner_ctn'>

         <h3 className='tittle'>COVID-19 DATA COLLECTION</h3>
            <p>Enter your user, email and password </p>

             <form className='loginform' onSubmit={handleSubmit}>
                    <label id='user_inp' htmlFor="user">User:</label>
                        <input 
                            className='user_inp'
                            type='text'
                            id="user" 
                            placeholder='Enter a user name...'
                            required
                        />
                         <br/>
                 <label id='email_inp' htmlFor="email">Email:</label>
                            <input 
                                className='user_inp'
                                type="email"
                                id= 'email'
                                placeholder='Enter a email...'
                                onChange={e=>setUserData({...userData, email: e.target.value})}//Updating the state.
                                value={userData.email}
                                required
                            />
                            <br/>
                 <label id='pass_inp' htmlFor="password">Password:</label>
                            <input 
                                className='user_inp'
                                type='password'
                                id="password" 
                                placeholder='Enter a  password...'
                                onChange={e=>setUserData({...userData,password: e.target.value})}
                                value={userData.password}
                                required
                            />
                             <br/>
                 <button className="login" type='submit'>LOGIN</button>
                 
            </form>

    </div>

    )

}

export default LoginForm
