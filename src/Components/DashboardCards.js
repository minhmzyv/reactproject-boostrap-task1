import React from 'react'

const DashboardCards = () => {
    return (
        <div className='row DashboardCards justify-content-between'>
            <div className='col-sm-3 card borderLeftPrimary'>
                <div className='row'>
                    <div className='col-sm-8 py-4'>
                        <h6 className='text-primary'>Earnings (Monthly)</h6>
                        <h5>$40,000</h5>
                    </div>
                    <div className='col-sm-4 d-flex justify-content-center align-items-center'>
                        <i class="fas fa-calendar fs-2 colorGray"></i>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 card borderLeftSucces'>
                <div className='row'>
                    <div className='col-sm-8 py-4'>
                        <h6 className='text-success'>Earnings (Annual)</h6>
                        <h5>$215,000</h5>
                    </div>
                    <div className='col-sm-4 d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-dollar-sign fs-2 colorGray"></i>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 card borderLeftBlue'>
                <div className='row'>
                    <div className='col-sm-7 py-4'>
                        <h6 className='text-info'>TASK</h6>
                        <h5>50%</h5>
                    </div>
                    <div className='col-sm-4 d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-clipboard-list fs-2 colorGray"></i>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 card borderLeftOrange'>
                <div className='row'>
                    <div className='col-sm-8 py-4'>
                        <h6 className='text-warning'>Pending Requests</h6>
                        <h5>18</h5>
                    </div>
                    <div className='col-sm-4 d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-comments fs-2 colorGray"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCards