import { combineReducers } from "redux";
import viewTypeReducer from "./viewType"
import fetchCustomerReducer from "./fetchCustomer"
import fetchContractsReducer from "./fetchContracts";
import currentContract from "./currentContract";
import currentCustomer from "./currentCustomer";



const rootReducers = combineReducers({
    viewType: viewTypeReducer,
    customer: fetchCustomerReducer,
    contract: fetchContractsReducer,
    currentContract: currentContract,
    currentCustomer: currentCustomer
})

export default rootReducers;