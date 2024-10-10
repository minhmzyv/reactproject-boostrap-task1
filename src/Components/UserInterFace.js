import React from 'react'

const UserInterFace = () => {
    return (
        <div className='UserInterFace d-flex justify-content-around align-items-center'>
            <div className='Notifications'>
                <i class="fa-solid fa-bell colorGray mx-5">
                    <span className='badge bg-danger'>3+</span>
                </i>

                <i class="fa-solid fa-envelope colorGray">
                    <span className='badge bg-danger'>3+</span>
                </i>

            </div>

            <div className='userBar d-flex justify-content-center'>
                <h6 className='interfaceText me-2 py-1'>Douglas McGee</h6>
                <i class="fa-solid fa-user fs-4 "></i>
            </div>
        </div>
    )
}

export default UserInterFace