import AddService from './services/AddService.js'
import SubService from './services/SubService.js'
import MultService from './services/MultService.js'
import DivService from './services/DivService.js'

var arg1 = '';
var arg2 = '';
var op = '';
var clickedEquals = false;
var display = document.getElementById('display');
display.textContent = '';

var clientId = '';

function addToHistory(prev, count) {
    var ul = document.getElementById('calculation_list');
    var li;
    const split = prev.split(',');
    ul.innerHTML = "";
    for (const op in split){
        li = document.createElement('li');
        li.appendChild(document.createTextNode(split[op]));
        ul.appendChild(li);
    }
    if(count !== null && count > 5) {
        li = document.createElement('li');
        count = count - 5;
        var others = "and " + count.toString() + " more..."; 
        li.appendChild(document.createTextNode(others));
        ul.appendChild(li);
	localStorage.setItem('count', count + 5);
    }
    localStorage.setItem('prev', prev);
}

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

function processId(){
    clientId = localStorage.getItem('uuid'); 
    if(clientId === null){
        clientId = uuid(); 
        localStorage.setItem('uuid', clientId)
    }
    
}


async function appendClickedButton(b) {
    if (b === 'del') {
        if (arg2 !== '') {
            arg2 = arg2.slice(0, -1)
        } else if (op !== '') {
            op = op.slice(0, -1)
        } else {
            arg1 = arg1.slice(0, -1)
        }

        clickedEquals = false;

    } else if(b === 'ac') {
        arg1 = ''
        arg2 = ''
        op = ''

        clickedEquals = false;

    } else if (b === '='){
        var ops = ["+", "-", "/", "*"]
        if (!ops.includes(op) || arg2 === '') { return }

        processId();
        switch (op) {
            case '+':
                var response = await AddService.getAddResult(arg1, arg2, clientId);
                break;
            case '-':
                var response = await SubService.getSubResult(arg1, arg2, clientId);
                break;
            case '*':
                var response = await MultService.getMultResult(arg1, arg2, clientId);
                break;
            case '/':
                var response = await DivService.getDivResult(arg1, arg2, clientId);
                break;
            default:
                break;
        }

        console.log("[+] Client ID: " + response.data.clientId)
        console.log("[+] Previous operation(s): " + response.data.prev)
        console.log("[+] Count(s): " + response.data.count.toString())


        var result = response.data.result.toString()

        addToHistory(response.data.prev, response.data.count)    // prev with redis

        arg1 = result
        arg2 = ''
        op = ''
        clickedEquals = true

    } else if (b === '+') {
        var ops = ["+", "-", "/", "*"]
        if (ops.includes(op) || arg1 === '' || arg1 === '-') { return }

        op = '+'
        clickedEquals = false

    } else if (b === '-') {
        var ops = ["+", "-", "/", "*"]

        if (arg1 === '') { arg1 = arg1 + '-' }
        else if (arg2 === '' && ops.includes(op)) {   // previous char was op
            arg2 = arg2 + '-'
        } else {
            if (ops.includes(op) || arg1 === '-') { return }
            op = '-'
        }

        clickedEquals = false

    } else if (b === '*') {
        var ops = ["+", "-", "/", "*"]
        if (ops.includes(op) || arg1 === '' || arg1 === '-') { return }

        op = '*'
        clickedEquals = false

    } else if (b === '/') {
        var ops = ["+", "-", "/", "*"]
        if (ops.includes(op) || arg1 === '' || arg1 === '-') { return }

        op = '/'
        clickedEquals = false

    } else {
        if (clickedEquals) {
            arg1 = '' + b
            clickedEquals = false

        } else {
            var ops = ["+", "-", "/", "*"]
            if (ops.includes(op)) {
                arg2 = arg2 + b
            } else {
                arg1 = arg1 + b
            }
        }
    }

    display.textContent = arg1 + op + arg2
}


window.addEventListener('load', (event) => {
  if (localStorage.getItem('prev') !== null){
 	addToHistory(localStorage.getItem('prev'), localStorage.getItem('count'));       
  }
});


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
