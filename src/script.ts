'use strict';

var wevalue: string = '';
var previousElem: any = document.querySelector('#Previous');
var currentElem: any = document.querySelector('#Current');

function set(EnterVal: string, wtf: string) {
    if (wtf === 'add') {
        wevalue += `${EnterVal}`;
        currentElem.innerHTML += `${EnterVal}`;
    } else if (wtf === 'set') {
        wevalue = `${EnterVal}`;
        currentElem.innerHTML = `${EnterVal}`;
    }
}

function calculator() {
    if (!wevalue.match('.+[\%\/\*\\-\+]$')) {
        set(eval(wevalue), 'set');
    }
}

function handlerKey(EnterVal: string) {
    if (wevalue.length < 9) {
        set(EnterVal, 'add');
    }
}

function handlerOperator(EnterVal: string) {
    if (wevalue.length < 9 && wevalue.length >= 1 && !wevalue.match('.+[\%\/\*\\-\+]$')) {
        set(EnterVal, 'add');
    }
}

function clean() {
    set('', 'set');
}