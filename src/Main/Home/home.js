import React from 'react'
import { Card, Button } from 'react-bootstrap';
import flower from '../../images/flower_zardosi.jpeg';
import design_with_aari from '../../images/peacock_with_design.jpeg';
import design_outline from '../../images/peacock_without_aari.jpeg';
import ribbon from '../../images/ribbon_flower.jpeg';
import patch_work from '../../images/patch_work.jpeg';
import silk_thread_tassels from '../../images/silk_thread_tassels.jpeg';
import beads_tassels from '../../images/beads_tassels.jpeg';

const Home = () => {

    const items = [
        {
            name: 'design',
            url: flower,
        },
        {
            name: 'design1',
            url: design_outline,
        },
        {
            name: 'design2',
            url: design_with_aari,
        },
        {
            name: 'design3',
            url: ribbon,
        },
        {
            name: 'design4',
            url: patch_work,
        },
        {
            name: 'design5',
            url: silk_thread_tassels,
        },
        {
            name: 'design6',
            url: beads_tassels,
        },
        {
            name: 'design7',
            url: flower,
        },
        {
            name: 'design8',
            url: design_outline,
        },
        {
            name: 'design9',
            url: design_with_aari,
        },
        {
            name: 'design10',
            url: ribbon,
        },
        {
            name: 'design11',
            url: patch_work,
        },
        {
            name: 'design12',
            url: silk_thread_tassels,
        },
        {
            name: 'design13',
            url: beads_tassels,
        },
        
    ]

    return (
        <>
            {items.map((item) =>
                <Card style={{ width: '18rem' }} key={item.name}>
                    <Card.Img variant="top" src={item.url} style={{height: '400px'}} aria-label='images' />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            )}
        </>
    )
}

export default Home