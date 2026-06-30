
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}


class Developer extends Employee {
  constructor(name, salary, programmingLanguage) {
    super(name, salary);
    this.programmingLanguage = programmingLanguage;
  }

  writeCode() {
    console.log(`${this.name} is coding in ${this.programmingLanguage}`);
  }
}

const developer = new Developer("Piyush", 60000, "JavaScript");

developer.work();
developer.writeCode();
developer.name();