interface Employee {
  getSalary(): number;
  getName(): string;
  getRole(): string;
}

class Developer implements Employee {
  constructor(private name: string, private salary: number) {}
  public getName(): string {
    return this.name;
  }
  public getSalary(): number {
    return this.salary;
  }
  public getRole(): string {
    return "Developer";
  }
}

class Designer implements Employee {
  constructor(private name: string, private salary: number) {}
  public getName(): string {
    return this.name;
  }
  public getSalary(): number {
    return this.salary;
  }
  public getRole(): string {
    return "Designer";
  }
}

interface CompositeEmployee extends Employee {
  addEmployee(employee: Employee): void;
  removeEmployee(employee: Employee): void;
  getEmployees(): Employee[];
}

class Manager implements CompositeEmployee {
  constructor(
    private name: string,
    private salary: number,
    private employees: Employee[]
  ) {}

  public getName(): string {
    return this.name;
  }

  public getRole(): string {
    return "Manager";
  }

  public getSalary(): number {
    return this.salary;
  }

  public addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }
  public removeEmployee(employee: Employee): void {
    const idx = this.employees.indexOf(employee);
    idx !== -1 && this.employees.splice(idx, 1);
  }
  public getEmployees(): Employee[] {
    console.log(`Manager ${this.name} manages : `);
    this.employees.forEach((employee: Employee) => {
      console.log(`${employee.getRole()} : ${employee.getName()}`);
    });
    return this.employees;
  }
}

export {Designer,Developer,Manager}