import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../../Context/DataContext';
import { Image } from 'react-bootstrap';
import './cardItemDetail.scss';

const CardItemDetail = () => {

  const { id } = useParams();
  const { items } = useContext(DataContext);

  const item = items.find((item) => item.id === Number(id));
  
  return (
    <div className='cardItemDetail'>
      <Image className="images" src={item.url} fluid />
      <div className='content'>
        <h4>{item.name}</h4>
        <h5>Desc:</h5>
        <p>{item.desc}</p>
      </div>
    </div>
  )
}

export default CardItemDetail