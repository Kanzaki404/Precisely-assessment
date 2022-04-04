
const fetchCustomerReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'FETCH_CUSTOMERS_SUCCESS':
            return action.payload.CustomerData

        case 'REMOVE_CUSTOMER':
            return state.filter(e => e.id !== action.payload.customerId) 
        default:
            return state
    }
}


export default fetchCustomerReducer

