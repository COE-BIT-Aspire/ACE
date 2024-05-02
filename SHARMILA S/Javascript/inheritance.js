class Employee {
    constructor(name, id, role) {
      this.name = name;
      this.id = id;
      this.role = role;
    }
    getInfo() {
      return `Name: ${this.name}, Id: ${this.id}, Role: ${this.role}`;
    }
  }

  class Engineer extends Employee {
    constructor(name, id, specialty) {
      super(name, id, "Engineer");
      this.specialty = specialty;
    }
  }

  class Manager extends Employee {
    constructor(name, id, department) {
      super(name, id, "Manager");
      this.department = department;
    }
  }
  
  // Creating instances of classes
  const softwareEngineer = new Engineer("Alice", 101, "Software");
  const salesManager = new Manager("Bob", 102, "Sales");

  console.log(softwareEngineer.getInfo()); 
  console.log(salesManager.getInfo()); 
  