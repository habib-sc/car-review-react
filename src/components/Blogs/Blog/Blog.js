import React from 'react';

const Blog = (props) => {
    const { title, text } = props.blog;
    return (
        <div className='text-center border border-indigo-200 rounded-lg my-5 py-3 px-5 w-[90%] md:w-[70%] mx-auto shadow-lg bg-indigo-100'>
            <h2 className='text-xl font-semibold mb-2'>{title}</h2>
            <p>{text}</p>
        </div>
    );
};

export default Blog;