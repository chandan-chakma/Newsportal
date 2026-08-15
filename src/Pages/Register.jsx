import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center item-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold text-center">Login your account</h1>
                    <form>
                        <fieldset className="fieldset">
                            <label className="label font-bold">Your Name</label>
                            <input type="email" className="input" placeholder="Enter your name" />

                            <label className="label font-bold">Photo URL</label>
                            <input type="email" className="input" placeholder="Enter your phot URL" />

                            <label className="label font-bold">Email</label>
                            <input type="email" className="input" placeholder="Enter your email address" />

                            <label className="label font-bold">Password</label>
                            <input type="password" className="input" placeholder="Enter your password" />

                            <div>
                                <label className="label font-semibold">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                Accept Term & Condition
                                </label>
                            </div>

                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className='text-center font-semibold'>Already Have and Account? <Link to='/auth/login' className='text-secondary'>Register</Link> </p>

                </div>
            </div>

        </div>
    );
};

export default Register;