export default class Attendee {
  id: string;
  role: string;
  salary: number;

  constructor(role: string, salary: number) {
    this.role = role;
    this.salary = salary;
  }
}
