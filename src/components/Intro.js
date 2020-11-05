import React from 'react'
import Typewriter from 'typewriter-effect'

const Intro = () => {
    return (
        <div className='intro-container content-container'>
            <div className=''>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.changeDelay(35)
                            .typeString("Hi, I'm Luke Stephenson. ")
                            .pauseFor(500)
                            .typeString('Frontend Developer.')
                            .start()
                    }}
                />
            </div>
            <div className=''>
                <p className=''>I've been using the time given to me by shielding due to COVID to improve my software development skills in Javascript (Node.js, React, MongoDB, REST APIs) and GraphQL. Previously Co-Founder of Vlogbase, an AI SaaS company where I developed an automated audio/video transcription service with powerful search tools. </p>
            </div>
        </div>
    )
}

export default Intro