const fetchContractsReducer = (state = [] , action) => {

    switch(action.type) {
        case 'FETCH_CONTRACTS_SUCCESS':
            return action.payload.ContractData
        default:
            return state
    }
}


export default fetchContractsReducer