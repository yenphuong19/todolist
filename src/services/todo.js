import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from 'constants/filter';
import { MODE_NONE, MODE_CREATE, MODE_SEARCH, MODE_EDIT } from 'constants/mode';
import { format } from 'date-fns';

export const getListRender = (list, mode, filter, query) => {
    const filterParam = 'completed'
    const searchParam = 'name'

    switch (mode) {
        case MODE_NONE:
        case MODE_CREATE:
        case MODE_EDIT:
            return list.all
            // switch (filter) {
            //     case FILTER_ALL:
            //         return list
            //     case FILTER_ACTIVE:
            //         return list.filter(item => {
            //             return item[filterParam] === false
            //         })
            //     case FILTER_COMPLETED:
            //         return list.filter(item => {
            //             return item[filterParam] === true
            //         })
            // }
        case MODE_SEARCH:
            return list.all.filter(item => {
                return item[searchParam]
                    .toString()
                    .toLowerCase()
                    .indexOf(query.toLowerCase()) > -1
                })
            // switch (filter) {
            //     case FILTER_ALL:
            //         return list.filter(item => {
            //             return item[searchParam]
            //                 .toString()
            //                 .toLowerCase()
            //                 .indexOf(query.toLowerCase()) > -1
            //             })
            //     case FILTER_ACTIVE:
            //         const filterActiveResult = list.filter(item => {
            //             return item[filterParam] === false
            //         })
            //         const searchActiveResult = filterActiveResult.filter(item => {
            //             return item[searchParam]
            //                 .toString()
            //                 .toLowerCase()
            //                 .indexOf(query.toLowerCase()) > -1
            //         })
            //         return searchActiveResult
            //     case FILTER_COMPLETED:
            //         const filterCompletedResult = list.filter(item => {
            //             return item[filterParam] === true
            //         })
            //         const searchCompletedResult = filterCompletedResult.filter(item => {
            //             return item[searchParam]
            //                 .toString()
            //                 .toLowerCase()
            //                 .indexOf(query.toLowerCase()) > -1
            //         })
            //         return searchCompletedResult
            // }
    }
}

export const getNewId = (items) => {
    const newItems = items.map(item => item.id)
    const maxInNewItems = Math.max.apply(Math, newItems)
    const newId = maxInNewItems + 1
    return newId
}

export const getDateContent = (date) => {
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)
    const lastDayOfWeek = new Date()
    lastDayOfWeek.setDate(today.getDate() + 6)
    if (date.toDateString() === today.toDateString())
        return {
            value: 'Today',
            color: '#058527'
        }
    else if (date.toDateString() === tomorrow.toDateString())
        return { 
            value: 'Tomorrow',
            color: '#ad6200'
        }
    else if (date > tomorrow && date < lastDayOfWeek)
        return { value: format(date, 'iiii') }
            
    else if (date < today)
        return {
            value: 'Overdue',
            color: '#d1453b'
        }
    else if (!date) {
        return { value : '' }
    }
    else 
        return { value: format(date, 'MMM dd, yyyy') }
}

export const uniqueArray = (array) => {
    let arrayToString = array.map(item => item.toLocaleDateString())
    let newArray = []
    newArray = array.filter((item, index) => {
        return arrayToString[index] === arrayToString[index - 1] ? '' : newArray.push(item)
    })
    return newArray
}
