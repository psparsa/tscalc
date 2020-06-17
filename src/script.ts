'use strict';

var wevalue: string = '';
var previousElem = document.querySelector('#Previous');
var currentElem = document.querySelector('#Current');

function set(EnterVal: string, wtf: string):void {
    if (wtf === 'add') {
        wevalue += `${EnterVal}`;
        currentElem.innerHTML += `${EnterVal}`;
    } else if (wtf === 'set') {
        wevalue = `${EnterVal}`;
        currentElem.innerHTML = `${EnterVal}`;
    }
}

function calculator():void {
    if (!wevalue.match('.+[\%\/\*\\-\+]$')) {
        set(eval(wevalue), 'set');
    }
}

function handlerKey(EnterVal: string):void {
    if (wevalue.length < 9) {
        set(EnterVal, 'add');
    }
}

function handlerOperator(EnterVal: string):void {
    if (wevalue.length < 8 && wevalue.length >= 1 && !wevalue.match('.+[\%\/\*\\-\+]$')) {
        set(EnterVal, 'add');
    }
}

function clean():void {
    set('', 'set');
}