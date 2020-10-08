import { Button, ButtonGroup, Fab } from '@material-ui/core'
import { EmailOutlined, LinkedIn } from '@material-ui/icons'
import React from 'react'

const Contact = () => {
    return (
        <div className={'contact-buttons'}>
            <Fab style={{margin: '0.3rem'}}><a style={{textDecoration: 'none', lineHeight: 1, color: 'rgba(0, 0, 0, 0.87)'}} href={'mailto:lukestephenson@live.co.uk'}><EmailOutlined fontSize="large"/></a></Fab>
            <Fab style={{margin: '0.3rem'}}><a style={{textDecoration: 'none', lineHeight: 1, color: 'rgba(0, 0, 0, 0.87)'}} href={'https://www.linkedin.com/in/lukeste/'}><LinkedIn fontSize="large"/></a></Fab>
        </div>
    )
}

export default Contact