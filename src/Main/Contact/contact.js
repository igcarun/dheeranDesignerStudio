import React from 'react'
import { Card, Button } from 'react-bootstrap';
import './contact.scss';

const Contact = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1946.155072157035!2d79.251405!3d12.693169!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1704086398300!5m2!1sen!2sin';
    return (
        <div className='contact'>

            <Card className='carding'>
                <Card.Body >
                    <Card.Text>Contact Address</Card.Text>
                    <Card.Title>Dheeran Studios</Card.Title>
                    <Card.Text>
                        BR Nagar,
                    </Card.Text>
                    <Card.Text>
                        Chickago,
                    </Card.Text>
                    <Card.Text>
                        Texas - 34213
                    </Card.Text>
                </Card.Body>
            </Card>

            <iframe className='frame' title='This is a unique title'
                src={mapLink}
                style={{ border: '0', width: '100%', height: '450px' }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" />

        </div>
    )
}

export default Contact