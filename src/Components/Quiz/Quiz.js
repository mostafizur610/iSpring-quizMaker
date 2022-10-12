import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { EyeIcon } from '@heroicons/react/24/solid';
import { Col, Container, Row, Toast, ToastContainer } from 'react-bootstrap';

const Quiz = () => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const quiz = useLoaderData();
    const checkAnswer = (evt, correctAnswer) => {
        setShow(true);
        if (correctAnswer === evt.target.value) {
            setMessage('Answer is correct');
        } else {
            setMessage('Answer is wrong');
        }
    }

    const showCorrectAnswer = (correctAnswer) => {
        setMessage(`Correct answer: ${correctAnswer}`);
        setShow(true);
    }
    const toggleShow = () => setShow(!show);
    return (
        <Container>
            <Row className="justify-content-md-center">
                <ToastContainer containerPosition="sticky" position="top-end" className="p-3">
                    <Toast show={show} onClose={toggleShow} delay={4000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">{message}</strong>
                        </Toast.Header>
                    </Toast>
                </ToastContainer>
                <Row >
                    <h1>Quiz of {quiz.data.name}</h1>
                    {quiz.data.questions.map(question =>
                        <div className='my-2' key={question.id} style={{ border: '1px solid gray', borderRadius: '4px' }}>
                            <Row>
                                <Col>
                                    <h4 dangerouslySetInnerHTML={{ __html: question.question }}></h4>
                                </Col>
                                <Col>
                                    <EyeIcon onClick={(() => showCorrectAnswer(question.correctAnswer))} style={{ width: '30px', cursor: 'pointer' }} className="h-6 w-6 text-blue-500" />
                                </Col>
                            </Row>
                            <Form>
                                {question.options.map((option, index) =>
                                    <div key={index} className="mb-3">
                                        <Form.Check
                                            inline
                                            label={option}
                                            name="group1"
                                            value={option}
                                            type="radio"
                                            id={`${question.id}${index}`}
                                            onChange={(evt) => { checkAnswer(evt, question.correctAnswer) }}
                                        />
                                    </div>
                                )}
                            </Form>
                        </div>)}
                </Row>
            </Row>
        </Container>
    );
};

export default Quiz;