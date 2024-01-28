import React from 'react'
import { Card, Button } from 'react-bootstrap';

const CardItem = ({ item }) => {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.url} style={{ height: '400px' }} aria-label='images' />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                       {item.desc}
                    </Card.Text>
                    <Button href={'/home/' + item.id} >Go In Detail</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardItem