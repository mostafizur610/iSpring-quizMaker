import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data => {
                const chart = data.data;
                setChart(chart);
            })
    }, [])

    return (

        <div className='d-flex justify-content-center mt-5'>
            <ResponsiveContainer width="80%" aspect={2}>
                <BarChart data={chart}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default Chart;