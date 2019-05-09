import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import filtersReducer from '../reducers/filters'
import authReducer from '../reducers/auth'

export default () => {
    const store = createStore(
        combineReducers({
            filters: filtersReducer,
            auth: authReducer
        }),
        composeWithDevTools(applyMiddleware(thunk))
    )
    return store
}

