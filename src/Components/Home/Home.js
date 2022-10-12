import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const topics = useLoaderData();
    // console.log(topics);
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <h2 className='d-flex justify-content-center my-3'>Total topics: {topics.data.length}</h2>
            <div className='d-flex justify-content-evenly my-2'>
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