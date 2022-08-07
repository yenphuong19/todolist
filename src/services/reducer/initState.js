const task = {
    id: null,
    name: '', 
    description: '',
    date: new Date(), 
    repeat: 'None', 
    priority: 'None',
    label: 'None',
    isEdit: false,
    dateCompleted: ''

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
        dateCompleted: ''
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
        dateCompleted: ''
    },
    {
        id: 3,
        name: 'Send report', 
        description: '',
        date: new Date(2022, 8, 10),
        time: '',
        repeat: 'Daily',
        priority: 'Normal',
        label: 'None',
        isEdit: false,
        dateCompleted: ''
    },
    {
        id: 4,
        name: 'Go for a walk', 
        description: 'In the park',
        date: new Date(2022, 7, 8),
        time: '',
        repeat: 'Monthly',
        priority: 'Normal',
        label: 'None',
        isEdit: false,
        dateCompleted: ''
    },
    {
        id: 5,
        name: 'Finish presentation', 
        description: '',
        date: new Date(2022, 6, 12),
        time: '',
        repeat: 'Daily',
        priority: 'High',
        label: 'Study',
        isEdit: false,
        dateCompleted: ''
    },
    {
        id: 6,
        name: 'Writing', 
        description: '',
        date: new Date(),
        time: '',
        repeat: 'Daily',
        priority: 'High',
        label: 'Personal',
        isEdit: false,
        dateCompleted: ''
    },
    {
        id: 7,
        name: 'Update calendar', 
        description: '',
        date: new Date(),
        time: '',
        repeat: 'None',
        priority: 'None',
        label: 'None',
        isEdit: false,
        dateCompleted: ''
    },
]

const initState = {
    task: task,
    tasks: {
        completed: [],
        withoutUpdate: tasks,
        update: tasks,
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
