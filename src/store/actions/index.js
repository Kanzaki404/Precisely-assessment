import axios from 'axios'

const fetchCustomerSuccess = CustomerData => ({
    type: 'FETCH_CUSTOMERS_SUCCESS',
    payload: {CustomerData}
})

export const fetchCustomers = () => {
    return async dispatch => {
        try {
            let customers = await axios.get('customer.json')
            dispatch(fetchCustomerSuccess(customers.data)) 
        }
        catch(e){
            console.log(e)
        }
    }
}

const fetchContractsSuccess = ContractData => ({
    type: 'FETCH_CONTRACTS_SUCCESS',
    payload: {ContractData}
})

export const fetchContracts = () => {
    return async dispatch => {
        try {
            let contracts = await axios.get('contracts.json')
            dispatch(fetchContractsSuccess(contracts.data)) 
        }
        catch(e){
            console.log(e)
        }
    }
}

export const setGridView = (payload) => {
    return {
        type: 'GRID_VIEW',
        payload
    }
}

export const setListView = (payload) => {
    return {
        type: 'LIST_VIEW',
        payload
    }
}