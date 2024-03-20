import React, { useState } from 'react';
import { resetPassword } from '../../api/index';
import TitleComponent from '../UI/TitleComponent';
import Input from '../UI/Input';
import { ButtonBlue } from '../UI/ButtonUI';
import { useNavigate } from 'react-router-dom';

interface ForgotPasswordPageProps {}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const validateEmail = (email: string) => {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');

    try {
      await resetPassword(email);
      navigate('/reset-password');
    } catch (error) {
      console.error('Error:', error);
      setError((error as Error).message || 'An error occurred');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center sm:pt-10">
      <TitleComponent title="Forgot Password?" />
      <form className="w-[276px] sm:w-[400px]" onSubmit={handleSubmit}>
        <div className="mb-[25px]">
          <Input
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="Enter your email"
          />
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex items-center justify-between mb-5">
          <ButtonBlue type="submit" title="Send" />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            type="submit"
            className="border-[1.2px] rounded-md border-solid border-gray-200 w-full h-12 px-5 py-0 items-center flex-shrink-0 text-sm sm:text-[15px] font-normal text-gray_900"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
