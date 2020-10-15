import { Avatar } from '@material-ui/core'
import React from 'react'

const Bio = () => {
    return (
        <div>
            <div className='bio-container'>
                <div className="bio-grid">
                    <div className="div1">
                        <p>Luke Stephenson</p>
                    </div>
                    <div className="div2">
                    <Avatar alt="Luke Stephenson" src="https://avatars0.githubusercontent.com/u/55663089" style={{height: '30vh', width: '30vh'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio