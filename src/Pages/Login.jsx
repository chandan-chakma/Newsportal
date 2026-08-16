import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider.jsx';

const Login = () => {
    const { signInWithEmailandPasswardUser } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();
    const [error, setError]=useState("")

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailandPasswardUser(email, password)
            .then(result => {
                alert('successfull');
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch(error => {
                // alert(error.message)
                setError(error.message);
            })
        

    }
    return (
        <div className='flex justify-center item-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold text-center">Login your account</h1>
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">
                            <label className="label font-bold">Email</label>
                            <input type="email" className="input" placeholder="Enter your email address" name='email' />
                            <label className="label font-bold">Password</label>
                            <input type="password" className="input" placeholder="Enter your password" name='password' required/>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div>
                                {error && <p className='text-secondary'>{error}</p>}
                            </div>
                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className='text-center font-semibold'>Don't Have and Account? <Link to='/auth/register' className='text-secondary'>Register</Link> </p>
                  
                </div>
            </div>
            
        </div>
          
       
    );
};

export default Login;