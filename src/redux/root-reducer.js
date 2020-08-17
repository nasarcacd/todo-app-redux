import { combineReducers } from 'redux'
import todoReducer from '../redux/todo/todo.reducer'

const rootReducer = combineReducers({
    tasks: todoReducer
})

export default rootReducer