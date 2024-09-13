import React from 'react'
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import toast from 'react-hot-toast';
import { BsFillShieldFill, BsFillShieldLockFill, BsTelephoneFill } from 'react-icons/bs';
import OtpInput from 'otp-input-react'
import { CgSpinner } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const Register = () => {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const {setUserData} = useUser();
    const handleRegister = async () => {
      try {
        // const userCredential = await createUserWithEmailAndPassword(auth, email);
        // const user = userCredential.user;
        // console.log(user)
        // toast.success(role);
        setUserData({ email, role, name });
        navigate('/verify-phone')
      } catch (error) {
        console.error('Error during registration:', error.message);
      }
    };
  
    return (
      <>
        <div className="font-[sans-serif]">
        <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
          <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
            <div className="border border-gray-300 rounded-lg p-6 max-w-md bg-gray-200 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.1)] max-md:mx-auto">
              <form className="space-y-4">
                <div className="mb-8">
                  <h3 className="text-gray-800 text-3xl font-extrabold">Register</h3>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Email</label>
                  <div className="relative flex items-center">
                    <input name="username" type="text" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter user name" onChange={(e) => setEmail(e.target.value)}/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                      <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                      <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Name</label>
                  <div className="relative flex items-center">
                    <input name="username" type="text" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter user name" onChange={(e) => setName(e.target.value)}/>
                    
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block p-1">Role</label>
                  <div className="relative flex items-center">
                    <select
                    name="role"
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    onChange={(e) => setRole(e.target.value)}
                    >
                    <option value="">Select Role</option>
                    <option value="serviceengineer">Service Engineer</option>
                    <option value="servicehead">Service Head</option>
                    </select>
                  </div>
                </div>
                {/* <div>
                  <label className="text-gray-800 text-sm mb-2 block p-1">sms-verification</label>
                  <div className='text-blue-400 bg-gray-900 w-fit p-2 rounded-full shadow-lg'>
                    <BsFillShieldLockFill size={20} />
                  </div>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      OTPLength={6}
                      otpType="number"
                      disabled={false}
                      autoFocus
                    ></OtpInput>
                </div> */}
                <div className="!mt-8">
                  <button type="button" className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none" onClick={handleRegister}>
                    {/* {loading && 
                      <CgSpinner size={20} className='mt-1 animate-spin'/>
                    } */}
                    <span>Sign up</span>
                  </button>
                </div>
  
                <p className="text-sm !mt-8 text-center text-gray-800">Already Have have an account?<a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Login here</a></p>
              </form>
            </div>
            <div className="max-w-[600px] max-md:mt-8">
              <img src="https://circolife.com/wp-content/uploads/2024/04/main-logo-register-png.png" className="w-full h-full mx-auto block object-cover" alt="Dining Experience" />
            </div>
          </div>
        </div>
      </div>
    </>
    );
}

export default Register