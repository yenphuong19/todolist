import { getNewId  } from "./todo"

// Action
export const SET_INFO = 'set_info'
export const setInfo = payload => {
    return {
        type: SET_INFO, 
        payload
    }
}

export const ADD_TASK = 'add_task'
export const addTask = payload => {
    return {
        type: ADD_TASK,
        payload,
    }
}

export const EDIT_TASK = 'edit_task'
export const editTask = (payload, status) => {
    return {
        type: EDIT_TASK,
        payload,
        status
    }
}

export const DELETE_TASK = 'delete_task'
export const deleteTask = payload => {
    return {
        type: DELETE_TASK,
        payload
    }
}

export const CANCEL_ACTION = 'cancel_action'
export const cancelAction = payload => {
    return {
        type: CANCEL_ACTION,
        payload
    }
}

export const SAVE_ACTION = 'save_action'
export const saveAction = payload => {
    return {
        type: SAVE_ACTION,
        payload
    }
}

export const COMPLETED_ACTION = 'completed_action'
export const completedAction = payload => {
    return { 
        type: COMPLETED_ACTION, 
        payload,
    }
}

export const CHANGE_INFO = 'change_info'
export const changeInfo = payload => {
    return {
        type: CHANGE_INFO,
        payload
    }
}

export const CHANGE_DATE = 'change_date'
export const changeDate = payload => {
    return {
        type: CHANGE_DATE,
        payload
    }
}

export const SHOW_COMPONENT = 'show_component'
export const showComponent = (payload, status) => {
    return {
        type: SHOW_COMPONENT,
        payload,
        status
    }
}


// Reducer
export default function reducer (state, action) {

    const newTasksAll = [...state.tasks.all]
    const newTasksUpdate = [...state.tasks.update]
    const newTasksCompleted = [...state.tasks.completed]
    let newTasksAfterChange;

    switch (action.type) {

        case SET_INFO:
            return {
                ...state,
                task: {
                    ...state.task,
                    [action.payload.name]: action.payload.value, 
                }
            }

        case ADD_TASK:
            newTasksAll.splice(newTasksAll.length, 0, {
                ...state.task,
                id: getNewId(newTasksAll),
                isEdit:false
            })
            return {
               ...state,
                tasks: {
                    ...state.tasks,
                    all: newTasksAll,
                    withoutUpdate: newTasksAll,
                    update: newTasksAll
                }, 
            }

        case EDIT_TASK:
            newTasksAfterChange = newTasksAll.map(task => {
                return {
                    ...task,
                    isEdit: action.payload.id === task.id ? action.status : false,
                }
            })
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    withoutUpdate: newTasksAfterChange,
                    all: newTasksAfterChange
                },
            }

        case DELETE_TASK:
            const index = newTasksAll.findIndex(task => task.id === action.payload.id)
            newTasksAll.splice(index, 1)
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    all: newTasksAll,
                    update: newTasksAll,
                    withoutUpdate: newTasksAll,
                }
            }

        case CANCEL_ACTION:
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    all: [...state.tasks.withoutUpdate]
                }
            }

        case SAVE_ACTION:
            newTasksAfterChange = newTasksUpdate.map(task => {
                return {
                    ...task,
                    name: task.name.trim(),
                    description: task.description.trim()
                }
            })
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    all: newTasksAfterChange
                }
            }
        
        case COMPLETED_ACTION:
            const date = new Date()
            // const time = `${date.getHours()}:${date.getMinutes()}`
            const newTaskCompleted = {
                ...action.payload,
                dateCompleted: date
            }
                
            newTasksCompleted.push(newTaskCompleted)
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    completed: newTasksCompleted,
                    all: [...state.tasks.all].filter(task => task.name !== action.payload.name),
                },
            }

        case CHANGE_INFO:
            newTasksAfterChange = newTasksAll.map(task => {
                return {
                    ...task,
                    [action.payload.name]: action.payload.task.id === task.id ? action.payload.value : task[action.payload.name]
                }
            })
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    update: newTasksAfterChange,
                    all: newTasksAfterChange
                }
            }

            case CHANGE_DATE:
                newTasksAfterChange = newTasksAll.map(task => {
                    return {
                        ...task,
                        date: action.payload.task.id === task.id ? action.payload.value : task.date
                    }
                })
                return {
                    ...state,
                    tasks: {
                        ...state.tasks,
                        update: newTasksAfterChange
                    }
                }
    }
}
