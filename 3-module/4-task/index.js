/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let infoAboutSalaty=[];
  let isValidAge = users.filter(x => x.age <= age)
  if (isValidAge.length > 0) {
    isValidAge.forEach(user=>{
        let personBalance = user.balance
        let userName = user.name
        infoAboutSalaty.push(userName + ',' + ' ' + personBalance)
    });
  }
  
  return infoAboutSalaty.join('\n')
}
