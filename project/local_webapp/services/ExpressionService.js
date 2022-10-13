import Api from './Api.js'

export default {
    getExpressionResult (arg1, arg2) {
        return Api('calc_expression').get('/add?arg1=' + arg1 + '&arg2=' + arg2);
    }
}