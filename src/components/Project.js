import React, { useState,useEffect } from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import GitHubIcon from '@material-ui/icons/GitHub';

import ProjectLine from './ProjectLine'

const Project = ({ name, demo, description, link, languageData}) => {
    const [visualParts, setVisualParts] = useState([])
    const fetchData = async (dataURL) => {
        const response = await fetch(dataURL)
        if (response.status === 200) {
            const data = response.json()
            return data
        }
    }
    useEffect(() => {
        fetchData(languageData).then((data) => {
            const processedData = []
            // get total off all numbers
            let total = 0
            for (const property in data) {
                total = total + data[property]
            }
            // get percentage of language
            // add that to processedData
            for (const property in data) {
                let percentage = data[property] / total
                percentage = percentage * 100
                processedData.push({language: property.toLowerCase(), percentage})
            }
            setVisualParts(processedData)
        })
    }, [languageData])
    return (
        <div key={`${name}-container`} className='project__container'>
            <div>
                <p key={`${name}-name`}>{name}</p>
                <div key={`${name}-desc`} className={'project__desc'}><p>{description}</p></div>
                <a href={demo}><PlayCircleOutlineIcon fontSize={'large'} style={demo ? { color: 'white' } : { opacity: '20%' }} /></a> <a href={link}><GitHubIcon fontSize={'large'} style={{ color: 'white' }} /></a>
                <ProjectLine key={`${name}-bar-container`} label={name} visualParts={visualParts} />
            </div>
        </div>
    )
}

export default Project