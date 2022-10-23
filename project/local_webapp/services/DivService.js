import Api from './Api.js'

export default {
    getDivResult (arg1, arg2) {
        return Api().get('/div?arg1=' + arg1 + '&arg2=' + arg2);
    }
}