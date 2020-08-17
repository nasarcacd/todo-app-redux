import TodoTypes from './todo.types'

export const addTask = (text) => ({
    type: TodoTypes.ADD_TASK,
    data: {
        id: Math.random(),
        value: text
    }
})

export const removeTask = (id) => ({
    type: TodoTypes.REMOVE_TASK,
    id
})