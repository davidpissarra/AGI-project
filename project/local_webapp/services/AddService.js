import Api from './Api.js'

export default {
    getAddResult (arg1, arg2, clientId) {
        return Api().get('/add?arg1=' + arg1 + '&arg2=' + arg2 + '&clientId=' + clientId);
    }
}