import React from 'react'
import Project from './Project'
import Illustrations from './Illustrations'

const ProjectsBar = () => {
    return (
        <div className='row'>
            <div className='col-sm-6'>
                <Project />
            </div>
            <div className='col-sm-6'>
                <Illustrations />
            </div>
        </div>
    )
}

export default ProjectsBar