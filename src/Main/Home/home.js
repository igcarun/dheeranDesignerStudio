import React, { useContext } from 'react'
import CardItem from '../CardItem/cardItem';
import { Outlet } from 'react-router-dom';
import DataContext from '../../Context/DataContext';

const Home = () => {

    const { items } = useContext(DataContext);

    return (
        <>
            {items.map((item, index) =>
                <CardItem key={item.id} item={item}></CardItem>
            )}
            <Outlet/>
        </>
    )
}

export default Home