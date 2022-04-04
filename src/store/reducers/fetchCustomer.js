const fetchCustomerReducer = (state = [] , action) => {

    switch(action.type) {
        case 'FETCH_CUSTOMERS_SUCCESS':
            return action.payload.CustomerData
        default:
            return state
    }
}


export default fetchCustomerReducer