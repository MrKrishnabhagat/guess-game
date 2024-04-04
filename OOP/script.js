'use strict';
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   //never do this
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jonas = new Person('jonas', 1991);

// // //1.new {} is created
// // //2.function is called ,this={}
// // //3.{} linked to prototype
// // //4.function automatically return {}

// // const matilda = new Person('matilda', 2017);
// // // console.log(matilda instanceof Person);

// // //prototype

// // Person.prototype.calcAge = function () {
// //   console.log(2037 - this.birthYear);
// // };
// // console.log(jonas.__proto__ === Person.prototype);
// // console.log(Person.prototype.isPrototypeOf(jonas));

// //.prototypeOfLinkedObjects
// // Person.prototype.species = 'Homo Sapiens';
// // console.dir(Person.prototype.constructor);
// // const arr = [3, 4, 5, 6, 7, 8, 9];
// // console.log(arr.__proto__ === Array.prototype);
// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };
// // console.log(arr.unique());
// // console.log(Array.prototype);

// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };
// // Car.prototype.decrease = function () {
// //   this.speed -= 5;
// //   console.log(this.speed);
// // };
// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(this.speed);
// // };
// // const bmw = new Car('bmw', 120);
// // const mercedes = new Car('mercedes', 95);
// // bmw.decrease();
// // bmw.accelerate();
// // bmw.accelerate();

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   static hey() {
//     console.log('fvgbhnj');
//     console.log(this);
//   }
// }
// const jessica = new PersonCl('jess', 1996);
// console.log(jessica.__proto__);
// // class are not hoisted
// const account = {
//   owner: 'jonas',
//   movements: [123, 456, 78, 54],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(jonas instanceof Person);
// // Person.hey = function () {
// //   console.log('gvbjhb');
// // };
// // Person.hey();
// // jonas.hey();
// PersonCl.hey();
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'steven';
// steven.birthYear = 2002;
// steven.calcAge();
// const sarah = Object.create(PersonProto);
// sarah.init('sarah', 2024);
// sarah.calcAge();
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const ford = new Car('ford', 120);
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   //never do this
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// const student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// //linking prototype
// student.prototype = Object.create(Person.prototype);
// student.prototype.introduce = function () {
//   console.log(`my name is ${this.firstName},i study${this.course}`);
// };
// const mike = new student('mike', 2020, 'computer science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();
// console.log(mike.__proto__.__proto__);
// student.prototype.constructor = student;
// console.dir(student.prototype.constructor);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(`${this.make}   ${this.speed}    ${this.charge}`);
// };
// const tesla = new EV('tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   static hey() {
//     console.log('fvgbhnj');
//     console.log(this);
//   }
// }
// class student extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //    always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`my name is ${this.firstName},i study${this.course}`);
//   }
// }
// const martha = new student('martha', 2012, 'cs');
// martha.introduce();
// martha.calcAge();
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// const studentProto = Object.create(PersonProto);

// studentProto.init = function (firstname, birthYear, course) {
//   PersonProto.init.call(this, firstname, birthYear);
//   studentProto.introduce = function () {
//     console.log(`my name is ${this.firstName},i study${this.course}`);
//   };
// };
// const jay = Object.create(studentProto);
// jay.init('jay', 2010, 'cs');
// jay.introduce();
// jay.calcAge();

///public Fields
//public fields
//public methods
//private methods

// class Account {
//   //public fields //these are on instances
//   locale = navigator.language;

//   //private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     //protected property
//     // this._movements = [];
//     // this.locale = navigator.language;
//     console.log(`thanks for opening account ${this.owner}`);
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log('loan Approved');
//       return this;
//     }
//   }
//   getMovements() {
//     return this.#movements;
//   }
//   //private method
//   #approveLoan(val) {
//     return true;
//   }
// }
// const acc1 = new Account('jonas', 'eur', 1111);

// acc1.deposit(250);
// acc1.withdraw(140);
// console.log(acc1);
// console.log(acc1.getMovements());
// // console.log(acc1.#pin);
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(`${this.make}   ${this.speed}    ${this.#charge}`);
    return this;
  }
}
const rivian = new EVCl('rivian', 120, 23);
rivian.brake().accelerate();

console.log(rivian.speedUS);
