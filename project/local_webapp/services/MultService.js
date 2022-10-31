import Api from './Api.js'

export default {
    getMultResult (arg1, arg2,clientId) {
        return Api().get('/mult?arg1=' + arg1 + '&arg2=' + arg2 + '&clientId=' + clientId);
    }
}