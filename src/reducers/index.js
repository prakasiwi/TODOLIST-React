import { combineReducers } from 'redux'
import lists from './lists'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    lists,
    form: formReducer
})