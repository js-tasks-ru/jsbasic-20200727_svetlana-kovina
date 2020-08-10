/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let isMoneyOnList = salaries.John && salaries.Ann && salaries.Pete
  let number = isMoneyOnList ? salaries.John + salaries.Ann + salaries.Pete : 0;
  return number
}
