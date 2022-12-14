import React from 'react';
const BgZone = ({img}) => {
  return (
    <div className = 'col-lg-6 d-none d-md-block'>
    <div className = 'col-center align-items-center align-items-center img-container'>
      <img src = {img} alt = 'img' />
    </div>
  </div>
  );
}

export default BgZone;