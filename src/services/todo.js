import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from './filter'
import { MODE_NONE, MODE_CREATE, MODE_SEARCH, MODE_EDIT } from './mode'

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
