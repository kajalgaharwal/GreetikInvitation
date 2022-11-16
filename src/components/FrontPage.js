import React from 'react';
import { Carousel } from 'react-carousel3';
import '../components/FrontPageStyle.css';
import { useEffect } from 'react';

import Image1 from '../assets/1.jpeg';
import Image2 from '../assets/2.jpeg';
import Image3 from '../assets/3.jpeg';
import Image4 from '../assets/4.jpeg';
import Image5 from '../assets/5.jpeg';
import Image6 from '../assets/6.jpeg';
import Image7 from '../assets/7.jpeg';
const Images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

export default function FrontPage() {
  return (
    <div className='container'>
      <div className='imgCarousalBox'>
        <Carousel
          className='carousalBox'
          height={400}
          width={700}
          yOrigin={42}
          yRadius={48}
          autoPlay={true}>
          {Images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                className='carousalImgs'
                style={{ objectFit: 'cover', borderRadius: '15px' }}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className='data'>
        <p> Please join us at the </p>
        <h3>Blessing</h3>
        <p>of our Son</p>
        <h2>♡Greetik♡</h2>
        <p>(Son of Anchal and Gajendra Singh Deval) </p>
        <h4 style={{ textDecoration: 'underline' }}>Functions</h4>
        <div className='functions'>
          <h3>Katha - 9 am</h3>
          <h3>Jalwa Poojan - 4 pm</h3>
          <h3>Dinner - 6 pm onwards</h3>
        </div>
        <h3 style={{ textDecoration: 'underline' }}>
          Monday, November 21, 2022
        </h3>
        <p style={{ textDecoration: 'underline' }}>Venue</p>
        <h3>Mangalam C-181, Kirti Nagar,</h3>
        <h3> Magra Poonjla, Jodhpur</h3>
      </div>
    </div>
  );
}
