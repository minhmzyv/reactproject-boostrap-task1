import React from 'react'

const Project = () => {
    return (
        <div className='card shadow mx-3'>
            <div className='card-header py-3 d-flex align-items-center justify-content-between'>
                <h6 className='text-primary fw-bold m-0'>Projects</h6>
            </div>
            <div className='card-body'>
                <div className='container-fluid'>
                    <div className='progressText d-flex justify-content-between'>
                        <h6>Server Migration</h6>
                        <h6>20%</h6>
                    </div>
                    <div className='progress mb-3'>
                        <div className='progress-bar bg-danger' style={{ width: '20%' }}></div>
                    </div>
                    <div className='progressText d-flex justify-content-between'>
                        <h6>Sales Tracking</h6>
                        <h6>40%</h6>
                    </div>
                    <div className='progress mb-3'>
                        <div className='progress-bar bg-warning ' style={{ width: '40%' }}></div>
                    </div>
                    <div className='progressText d-flex justify-content-between'>
                        <h6>Customer Database</h6>
                        <h6>60%</h6>
                    </div>
                    <div className='progress mb-3'>
                        <div className='progress-bar bg-primary ' style={{ width: '60%' }}></div>
                    </div>
                    <div className='progressText d-flex justify-content-between'>
                        <h6>Payout Details</h6>
                        <h6>80%</h6>
                    </div>
                    <div className='progress mb-3'>
                        <div className='progress-bar bg-info ' style={{ width: '80%' }}></div>
                    </div>
                    <div className='progressText d-flex justify-content-between'>
                        <h6>Account Setup</h6>
                        <h6>Complete!</h6>
                    </div>
                    <div className='progress mb-3'>
                        <div className='progress-bar bg-success ' style={{ width: '100%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project