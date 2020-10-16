import React, { useEffect, useReducer } from 'react'
import Intro from './Intro'
import Bio from './Bio';
import ProjectList from './ProjectList';
import GithubContext from '../context/GithubContext';
import githubReducer from '../reducers/github'
import Contact from './Contact';

const App = () => {
    const [repos, reposDispatch] = useReducer(githubReducer)
    useEffect(() => {
        const dataFetch = async () => {
            const response = await fetch('https://api.github.com/users/luke-st/repos')
            if (response.status === 200) {
                await response.json().then((json) => {
                    const repoData = []
                    for (const property in json) {
                        // console.log(json[property])
                        repoData.push({
                            name: json[property].name,
                            description: json[property].description,
                            demo: json[property].homepage,
                            link: json[property].html_url,
                            languageData: json[property].languages_url
                        })
                    }
                    reposDispatch({
                        type: 'POPULATE_REPOS', repos: [...repoData]
                    })
                })
            }
        }
        dataFetch()
    }, [])
    return (
        <GithubContext.Provider value={{ repos }}>
            <Intro />
            <Bio />
            <ProjectList />
            <Contact />
        </GithubContext.Provider>
    )
}

export default App