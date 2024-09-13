import React, { useState } from 'react';
import { BsFillShieldLockFill, BsTelephoneFill } from 'react-icons/bs';
import OtpInput from 'otp-input-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth';
import { auth } from '../../../firebase';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const VerifyPhone = () => {
    const [ph, setPh] = useState("");
    const [otp, setOtp] = useState("");
    const [showOtp, setShowOtp] = useState(false);
    const [loading, setLoading] = useState(false);
    const { userData } = useUser();
    const {setUserData} = useUser();
    const navigate = useNavigate();

    const sendOtp = async () => {
        try {
            if (!window.recaptchaVerifier) {
                window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
                        size: 'invisible',
                        callback: () => {
                            console.log('recaptcha resolved..')
                        }
                    }
                );
            }

            const appVerifier = window.recaptchaVerifier;
            const formattedPh = "+" + ph;
            console.log(formattedPh);

            const confirmation = await signInWithPhoneNumber(auth, formattedPh, appVerifier);
            console.log(confirmation);

            setShowOtp(true);
            window.confirmationResult = confirmation; // Store confirmation result globally
            toast.success('OTP sent successfully!');

            setUserData((prevData) => ({
                ...prevData,
                phone: formattedPh,  
            }));
        } catch (err) {
            console.log(err);
            toast.error('Failed to send OTP!');
        }
    };

    const verifyOtp = async () => {
        try {
            const confirmationResult = window.confirmationResult;
            const result = await confirmationResult.confirm(otp);
            console.log(result.user); // Successfully signed in
            toast.success("OTP verified successfully!");
            // navigate('/home')
            console.log(userData.email, userData.name, userData.role, userData.phone);
            handleRegister();
        } catch (err) {
            console.log(err);
            toast.error("Invalid OTP. Please try again.");
        }
    };

    const handleRegister = async () => {
        const technicianDetails = {
          email: userData.email,
          name: userData.name, 
          role: userData.role,
          phoneNumber: userData.phone,
        };

        console.log(technicianDetails)

      
        try {
          const response = await fetch('http://35.154.208.29:8080/api/technicians/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(technicianDetails),
          });
      
          if (response.ok) {
            toast.success('Technician registered successfully');
            navigate('/home');
          } else {
            toast.error('Failed to register technician');
          }
        } catch (error) {
          console.error('Error during registration:', error.message);
          toast.error('Error occurred while registering');
        }
      };

    return (
        <div className='min-h-screen flex flex-col items-center justify-center py-6 px-4'>
            <div id="recaptcha"></div>
            {showOtp ? (
                <div className="max-w-md mx-auto text-center bg-gray-100 px-4 sm:px-8 py-10 rounded-xl shadow">
                    <header className="mb-8">
                        <h1 className="text-2xl font-bold mb-1">Enter the otp you received</h1>
                    </header>
                    <div className='relative flex flex-col justify-center mx-auto'>
                        <div className='text-blue-400 bg-gray-900 w-fit p-2 rounded-full shadow-lg mx-auto m-5'>
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
                        <button
                            className='bg-blue-300 rounded-xl p-5 text-white m-5'
                            disabled={otp === '' ? true : false}
                            onClick={verifyOtp}
                        >
                            {loading && <span>Loading...</span>}
                            <span>Verify OTP</span>
                        </button>
                    </div>
                    <div className="text-sm text-slate-500 mt-4">
                        Didn't receive code? <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a>
                    </div>
                </div>
            ) : (
                <div className="max-w-md mx-auto text-center bg-gray-100 px-4 sm:px-8 py-10 rounded-xl shadow">
                    <header className="mb-8">
                        <h1 className="text-2xl font-bold mb-1">Mobile Phone Verification</h1>
                    </header>
                    <div className='relative flex flex-col justify-center mx-auto'>
                        <div className='text-blue-400 bg-gray-900 w-fit p-2 rounded-full shadow-lg mx-auto m-5'>
                            <BsTelephoneFill size={20} />
                        </div>
                        <PhoneInput country={'in'} value={ph} onChange={setPh} className='mx-auto' />
                        <button
                            onClick={sendOtp}
                            className='bg-blue-300 rounded-xl p-5 text-white m-5'
                            disabled={ph === '' ? true : false}
                        >
                            Send verification code
                        </button>
                    </div>
                </div>
            )}
            <Toaster />
        </div>
    );
};

export default VerifyPhone;
