class Person {
  constructor(name = 'anonymous', age = 0) { // the equals pertains to default values
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi I'm ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name,age,major) {
    super(name,age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if(this.hasMajor()) {
      return `${description} Major is ${this.major}.`;
    }
    else {
      return `${description} Major is undecided.`;
    }
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name,age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if(!!this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Student('Ashwin Nishad', 20, 'CS');
// console.log(me.hasMajor());
// console.log(me.getDescription());

const other = new Student();
// console.log(other.hasMajor());
// console.log(other.getDescription());

const jane = new Traveler('Jane Plaza', 25, 'Seattle');
console.log(jane.getGreeting());

const mark = new Traveler('Mark Weins', 28);
console.log(mark.getGreeting());
