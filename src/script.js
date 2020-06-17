'use strict';
var wevalue = '';
var previousElem = document.querySelector('#Previous');
var currentElem = document.querySelector('#Current');
function set(EnterVal, wtf) {
    if (wtf === 'add') {
        wevalue += "" + EnterVal;
        currentElem.innerHTML += "" + EnterVal;
    }
    else if (wtf === 'set') {
        wevalue = "" + EnterVal;
        currentElem.innerHTML = "" + EnterVal;
    }
}
function calculator() {
    if (!wevalue.match('.+[\%\/\*\\-\+]$')) {
        set(eval(wevalue), 'set');
    }
}
function handlerKey(EnterVal) {
    if (wevalue.length < 9) {
        set(EnterVal, 'add');
    }
}
function handlerOperator(EnterVal) {
    if (wevalue.length < 9 && wevalue.length >= 1 && !wevalue.match('.+[\%\/\*\\-\+]$')) {
        set(EnterVal, 'add');
    }
}
function clean() {
    set('', 'set');
}
//# sourceMappingURL=script.js.map