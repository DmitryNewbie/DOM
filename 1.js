"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и
вывести этот элемент в консоль.
*/
const supreLink = document.getElementById("super_link");
console.log(supreLink);
/*
2. Внутри всех элементов на странице, которые имеют класс "card-link",
поменяйте текст внутри элемента на "ссылка".
*/
let cardLink = document.querySelector(".card-link");
cardLink.textContent = "ссылка";

/*
3. Найти все элементы на странице с классом "card-link", которые лежат в
элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/
 const cardLink2 = document.querySelectorAll('.card-body > .card-link');
 console.log(cardLink2);

/*
4. Найти первый попавшийся элемент на странице у которого есть атрибут
data-number со значением 50 и вывести его в консоль.
*/
const dateElm = document.querySelector('[data-number =  "50"]');
console.log(dateElm);
/*
5. Выведите содержимое title страницы в консоль.
*/
 console.log(document.title);
/*
6. Получите элемент с классом "card-title" и выведите его родительский узел
в консоль.
*/
const cardTitleElm = document.querySelector('.card-title');
console.log(cardTitleElm.parentNode);
/*
7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс "card".
*/
const pElm = document.createElement("p");
pElm.textContent = "Привет";
const cardElm = document.querySelector('.card');
cardElm.append(pElm);
/*
8. Удалите тег h6 на странице.
*/
const h6Elm = document.querySelector('h6');
h6Elm.remove();