export default function createIteratorObject(report) {
  const employeeList = [];

  for (const [department, employees] of Object.entries(report.allEmployees)) {
    for (const employee of employees) {
      employeeList.push(employee);
    }
  }

  return employeeList;
}
