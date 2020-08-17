import TodoTypes from './todo.types'

const INITIAL_STATE = [];

const todo = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case TodoTypes.ADD_TASK:
            return [...state, action.data]
        case TodoTypes.REMOVE_TASK:
            return state.filter((item) => item.id !== action.id)
        default:
            return state
    }
}

export default todo