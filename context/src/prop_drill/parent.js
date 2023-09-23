import React from 'react'
import Children from './Children'

const Parent = (parentInfo) => {
  return (
    <div className="parent">
      <h1>{`Parent ${parentInfo.familyName}`}</h1>
      <p>{parentInfo.onlyForParents}</p>
      <Children childrenInfo={parentInfo} />
    </div>
  );
}

export default Parent
