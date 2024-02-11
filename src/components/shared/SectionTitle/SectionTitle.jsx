import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center w-96 mx-auto'>
            <p className='text-[#D99904] text-sm'>{subHeading}</p>
            <div className="divider"></div>
            <h2 className='font-semibold text-2xl'>{heading}</h2>
            <div className="divider"></div>
        </div>
    );
};

export default SectionTitle;