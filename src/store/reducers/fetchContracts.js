const fetchContractsReducer = (state = [], action) => {

    switch (action.type) {
        case 'FETCH_CONTRACTS_SUCCESS':
            return action.payload.ContractData
        case 'REMOVE_CUSTOMER_RELATED_CONTRACTS':
            return state.filter(e => e.customerId !== action.payload.customerId)
        default:
            return state
    }
}


export default fetchContractsReducer