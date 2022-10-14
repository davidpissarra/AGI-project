import Api from './Api.js'

export default {
    getSubResult (arg1, arg2) {
        return Api('sub').get('/sub?arg1=' + arg1 + '&arg2=' + arg2);
    }
}