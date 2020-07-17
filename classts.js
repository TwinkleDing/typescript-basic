var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName, xxx) {
        this.name = theName;
        this.xxx = xxx;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('wang, wang');
    };
    return Dog;
}(Animal));
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name, xxx) {
        return _super.call(this, name, xxx) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log(this.name);
        console.log('Slithering...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name, xxx) {
        return _super.call(this, name, xxx) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log('Galloping');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake('Sammy the Python', 'sssss');
var tom = new Horse('Tommy the Palomino', 'sss');
sam.move();
// public 共有属性或方法，都可以使用
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    return Animal2;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, 'Rhino') || this;
    }
    return Rhino;
}(Animal2));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal2('goat');
var rhino = new Rhino();
var employee = new Employee('bob');
// private 私有属性或方法，不能再声明他的类的外部使用
// rhino 使用不到name属性
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Na = /** @class */ (function (_super) {
    __extends(Na, _super);
    function Na(name, department) {
        var _this = _super.call(this, name) || this;
        console.log(name);
        _this.department = department;
        return _this;
    }
    Na.prototype.getEvleationPitch = function () {
        return "hello, my name is " + this.name + " and i work in " + this.department + ".";
    };
    return Na;
}(Person));
var howard = new Na('howard', 'sales');
console.log(howard.getEvleationPitch());
// protected 不能再类外使用，但是可以通过子类的实例方法访问
// protected 可以修饰构造函数，但是使用了之后，无法实例化这个类，但是这个类可以被继承
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.theName = theName;
        this.numberOfLogs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dat = new Octopus('man with the 8 logs');
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
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculatDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.calculatDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculatDistanceFromOrigin({ x: 10, y: 10 }));
// static 静态方法或属性，不能在实例上调用，可以通过本身来调用
var Ani = /** @class */ (function () {
    function Ani() {
    }
    Ani.prototype.move = function () {
        console.log('roaming the earch...');
    };
    return Ani;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
        console.log(name);
    }
    Department.prototype.printName = function () {
        console.log('Department name:' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets earch Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generateing accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department; // 创建一个对抽象类型的引用
// department = new Department; // 错误，不能创建一个抽象类的实例
department = new AccountingDepartment; // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误，方法在声明的抽象类中不存在
// console.log(department.sss) // 错误
// abstract 抽象类作为其他派生类的基类来使用，它们一般不会被实例化。不用于接口，抽象类可以包含成员的实现细节
// 理解：如果是抽象类，必须声明构造函数且调用super()，子类调用的属性和方法，必须是在抽象类中存在。
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greeter = function () {
        return "hello, " + this.greeter;
    };
    return Greeter;
}());
var gree; // Greeter类的实例类类是Greeter
gree = new Greeter('world');
console.log(gree.greeter());
