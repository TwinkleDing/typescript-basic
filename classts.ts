
class Animal {
  public name: string;
  private xxx: string;
  public constructor(theName: string, xxx: string) {
    this.name = theName;
    this.xxx = xxx;
  }
  public move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Dog extends Animal {
  bark() {
    console.log('wang, wang');
  }
}
class Snake extends Animal {
  constructor(name: string, xxx: string) {
    super(name, xxx);
  }
  move(distanceInMeters = 5) {
    console.log(this.name)
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}
class Horse extends Animal {
  constructor(name: string, xxx: string) {
    super(name, xxx);
  }
  move(distanceInMeters = 45) {
    console.log('Galloping');
    super.move(distanceInMeters)
  }
}
let sam = new Snake('Sammy the Python','sssss')
let tom: Animal = new Horse('Tommy the Palomino', 'sss')
sam.move()
// public 共有属性或方法，都可以使用

class Animal2 {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal2 {
  constructor() {
    super('Rhino');
  }
}
class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
let animal = new Animal2('goat');
let rhino = new Rhino();
let employee = new Employee('bob');
// private 私有属性或方法，不能再声明他的类的外部使用
// rhino 使用不到name属性

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Na extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name)
    console.log(name)
    this.department = department
  }
  public getEvleationPitch() {
    return `hello, my name is ${this.name} and i work in ${this.department}.`
  }
}
let howard = new Na('howard', 'sales')
console.log(howard.getEvleationPitch())
// protected 不能再类外使用，但是可以通过子类的实例方法访问
// protected 可以修饰构造函数，但是使用了之后，无法实例化这个类，但是这个类可以被继承


class Octopus {
  readonly name: string;
  readonly numberOfLogs: number = 8;
  constructor(readonly theName: string) {
    this.name = theName;
  }
}
let dat = new Octopus('man with the 8 logs')
// readonly 只读不可修改


// let passcode = 'secrest passcode'
// class Em {
//   private _fullName: string;
//   get fullName(): string {
//     return this._fullName;
//   }
//   set fullName(newName: string) {
//     if(passcode && passcode === 'secret passcode') {
//       this._fullName = newName;
//     }else {
//       console.log('error: unauthorized update of em')
//     }
//   }
// }
// let em = new Em();
// em.fullName = 'bob smith'
// if(em.fullName) {
//   console.log(em.fullName)
// }
// 截取getter和setter方法


class Grid {
  static origin = {x: 0, y: 0};
  calculatDistanceFromOrigin(point: {x: number, y: number}) {
    let xDist = (point.x - Grid.origin.x)
    let yDist = (point.y - Grid.origin.y)
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {

  }
}
let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)
console.log(grid1.calculatDistanceFromOrigin({x: 10, y: 10}))
console.log(grid2.calculatDistanceFromOrigin({x: 10, y: 10}))
// static 静态方法或属性，不能在实例上调用，可以通过本身来调用


abstract class Ani {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming the earch...')
  }
}

abstract class Department {
  constructor(public name: string) {
    console.log(name)
  }
  printName(): void{
    console.log('Department name:' + this.name)
  }
  abstract printMeeting(): void; // 必须在派生类中实现
}
class AccountingDepartment extends Department {
  sss: string;
  constructor() {
    super('Accounting and Auditing')
  }
  printMeeting(): void {
    console.log('The Accounting Department meets earch Monday at 10am.')
  }
  generateReports(): void {
    console.log('Generateing accounting reports...')
  }
}
let department: Department; // 创建一个对抽象类型的引用
// department = new Department; // 错误，不能创建一个抽象类的实例
department = new AccountingDepartment; // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误，方法在声明的抽象类中不存在
// console.log(department.sss) // 错误

// abstract 抽象类作为其他派生类的基类来使用，它们一般不会被实例化。不用于接口，抽象类可以包含成员的实现细节
// 理解：如果是抽象类，必须声明构造函数且调用super()，子类调用的属性和方法，必须是在抽象类中存在。


class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greeter() {
    return `hello, ${this.greeter}`;
  }
}
let gree: Greeter; // Greeter类的实例类类是Greeter
gree = new Greeter('world');
console.log(gree.greeter())