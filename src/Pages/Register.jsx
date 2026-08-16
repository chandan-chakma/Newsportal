import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider.jsx';

const Register = () => {
    const { createEmailPasswordUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.userName.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, photo, email, password);
        createEmailPasswordUser(email, password)
        .then(result => {
            const user = result.user;
            // console.log(user);
            updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
                setUser({ ...user, displayName: name, photoURL: photo });
                // console.log(user);
                navigate("/")
            })
                .catch(error => {
                    // console.log(error);
                    setUser(user)
            })
            
                
            })
            .catch(error => {
                alert('error');
                console.log(error)
        })
    }
    return (
        <div className='flex justify-center item-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold text-center">Login your account</h1>
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            <label className="label font-bold">Your Name</label>
                            <input type="text" className="input" placeholder="Enter your name" name='userName'/>

                            <label className="label font-bold">Photo URL</label>
                            <input type="text" className="input" placeholder="Enter your phot URL" name='photo' />

                            <label className="label font-bold">Email</label>
                            <input type="email" className="input" placeholder="Enter your email address" name='email'/>

                            <label className="label font-bold">Password</label>
                            <input type="password" className="input" placeholder="Enter your password" name='password'/>

                            <div>
                                <label className="label font-semibold">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                Accept Term & Condition
                                </label>
                            </div>

                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className='text-center font-semibold'>Already Have and Account? <Link to='/auth/login' className='text-secondary'>Register</Link> </p>

                </div>
            </div>

        </div>
    );
};

export default Register;