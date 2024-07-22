export default function iterateThroughObject(reportWithIterator) {
  let employees = '';

  for (const [k, value] of reportWithIterator.entries()) {
    if (k !== reportWithIterator.length - 1) {
      employees += `${value} | `;
    } else {
      employees += value;
    }
  }

  return employees;
}
