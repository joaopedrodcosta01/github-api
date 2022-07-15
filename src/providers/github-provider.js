import React, { createContext, useState } from 'react'

export const githubContext = createContext({
    user: {},
    repositories: [],
    starred: [],
});

const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        user: {
            login: undefined,
            name: undefined,
            publicUrl: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0
        },
        repositories: [],
        starred: [],
    });

    const contextValue = {
        githubState,
    }
  return (
    <githubContext.Provider value={contextValue}>{ children }</githubContext.Provider>
  )
}

export default GithubProvider;