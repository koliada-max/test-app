import React from 'react';

interface TitleComponentProps {
  title: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({ title }) => {
  return (
    <h1 className="text-center text-2xl sm:text-3xl font-bold tracking-normal pb-5 sm:pb-10 text-gray_900">
      {title}
    </h1>
  );
};

export default TitleComponent;
