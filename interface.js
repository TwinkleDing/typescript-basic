"use strict";
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let myObj = {
    size: 10,
    label: 'Size 10 Object'
};
printLabel(myObj);
function createSquare(config) {
    console.log(config);
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
createSquare({ color: 'black', coloru: 10 });
class Greeter {
    sayHello() {
        console.log('hello' + this.name);
    }
}
let greeter = new Greeter();
greeter.name = 'ding';
greeter.sayHello();
let p1 = {
    x: 10,
    y: 20
};
console.log('p1', p1);
let a = [1, 2, 3, 4];
let ro = a;
console.log('ro', ro);
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    console.log('result', result);
    return result > -1;
};
console.log('mySearch', mySearch('aaa', 'aa'));
let myArray;
myArray = ["Bob", "Fred"];
let myStr = myArray[0];
console.log('myStr', myStr);
function createClock(ctor, hour, minute) {
    console.log(1);
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) {
        console.log('h', h);
        console.log('m', m);
    }
    tick() {
        console.log('tick');
    }
}
class AnalogClock {
    constructor(h, m) {
        console.log('h', h);
        console.log('m', m);
    }
    tick() {
        console.log('tick,tick');
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 12, 17);
console.log(new DigitalClock(12, 12));
let square = {};
console.log('square', square);
square.color = 'blue';
square.sideLength = 10;
console.log('square', square);
function getCounter() {
    let counter = function (start) {
        console.log(start);
    };
    counter.interval = 123;
    counter.reset = function () {
        console.log(12322);
    };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5;
class Control {
}
class Button extends Control {
    select() { }
    ;
}
class TextBox extends Control {
    select() { }
    ;
}
// class Images implements SelectableControl {
//   select() {};
// }
// button he textbox 继承了control又私有属性，images是新的类，没有私有属性，但是又是必须的，就报错了
