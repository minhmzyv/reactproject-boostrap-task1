import React from 'react'
import SearchBar from './SearchBar'
import UserInterFace from './UserInterFace'
import DashboardCards from './DashboardCards'
import Charts from './Charts'
import ProjectsBar from './ProjectsBar'
import ColorPalets from './ColorPalets'

const Navbar = () => {
    return (
        <div className='col-sm-10'>
            <div className='row bg-white justify-content-between align-items-center navRow'>
                <div className='col-sm-6'>
                    <SearchBar />
                </div>
                <div className='col-sm-3'>
                    <UserInterFace />
                </div>
            </div>
            <div className='DashboardBar d-flex justify-content-between align-items-center'>
                <h3 className='p-4'> Dashboard</h3>
                <button className='btn btn-primary btn-sm m-4'><i class="fa-solid fa-download colorGray"></i> Generate Report</button>
            </div>
            <DashboardCards />
            <Charts />
            <ProjectsBar />
            <ColorPalets />
            <p className='text-center py-5'>Copyright © Your Website 2021</p>
        </div>

    )
}

export default Navbar