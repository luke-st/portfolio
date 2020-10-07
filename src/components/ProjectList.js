import React, { useContext } from 'react'
import Project from './Project'
import GithubContext from '../context/GithubContext'
import { Grid } from '@material-ui/core'

const ProjectList = () => {
    const { repos } = useContext(GithubContext)
    return (
        <Grid container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {repos !== undefined ? (repos.map((project) => (
        <Project key={project.name} {...project} />
    ))) : null }
        </Grid>
    )
}

export default ProjectList