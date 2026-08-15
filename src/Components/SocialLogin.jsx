import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareTwitter } from 'react-icons/fa6';
import { MdOutlineFacebook } from 'react-icons/md';

const SocialLogin = () => {
    return (
        <div>
            <div className='mb-5'>
                <h1 className='font-bold mb-3'>Login With</h1>
                <button className='btn w-full btn-outline flex justify-center items-center gap-1 mb-3'><FaGoogle />
                    <span>Login with Google</span>
                </button>
                <button className='btn w-full btn-outline flex justify-center items-center gap-1 '><FaGithub />
                    <span>Login with Github</span>
                </button>
            
            </div>
            <div>
                <h1 className='font-bold mb-5'>Find Us On</h1>
                <button className='btn w-full btn-outline flex justify-center items-center gap-1 mb-3'><MdOutlineFacebook />
                    <span>Facebook</span>
                </button>
                <button className='btn w-full btn-outline flex justify-center items-center gap-1 mb-3 '><FaSquareInstagram />
                    <span>Instagram</span>
                </button>
                <button className='btn w-full btn-outline flex justify-center items-center gap-1 '><FaSquareTwitter />
                    <span>Instagram</span>
                </button>
            
            </div>
        </div>
    );
};

export default SocialLogin;