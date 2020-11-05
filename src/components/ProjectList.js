import React, { useContext } from 'react'
import Project from './Project'
import GithubContext from '../context/GithubContext'
import Grid from '@material-ui/core/Grid'

const ProjectList = () => {
    const { repos } = useContext(GithubContext)
    return (
        <div >
            <div className='content-container'>
                <h2>Things that I've made</h2>
            </div>
            <Grid container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                className="project-grid"
            >
                {repos !== undefined ? (repos.map((project) => (
                    <Project key={project.name} {...project} />
                ))) : null}
            </Grid>
        </div>
    )
}

export default ProjectList