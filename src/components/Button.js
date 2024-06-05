import React from 'react';
import { Button } from '@material-tailwind/react';

const Btn = ({ text }) => {
  return (
    <>
      <div>
        <Button
          className="whitespace-pre-wrap relative w-fit rounded-none text-lg font-medium text-dark border-solid border-b-[3px] py-[8px] px-[20px] bg-vision border-vision visible !inline-block mt-3 capitalize  "
          style={{ boxShadow: 'rgba(0,0,0,0.3) 2px 2px 3px' }}
        >
          {text}
        </Button>
      </div>
    </>
  );
};

export default Btn;
