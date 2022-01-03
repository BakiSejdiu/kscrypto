import React from 'react'

function Error404() {
    return (
        <>
        <div>
            <h1 className='error'>404 Error</h1>
        </div>
            <style>
            {`
            .error{
                text-align:center;
            }
            `}
            </style>
        </>
    )
}

export default Error404
