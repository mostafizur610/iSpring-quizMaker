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
        // <ResponsiveContainer width="100%" height="100%">
        // </ResponsiveContainer>
        <div className='d-flex justify-content-center mt-5'>
            <BarChart width={600} height={400} data={chart}>
                <Bar dataKey="total" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>
        </div>

    );
};

export default Chart;