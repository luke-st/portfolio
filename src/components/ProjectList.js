import React, { useContext } from 'react'
import Project from './Project'
import GithubContext from '../context/GithubContext'

const ProjectList = () => {
    const { repos } = useContext(GithubContext)
    return (
        <>
        {repos !== undefined ? (repos.map((project) => (
        <Project key={project.name} {...project} />
    ))) : null }
        </>
    )
}

export default ProjectList