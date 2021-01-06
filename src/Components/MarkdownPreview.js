import React from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownPreview = ({ input }) => {
    console.log(input)

    return (
        <div className='bg-white p-12 mr-4 my-8 rounded-md shadow-lg'>
            <ReactMarkdown source={ input }/>
        </div>
    );
};

export default MarkdownPreview;