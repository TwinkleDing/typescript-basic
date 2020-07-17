"use strict";
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + middleInitial + lastName;
    }
}
;
function greeter(person) {
    console.log(user);
    return 'hello,' + person.firstName + person.lastName;
}
;
let user = new Student('Jane', 'M', 'User');
document.body.innerHTML = greeter(user);
