export default class Attendee {
  id: number;
  role: string;
  salary: number;

  constructor(id: number, role: string, salary: number) {
    this.id = id;
    this.role = role;
    this.salary = salary;
  }
}
