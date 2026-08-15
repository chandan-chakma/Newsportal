import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center item-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold text-center">Login your account</h1>
                    <form>
                        <fieldset className="fieldset">
                            <label className="label font-bold">Email</label>
                            <input type="email" className="input" placeholder="Enter your email address" />
                            <label className="label font-bold">Password</label>
                            <input type="password" className="input" placeholder="Enter your password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className='text-center font-semibold'>Don't Have and Account? <Link to='/auth/register' className='text-secondary'>Register</Link> </p>
                  
                </div>
            </div>
            
        </div>
          
       
    );
};

export default Login;