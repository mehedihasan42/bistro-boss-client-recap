import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({img,title,description}) => {
    return (
      <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={(`${img}`)}
      bgImageAlt="the dog"
      strength={-200}
  >
      <div className="hero min-h-96">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md bg-black bg-opacity-40 py-12 px-8 w-max">
      <h1 className="mb-5 text-3xl font-bold uppercase">{title}</h1>
      <p className="mb-5">{description}</p>
    </div>
  </div>
</div>
      {/* <div style={{ height: '200px' }} /> */}
  </Parallax>
        
    );
};

export default Cover;