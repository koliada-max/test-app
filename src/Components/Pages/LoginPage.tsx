import React from 'react';
import { Link } from 'react-router-dom';

import TitleComponent from '../UI/TitleComponent';
import { ButtonGray } from '../UI/ButtonUI';
import Icon from '../UI/Icon';
import LoginForm from '../LoginForm/LoginForm';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  
  return (
    <div className="flex flex-col justify-center items-center sm:pt-10">
      <TitleComponent title="Log in to your account" />
      <div className="flex gap-4 pb-6 sm:pb-[30px]">
        <Link to="https://www.google.com">
          <ButtonGray
            type="button"
            icon={<Icon name="google" />}
            title="Google"
          />
        </Link>
        <Link to="https://github.com">
          <ButtonGray
            type="button"
            icon={<Icon name="github" />}
            title="Github"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-[5px] pb-6 sm:pb-[30px]">
        <div className="w-[122px] sm:w-[186px] h-px bg-gray_150"></div>
        <div className="text-gray_300 text-xs font-medium leading-4 uppercase">
          or
        </div>
        <div className="w-[122px] sm:w-[186px] h-px bg-gray_150"></div>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
