import React from 'react';
import Icon from './Icon';

interface ButtonGrayProps {
  icon?: React.ReactNode;
  title: string;
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonBlueProps {
  title: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

interface ButtonEyeProps {
  showPassword: any;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const ButtonGray: React.FC<ButtonGrayProps> = ({ icon, title, type }) => {
  return (
    <button
      type={type}
      className="flex w-[130px] sm:w-48 h-12 px-5 py-0 justify-center items-center gap-[10px] flex-shrink-0 rounded-md border-[1.2px] border-solid border-gray_200"
    >
      <div className="">{icon}</div>
      <div className="text-sm font-medium leading-5 text-gray_900">{title}</div>
    </button>
  );
};

export const ButtonBlue: React.FC<ButtonBlueProps> = ({
  title,
  onClick,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blueButton hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full h-12 flex justify-center items-center flex-shrink-0 text-sm sm:text-base leading-[1.313rem]"
    >
      {title}
    </button>
  );
};

export const ButtonEye: React.FC<ButtonEyeProps> = ({
  showPassword,
  onClick,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="absolute top-0 right-0 m-3 focus:outline-none"
    >
      {showPassword ? (
        <Icon name="eye-closed" className="" />
      ) : (
        <Icon name="eye-open" className="" />
      )}
    </button>
  );
};
