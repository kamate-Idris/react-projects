import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkIndex = (number) => {
    if (number > people.length -1 ) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }

    return number
  }

  const nextPerson = () => {
    setIndex((index) => {
      return checkIndex(index + 1)
   })
  }

  const prevPerson = () => {
    setIndex((index) => { 
      return checkIndex(index - 1)
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkIndex(randomNumber))
  }

  return <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'> {name}</h4>
    <p className='job'> {job}</p>
    <p className='info'> {text}</p>
    <div className='button-container'>
      <button onClick={nextPerson} className='next-btn'><FaChevronLeft /></button>
      <button onClick={prevPerson} className='prev-btn'><FaChevronRight /></button>
    </div>
    <button onClick={randomPerson} className='random-btn'>Suprise me</button>
  </article>;
};

export default Review;
