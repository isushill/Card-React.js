import React from 'react';
import Card from './Card';

const CardRow = () => {
  const cardData = [
    { title: 'This is Card One', description: 'This is the description of my card one', img: 'https://images.pexels.com/photos/16948623/pexels-photo-16948623.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { title: 'This is Card Two', description: 'This is the description of Card two', img: 'https://images.pexels.com/photos/15212752/pexels-photo-15212752/free-photo-of-portrait-of-a-pretty-brunette-using-a-smart-phone.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { title: 'This is Card Three', description: 'This is the description of Card Three', img: 'https://images.pexels.com/photos/15031660/pexels-photo-15031660/free-photo-of-brunette-in-summer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { title: 'This is Card Four', description: 'This is the description of Card Four', img: 'https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { title: 'This is Card Five', description: 'This is the description of Card Five', img: 'https://images.pexels.com/photos/16564742/pexels-photo-16564742/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
    { title: 'This is Card Six', description: 'This is the description of Card Six', img: 'https://images.pexels.com/photos/12118422/pexels-photo-12118422.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  ];

  return (
    <div className='row'>
      {cardData.map((card, index) => (
        <div className='col-md-4' key={index}>
          <Card title={card.title} description={card.description} img={card.img} />
        </div>
      ))}
    </div>
  )
}
export default CardRow;