import React, { useState } from 'react';
import { setPassword } from '../../api/index';
import TitleComponent from '../UI/TitleComponent';
import Input from '../UI/Input';
import { ButtonBlue, ButtonEye } from '../UI/ButtonUI';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface ResetPasswordPageProps {}

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = () => {
  const navigate = useNavigate();
  const [password, setPasswordValue] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = searchParams.get('token');
    const secret = searchParams.get('secret');

    if (!password || password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (!confirmPassword) {
      setError('Please confirm your password');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password and confirm password do not match');
      return;
    }
    setError('');

    try {
      await setPassword(password, token, secret, confirmPassword);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setError((error as Error).message || 'An error occurred');
    }
  };

  const handleShowPassword = (fieldId: string) => {
    if (fieldId === '1') {
      setShowPassword(!showPassword);
    } else if (fieldId === '2') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center sm:pt-10">
      <TitleComponent title="Create new Password?" />
      <form className="w-[270px] sm:w-[400px]" onSubmit={handleSubmit}>
        <div className="pb-[25px]">
          <label
            htmlFor="password"
            className="text-left text-[15px] font-medium text-gray_900 tracking-[-0.036px] leading-[21px] flex justify-start"
          >
            Password
          </label>
          <div className="relative mt-[8px]">
            <Input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={setPasswordValue}
              placeholder="Password"
              id="password"
            />

            <ButtonEye
              type="button"
              onClick={() => handleShowPassword('1')}
              showPassword={showPassword}
            />
          </div>
        </div>
        <div className="pb-[25px] relative">
          <label
            htmlFor="confirmPassword"
            className="text-left text-[15px] font-medium text-gray_900 tracking-[-0.036px] leading-[21px] flex justify-start"
          >
            Confirm Password
          </label>
          <div className="relative mt-[8px]">
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={setConfirmPassword}
              placeholder="Confirm Password"
              id="confirmPassword"
            />
            <ButtonEye
              type="button"
              onClick={() => handleShowPassword('2')}
              showPassword={showConfirmPassword}
            />
          </div>
          {error && (
            <p className="text-red-500 text-xs italic text-right pt-2 absolute bottom-1 right-0">
              {error}
            </p>
          )}
        </div>
        <div className="flex items-center">
          <ButtonBlue type="submit" title="Reset Password" />
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
