import {configureStore} from "@reduxjs/toolkit"
import budgetReducer from './reducers/budgetReducer'
import expenseReducer from "./reducers/expenseReducer"

export const store = configureStore({
    reducer: {
        budget: budgetReducer,
        expense: expenseReducer
        
    }
})
