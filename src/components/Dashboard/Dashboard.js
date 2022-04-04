import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [chartData, setChartData] = useState([]);

    useEffect( () => {
        fetch('chartdata.json')
        .then(res => res.json())
        .then(data => setChartData(data));
    } , []);
    console.log(chartData);
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 my-5 gap-12'>
            <div className='h-96 border border-indigo-200 rounded-lg pb-8'>
                <h1 className='text-center text-xl text-indigo-600 font-semibold'>Monthly Sales</h1>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className='h-96 border border-indigo-200 rounded-lg pb-8'>
                <h1 className='text-center text-xl text-indigo-600 font-semibold'>Investment VS Revenue</h1>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
            </div>
            <div className='h-96 border border-indigo-200 rounded-lg pb-8'>
                <h1 className='text-center text-xl text-indigo-600 font-semibold'>Investment VS Sales</h1>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className='h-96 border border-indigo-200 rounded-lg pb-8'>
                <h1 className='text-center text-xl text-indigo-600 font-semibold'>Sales VS Revenue</h1>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                    width={500}
                    height={400}
                    data={chartData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend></Legend>
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="sell" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;