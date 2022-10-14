import AddService from './services/AddService.js'
import SubService from './services/SubService.js'
import MultService from './services/MultService.js'
import DivService from './services/DivService.js'

var expression = ''
var display = document.getElementById('display');
display.textContent = ''

async function appendClickedButton(b) {
    if(b === 'del') {
        expression = expression.slice(0,-1)
    } else if(b === 'ac') {
        expression = ''
    } else if (b === '='){
        var ops = ["+", "-", "/", "*"]
        var hasOp = false
        for(var op of ops) { // var (?)
            if(expression.includes(op)) {
                hasOp = true
                break
            }
        }
        if(!hasOp) {return}

        const arr = expression.split(op)
        switch(op) {
            case '+':
                var response = await AddService.getAddResult(arr[0], arr[1]);
                break;
            case '-':
                var response = await SubService.getSubResult(arr[0], arr[1]);
                break;
            case '*':
                var response = await MultService.getMultResult(arr[0], arr[1]);
                break;
            case '/':
                var response = await DivService.getDivResult(arr[0], arr[1]);
                break;
            default:
                // code block
                break; // Maybe we should consider insert something here, but may not even run this block
          }
        expression = response.data.result.toString()
    } else if (b === '+') {
        var ops = ["+", "-", "/", "*"]
        for(const op of ops) {if(expression.includes(op)) return}
        expression = expression + '+'
    } else if (b === '-') {
        var ops = ["+", "-", "/", "*"]
        for(const op of ops) {if(expression.includes(op)) return}
        expression = expression + '-'
    } else if (b === '*') {
        var ops = ["+", "-", "/", "*"]
        for(const op of ops) {if(expression.includes(op)) return}
        expression = expression + '*'
    } else if (b === '/') {
        var ops = ["+", "-", "/", "*"]
        for(const op of ops) {if(expression.includes(op)) return}
        expression = expression + '/'
    } else {
        expression = expression + b
    }
    display.textContent = expression
}


var number1 = document.getElementById('button0');
number1.addEventListener('click', () => appendClickedButton('0'));

var number1 = document.getElementById('button1');
number1.addEventListener('click', () => appendClickedButton('1'));

var number2 = document.getElementById('button2');
number2.addEventListener('click', () => appendClickedButton('2'));

var number3 = document.getElementById('button3');
number3.addEventListener('click', () => appendClickedButton('3'));

var number4 = document.getElementById('button4');
number4.addEventListener('click', () => appendClickedButton('4'));

var number5 = document.getElementById('button5');
number5.addEventListener('click', () => appendClickedButton('5'));

var number6 = document.getElementById('button6');
number6.addEventListener('click', () => appendClickedButton('6'));

var number7 = document.getElementById('button7');
number7.addEventListener('click', () => appendClickedButton('7'));

var number8 = document.getElementById('button8');
number8.addEventListener('click', () => appendClickedButton('8'));

var number9 = document.getElementById('button9');
number9.addEventListener('click', () => appendClickedButton('9'));

var button_plus = document.getElementById('button_plus');
button_plus.addEventListener('click', () => appendClickedButton('+'));

var button_minus = document.getElementById('button_minus');
button_minus.addEventListener('click', () => appendClickedButton('-'));

var button_multiply = document.getElementById('button_multiply');
button_multiply.addEventListener('click', () => appendClickedButton('*'));

var button_divide = document.getElementById('button_divide');
button_divide.addEventListener('click', () => appendClickedButton('/'));

var button_equals = document.getElementById('button_equals');
button_equals.addEventListener('click', () => appendClickedButton('='));

var button_ac = document.getElementById('button_dot');
button_ac.addEventListener('click', () => appendClickedButton('.'));

var button_ac = document.getElementById('button_ac');
button_ac.addEventListener('click', () => appendClickedButton('ac'));

var button_del = document.getElementById('button_del');
button_del.addEventListener('click', () => appendClickedButton('del'));
