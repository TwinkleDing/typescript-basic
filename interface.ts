
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {
  size: 10,
  label: 'Size 10 Object'
};

printLabel(myObj);


interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare (config: SquareConfig): {color: string; area: number} {
  console.log(config)
  let newSquare = {color: 'white', area: 100};
  if(config.color) {
    newSquare.color = config. color;
  }
  if(config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

createSquare({color: 'black', coloru: 10});


class Greeter {
  name: string;
  sayHello() {
    console.log('hello' + this.name);
  }
}
let greeter = new Greeter();
greeter.name = 'ding'
greeter.sayHello();

interface Point {
  readonly x: number;
  readonly y: number
}

let p1: Point = {
  x: 10,
  y: 20
}
console.log('p1',p1)

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
console.log('ro',ro)

interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  console.log('result', result)
  return result > -1;
}
console.log('mySearch', mySearch('aaa', 'aa'))


interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log('myStr', myStr)


// interface clockInterface {
//   currentTime: Date;
//   setTime(d: Date);
// }
// class Clock implements clockInterface {
//   currentTime: Date;
//   setTime(d: Date) {
//     this.currentTime = d;
//     console.log(this.currentTime)
//   }
//   constructor(h: number, m: number) {
//     console.log(this.currentTime)
//     console.log(h)
//   }
// }
// let clock = new Clock(15, 58);
// clock.setTime(new Date())


interface ClockConstructor {
  new (hour: number, minute: number): clockInterface
}
interface clockInterface {
  tick()
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): clockInterface {
  console.log(1)
  return new ctor(hour, minute)
}
class DigitalClock implements clockInterface {
  constructor(h: number, m: number){
    console.log('h', h)
    console.log('m', m)
  }
  tick() {
    console.log('tick')
  }
}
class AnalogClock implements clockInterface {
  constructor(h: number, m: number) {
    console.log('h', h)
    console.log('m', m)
  }
  tick() {
    console.log('tick,tick')
  }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 12, 17);
console.log(new DigitalClock(12, 12))


interface Shape {
  color: string;
}
interface Square extends Shape {
  sideLength: number;
}
let square = <Square>{};
console.log('square', square)
square.color = 'blue';
square.sideLength = 10;
console.log('square', square)


interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function (start: number) {
    console.log(start)
  }
  counter.interval = 123;
  counter.reset = function() {
    console.log(12322)
  }
  return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5;


class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() {};
}
class TextBox extends Control {
  select() {};
}
// class Images implements SelectableControl {
//   select() {};
// }
// button he textbox 继承了control又私有属性，images是新的类，没有私有属性，但是又是必须的，就报错了

