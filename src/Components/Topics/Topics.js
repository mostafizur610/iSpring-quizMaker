import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import './Topics.css'

const Topics = ({ topic }) => {
    const { logo, name, total } = topic;
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img className="border" style={name === 'Git' ? { backgroundColor: 'black' } : {}} variant="top" src={logo} />
            <Card.Body className='d-flex justify-content-between'>
                <Card.Title>{name}</Card.Title>
                <Button variant="primary">Start Practice ✔</Button>
            </Card.Body>
            <Card.Text className='d-flex justify-content-center border'>
                Total Question: {total}
            </Card.Text>
        </Card>

    );
};

export default Topics;