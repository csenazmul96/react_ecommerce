import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Reducers'
const initialState = {}
export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
)
