const initalState = []

const githubReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'POPULATE_REPOS':
            return [
                ...state,
                ...action.repos
            ]
        default:
            return state
    }
}

export default githubReducer