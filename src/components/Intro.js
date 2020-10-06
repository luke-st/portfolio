import React from 'react'

const Intro = () => {
    return (
        <div className='box-layout'>
            <div className='box-layout__box'>
                    <span className='intro__content bubble'>I'm <span className='intro__name'>Luke Stephenson</span></span>
                    <div>
                        <span className='bubble'>Javascript Developer</span>
                        {/* Messenger bubble format for the head? */}
                    </div>
                <span className='backdrop'>Hello</span>
                <div className='intro-container'>
                </div>
            </div>
        </div>
    )
}

export default Intro