import React from 'react'

const Illustrations = () => {
    return (
        <div className='card shadow mx-3'>
            <div className='card-header py-3'>
                <h6 className='text-primary fw-bold m-0'>Illustrations</h6>
            </div>
            <div className='card-body'>
                <div className='img d-flex justify-content-center'>
                    <img className='img-fluid mt-3 mb-4 ' src='https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg' style={{ width: "25rem" }} />
                </div>
                <p className=''>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
                <a href='#'>Browse Illustrations on unDraw →</a>
            </div>
        </div>
    )
}

export default Illustrations