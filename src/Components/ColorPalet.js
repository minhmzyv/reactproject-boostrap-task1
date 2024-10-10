import React from 'react'

const ColorPalet = () => {
    return (
        <div className='row'>
            <div className='col-sm-6 mb-4'>
                <div className='card shadow bg-primary'>
                    <div className='card-body'>
                        <h6 className='text-white'>Primary</h6>
                        <p className='colorGray'>#4e73df</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 mb-4'>
                <div className='card shadow bg-success'>
                    <div className='card-body'>
                        <h6 className='text-white'>Success</h6>
                        <p className='colorGray'>#1cc88a</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 mb-4'>
                <div className='card shadow bg-info'>
                    <div className='card-body'>
                        <h6 className='text-white'>Info</h6>
                        <p className='colorGray'>#36b9cc</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 mb-4'>
                <div className='card shadow bg-warning'>
                    <div className='card-body'>
                        <h6 className='text-white'>Warning</h6>
                        <p className='colorGray'>#f6c23e</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 mb-4'>
                <div className='card shadow bg-danger'>
                    <div className='card-body'>
                        <h6 className='text-white'>Danger</h6>
                        <p className='colorGray'>#e74a3b</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 mb-4'>
                <div className='card shadow bg-secondary'>
                    <div className='card-body'>
                        <h6 className='text-white'>Secondary</h6>
                        <p className='colorGray'>#858796</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 mb-4'>
                <div className='card shadow bg-light'>
                    <div className='card-body'>
                        <h6 className='colorGray'>Light</h6>
                        <p className='colorGray'>#f8f9fc</p>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 mb-4'>
                <div className='card shadow bg-dark'>
                    <div className='card-body'>
                        <h6 className='text-white'>Dark</h6>
                        <p className='colorGray'>#5a5c69</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ColorPalet