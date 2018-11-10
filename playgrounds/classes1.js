class Person {
  constructor(name = 'anonymous', age = 0) { // the equals pertains to default values
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi ${this.name}!`;
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

const me = new Student('Ashwin Nishad', 20, 'CS');
console.log(me.hasMajor());
console.log(me.getDescription());

const other = new Student();
console.log(other.hasMajor());
console.log(other.getDescription());
