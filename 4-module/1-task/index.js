/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
  let ul = document.createElement('ul'); 
  let a = [];  
  let info = friends.forEach(l => {
    a.push('<li>' +  l.firstName + " " + l.lastName + '</li>');
  });
 ul.innerHTML = a;
  return ul;
} 
