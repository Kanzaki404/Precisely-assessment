import { combineReducers } from "redux";
import viewTypeReducer from "./viewType"
import fetchCustomerReducer from "./fetchCustomer"
import fetchContractsReducer from "./fetchContracts";

const rootReducers = combineReducers({
    viewType: viewTypeReducer,
    customer: fetchCustomerReducer,
    contract: fetchContractsReducer

})

export default rootReducers;