import React, { useContext } from 'react'
import Project from './Project'
import GithubContext from '../context/GithubContext'
import Grid from '@material-ui/core/Grid'

const ProjectList = () => {
    const { repos } = useContext(GithubContext)
    return (
        // https://getbootstrap.com/docs/4.5/components/collapse/ Bootstrap time?
        <Grid container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className="project-grid"
      >
        {repos !== undefined ? (repos.map((project) => (
        <Project key={project.name} {...project} />
    ))) : null }
        </Grid>
    )
}

export default ProjectList