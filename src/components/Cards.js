import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Let Those Moments Be Created</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-9.jpg'
              text='The moment when you had fun with your people'
              label='Fun'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='The time you felt the sensation to do the impossible'
              label='Inspiring'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-3.jpg'
              text='The first steps of your baby'
              label='Happy'
              path='/services'
            />
            <CardItem
              src='/images/img-4.jpg'
              text='When you had nothing or no one'
              label='Sad'
              path='/products'
            />
            <CardItem
              src='/images/img-8.jpg'
              text='The Karate tournament that made it power packed'
              label='Power Packed'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
