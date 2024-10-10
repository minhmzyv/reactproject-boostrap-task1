import React from 'react'
import Navbar from './Navbar'
const Sidebar = () => {
    return (
        <div className='row sideBar'>

            <div className='col-sm-2 bg-primary'>
                <div className='container'>
                    <div className='iconLogo d-flex justify-content-center py-3'>
                        <i className="fa-solid fa-face-grin-wink text-white fs-2 mx-3 faceIcon"></i>
                        <h6 className='text-white fw-bold fs-5 my-1'>SB ADMIN <sup>2</sup></h6>
                    </div>
                    <hr className='text-white'></hr>
                    <div className='DashboardIcon d-flex justify-content-start align-items-center'>
                        <i className="fa-solid fa-gauge-high text-white mb-2"></i>
                        <h6 className='text-white fw-bold mx-2'>Dashboard</h6>

                    </div>
                    <hr className='text-white' />
                    <h6 className='fw-bold interfaceText colorGray'>INTERFACE</h6>
                    <div className='ComponentsIcon d-flex py-3 align-items-center'>
                        <i class="fa-solid fa-gear colorGray mb-2"></i>
                        <h6 className='mx-2 colorLight'>Components</h6>
                        <i class="fa-solid fa-angle-right colorLight arrowIcon mb-1"></i>
                    </div>
                    <div className='ComponentsIcon d-flex align-items-center py-3'>
                        <i class="fa-solid fa-wrench colorGray mb-2"></i>
                        <h6 className='mx-2 colorLight'>Utilities</h6>
                        <i class="fa-solid fa-angle-right colorLight arrowIcon mb-1"></i>
                    </div>
                    <hr className='text-white' />
                    <h6 className='fw-bold interfaceText colorGray'>ADDONS</h6>
                    <div className='ComponentsIcon d-flex align-items-center py-3'>
                        <i class="fa-solid fa-folder colorGray mb-2"></i>
                        <h6 className='mx-2 colorLight'>Pages</h6>
                        <i class="fa-solid fa-angle-right colorLight arrowIcon mb-1"></i>
                    </div>
                    <div className='ComponentsIcon d-flex align-items-center py-3'>
                        <i class="fa-solid fa-chart-area colorGray mb-2"></i>
                        <h6 className='mx-2 colorLight'>Charts</h6>
                    </div>
                    <div className='ComponentsIcon d-flex align-items-center py-3'>
                        <i class="fa-solid fa-table colorGray mb-2"></i>
                        <h6 className='mx-2 colorLight'>Tables</h6>
                    </div>
                    <hr className='text-white' />
                    <div className='leftArrow d-flex justify-content-center align-items-center mx-auto'>
                        <i class="fa-solid fa-chevron-left colorLight"></i>
                    </div>
                    <div className='SBAdminPro my-3 p-2 d-flex align-items-center'>
                        <i class="fa-solid fa-rocket text-white py-2 fs-2"></i>
                        <p className='sbadminproText interfaceText colorLight text-center'><b>SB Admin Pro</b> is packed with premium features, components, and more!</p>
                        <button className='btn btn-success btn-sm mb-2 '>Upgrade to Pro!</button>
                    </div>
                </div>

            </div>
            <Navbar />
        </div>
    )
}

export default Sidebar