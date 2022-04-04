const currentContract = (state={}, action) => {
    switch(action.type) {
        case 'CURRENT_CONTRACT':
            return action.payload
        default:
            return state
    }
}

export default currentContract;