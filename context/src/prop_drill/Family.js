import React from 'react'
import Parent from './parent';


const Family = ({ Info }) => {
  return (
    <div className='Family'>
      <Parent parentInfo={Info} />
    </div>
  );
}

export default Family
