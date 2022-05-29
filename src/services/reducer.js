import { getNewId  } from "./todo"

// InitState
const job = {
    id: null,
    name: '', 
    description: '',
    date: new Date(), 
    repeat: 'None', 
    edited: false
}

const jobs = [
    {
        id: 1,
        name: 'Read book', 
        description: 'Change life',
        date: new Date(2022, 2, 2),
        time: '',
        repeat: 'None',
        edited: false,
    },
    {
        id: 2,
        name: 'Clean houses', 
        description: 'yeah yeah yeah',
        date: new Date(2022, 0, 15),
        time: '',
        repeat: 'Weekly',
        edited: false,
    },
    {
        id: 3,
        name: 'Shopping', 
        description: '',
        date: new Date(2022, 9, 10),
        time: '',
        repeat: 'Daily',
        edited: false,
    },
    {
        id: 4,
        name: 'Go for a walk', 
        description: 'In the park',
        date: new Date(2022, 7, 4),
        time: '',
        repeat: 'Monthly',
        edited: false,
    },
    {
        id: 5,
        name: 'Study hard, play hard', 
        description: '',
        date: new Date(2022, 6, 12),
        time: '',
        repeat: 'Daily',
        edited: false,
    },
].concat(job)

export const initState = {
    job: job,
    jobs: {
        completed: [],
        withoutUpdate: jobs,
        all: jobs
    },
    showComponent: {
        daypicker: false,
        timepicker: false,
        repeat: false,
        jobAction: false,
    }
}


// Action
export const SET_NAME = 'set_name'
export const setName = payload => {
    return {
        type: SET_NAME, 
        payload
    }
}

export const SET_DESCRIPTION = 'set_description'
export const setDescription = payload => {
    return {
        type: SET_DESCRIPTION, 
        payload
    }
}

export const ADD_JOB = 'add_job'
export const addJob = payload => {
    return {
        type: ADD_JOB,
        payload,
    }
}

export const EDIT_JOB = 'edit_job'
export const editJob = (payload, index, status) => {
    return {
        type: EDIT_JOB,
        payload,
        index,
        status,
    }
}

export const DELETE_JOB = 'delete_job'
export const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

export const CANCEL_ACTION = 'cancel_action'
export const cancelAction = (payload) => {
    return {
        type: CANCEL_ACTION,
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
export const CHANGE_NAME = 'change_name'
export const changeName = (payload, index) => {
    return {
        type: CHANGE_NAME,
        payload,
        index
    }
}

export const CHANGE_DESCRIPTION = 'change_description'
export const changeDescription = (payload, index) => {
    return {
        type: CHANGE_DESCRIPTION,
        payload,
        index
    }
}

export const CHANGE_REPEAT = 'change_repeat'
export const changeRepeat = (payload, repeat) => {
    return { 
        type: CHANGE_REPEAT, 
        payload, 
        repeat
    }
}

export const CHANGE_DATE = 'change_date'
export const changeDate = (payload, date) => {
    return { 
        type: CHANGE_DATE, 
        payload, 
        date
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

    const newJobsAll = [...state.jobs.all]
    const newJobsCompleted = [...state.jobs.completed]

    switch (action.type) {

        case SET_NAME:
            return {
                ...state,
                job: {
                    ...state.job,
                    name: action.payload, 
                }
            }

        case SET_DESCRIPTION:
            return {
                ...state,
                job: {
                    ...state.job,
                    description: action.payload, 
                }
            }

        case ADD_JOB:
            newJobsAll.splice(newJobsAll.length - 1, 0, {
                ...state.job,
                id: getNewId(newJobsAll),
                edited:false
            })
            return {
               ...state,
                jobs: {
                    ...state.jobs,
                    all: newJobsAll
                }, 
            }

        case EDIT_JOB:
            let newJobsUpdateEdited = newJobsAll.map((job, index) => {
                return {
                    ...job,
                    edited: action.index === index ? action.status : false,
                }
            })
            return {
                ...state,
                jobs: {
                    ...state.jobs,
                    withoutUpdate: newJobsUpdateEdited,
                    all: newJobsUpdateEdited
                },
            }

        case DELETE_JOB:
            newJobsAll.splice(action.payload, 1)
            return {
                ...state,
                jobs: {
                    ...state.jobs,
                    all: newJobsAll
                }
            }

        case CANCEL_ACTION:
            return {
                ...state,
                jobs: {
                    ...state.jobs,
                    all: [...state.jobs.withoutUpdate]
                }
            }
        
        case COMPLETED_ACTION:
            newJobsCompleted.push(action.payload)
            return {
                ...state,
                jobs: {
                    ...state.jobs,
                    completed: newJobsCompleted,
                    all: [...state.jobs.all].filter(job => job.name !== action.payload.name),
                },
            }

        case CHANGE_NAME: 
            let newJobsUpdateName = newJobsAll.map((job, index) => {
                return {
                    ...job,
                    name: action.index === index ? action.payload : job.name,
                }
            })
            return {
                ...state,
                jobs: {
                    ...state.jobs,
                    all: newJobsUpdateName
                },
            }

        case CHANGE_DESCRIPTION: 
            let newJobsUpdateDescription = newJobsAll.map((job, index) => {
                return {
                    ...job,
                    description: action.index === index ? action.payload : job.description,
                }
            })
            return {
                ...state,
                jobs: {
                    ...state.jobs,
                    all: newJobsUpdateDescription
                },
            }

        case CHANGE_REPEAT:
            let newJobsUpdateRepeat = newJobsAll.map(job => {
                return {
                    ...job,
                    repeat: action.payload.id === job.id ? action.repeat : job.repeat,
                }
            })
            return {
                ...state,
                jobs: {
                    ...state.jobs,
                    all: newJobsUpdateRepeat
                }
            }

        case CHANGE_DATE:
            let newJobsUpdateDate = newJobsAll.map(job => {
                return {
                   ...job,
                    date: action.payload.id === job.id ? action.date : job.date,
                }
            })
            return {
                ...state,
                jobs: {
                    ...state.jobs,
                    all: newJobsUpdateDate
                }
            }
        
        case SHOW_COMPONENT: 
            let newShowComponent = {

            }
            return {
                ...state,
                showComponent: {
                    ...state.showComponent
                }
            }
    }
}
