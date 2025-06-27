import React from 'react';

const LandingPage = ({ title }) => {
  return (
    <div className="p-4 ">
      <p className="text-5xl text-blue-500 text-center">
        بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
      </p>
      <br />
      <h1 className="text-2xl text-center font-bold px-20 ">{title}</h1>
    </div>
  );
};

export default LandingPage;
