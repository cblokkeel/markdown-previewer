import React from 'react'

const Input = ({ setInput }) => {
    return (
        <textarea onChange={e => setInput(e.target.value)} placeholder='Enter your text...' className='bg-gray-300 rounded-md shadow-lg p-12 ml-4 my-8 outline-none resize-none'>
        </textarea>
    );
};

export default Input;<h1>Input</h1>