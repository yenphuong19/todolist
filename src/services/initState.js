// InitState
const task = {
    id: null,
    name: '', 
    description: '',
    date: new Date(), 
    repeat: 'None', 
    priority: 'None',
    label: 'None',
    isEdit: false,
}

const tasks = [
    {
        id: 1,
        name: 'Read book', 
        description: 'Change life',
        date: new Date(2022, 2, 2),
        time: '',
        repeat: 'None',
        priority: 'High',
        label: 'Personal',
        isEdit: false,
    },
    {
        id: 2,
        name: 'Clean houses', 
        description: 'yeah yeah yeah',
        date: new Date(2022, 0, 15),
        time: '',
        repeat: 'Weekly',
        priority: 'None',
        label: 'Personal',
        isEdit: false,
    },
    {
        id: 3,
        name: 'Shopping', 
        description: '',
        date: new Date(2022, 9, 10),
        time: '',
        repeat: 'Daily',
        priority: 'Normal',
        label: 'None',
        isEdit: false,
    },
    {
        id: 4,
        name: 'Go for a walk', 
        description: 'In the park',
        date: new Date(2022, 7, 4),
        time: '',
        repeat: 'Monthly',
        priority: 'Normal',
        label: 'None',
        isEdit: false,
    },
    {
        id: 5,
        name: 'Study hard, play hard', 
        description: '',
        date: new Date(2022, 6, 12),
        time: '',
        repeat: 'Daily',
        priority: 'High',
        label: 'Study',
        isEdit: false,
    },
]

const initState = {
    task: task,
    tasks: {
        completed: [],
        withoutUpdate: tasks,
        all: tasks
    },
    showComponent: {
        daypicker: false,
        timepicker: false,
        repeat: false,
        taskAction: false,
    }
}

export default initState;
