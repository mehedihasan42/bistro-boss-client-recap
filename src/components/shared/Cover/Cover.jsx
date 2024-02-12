import React from 'react';

const Cover = ({img,title,description}) => {
    return (
        <div className="hero min-h-96" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md bg-black bg-opacity-40 py-12 w-max">
      <h1 className="mb-5 text-3xl font-bold">{title}</h1>
      <p className="mb-5">{description}</p>
    </div>
  </div>
</div>
    );
};

export default Cover;