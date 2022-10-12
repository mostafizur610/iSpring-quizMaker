import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className='d-flex justify-content-evenly my-5 topics-section'>
                {
                    topics.data.map(topic => <Topics
                        key={topic.id}
                        topic={topic}
                    ></Topics>)
                }
            </div>
        </div>
    );
};

export default Home;