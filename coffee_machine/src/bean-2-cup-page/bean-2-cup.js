import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/esm/Image';
import React, { useState } from 'react';
import picture from './picture/pexels-ketut-subiyanto-4349792.jpg'

function Bean_2_Cup() {
 


  return (
    <div className="image-container">
        <Image src={picture} fluid alt="Description of the image" className="smaller-image" />
        <div className="text-overlay">
          <h1>Bean 2 Cup Machines</h1>
        </div>
      </div>
  );
}

export default  Bean_2_Cup;