import React from 'react';
import Icon from './Icon';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-white text-center flex justify-center">
      <div className="container flex flex-col items-center sm:px-5">
        <div className="flex justify-center pt-[70px] sm:pt-44 pb-10">
          <Icon name="logo" className="" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
