import React from 'react'
import ColorPalet from './ColorPalet'
import DevelopmentApproach from './DevelopmentApproach'

const ColorPalets = () => {
    return (
        <div className='row'>
            <div className='col-sm-6'>
                <ColorPalet />
            </div>
            <div className='col-sm-6'>
                <DevelopmentApproach />
            </div>
        </div>
    )
}

export default ColorPalets