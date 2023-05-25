import React from 'react';

const CentreX = ({heading, subHeading}) => {
    return (
      <div className='font-inter w-3/12 text-center mx-auto mt-16'>
            <p className="text-[#D99904] italic mb-2"> --- {subHeading} --- </p>
            <h2 className='text-3xl uppercase border-y-4 py-2'>{heading}</h2>
      </div>
    );
};

export default CentreX;