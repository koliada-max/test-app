import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/index';
import Input from '../UI/Input';
import { ButtonBlue, ButtonEye } from '../UI/ButtonUI';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!password) {
      setError('Please enter a password');
      return;
    }

    setError('');

    try {
      const data = await loginUser(email, password);
      localStorage.setItem('access_token', data?.access_token);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setError((error as Error).message || 'An error occurred');
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  return (
    <form className="w-[270px] sm:w-[400px]" onSubmit={handleSubmit}>
      <div className="mb-[25px]">
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Work email"
          errorMessage={error}
        />
      </div>
      {emailValid && (
        <div className="mb-[30px] relative">
          <div className="relative mb-[15px]">
            <Input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={setPassword}
              placeholder="Password"
              errorMessage={error}
            />
            <ButtonEye
              type="button"
              onClick={handleShowPassword}
              showPassword={!!showPassword}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate('/forgot-password')}
              className="text-blueButton text-right text-sm font-medium hover:text-blue-700 focus:outline-none"
            >
              Forgot your password?
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-xs italic text-right pt-2 absolute bottom-1 left-0">
              {error}
            </p>
          )}
        </div>
      )}
      <div className="flex items-center justify-between">
        <ButtonBlue type="submit" title="Log in to Qencode" />
      </div>
      <div className="py-5 text-xs sm:text-sm font-medium tracking-[0.2px]">
        Is your company new to Qencode?{' '}
        <button
          type="button"
          onClick={() => navigate('/')}
          className="text-blueButton font-medium"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
