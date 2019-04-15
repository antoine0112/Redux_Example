import {combineReducers, createStore, applyMiddleware} from 'redux'
import ReduxThunk from "redux-thunk"
import reducer from "../reducers/my_reducer"

const reducers = combineReducers({
    reducer
})

export default createStore(reducers, {}, applyMiddleware(ReduxThunk));