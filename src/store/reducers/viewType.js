const viewTypeReducer = (state='grid', action) => {
    switch(action.type){
        case 'GRID_VIEW':
            return {state: action.payload}
        case 'LIST_VIEW':
            return {state: action.payload}
        default: 
            return state
    }
}

export default viewTypeReducer