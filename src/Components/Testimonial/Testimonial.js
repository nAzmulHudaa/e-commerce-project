import React, { useState } from 'react';
import { useEffect } from 'react';
import './review.js'
import Review from './review.js';

const Testimonial = () => {

    return (
        <main>
        <div className="container testimonial font">
          <div className="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
          </div>
          <Review/>
          {/* {
            reviews.map(review=><Review rv={review}/>)
          } */}
        </div>
      </main>
  
    );
};

export default Testimonial;