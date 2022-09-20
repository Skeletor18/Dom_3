const function_1 = () => {
  const h1 = document.createElement("h1");
  h1.textContent = "Работа с DOM";
  document.body.prepend(h1);
};
function_1();

const function_2 = () => {
  const a = document.createElement("a");
  a.href = "https://ru.wikipedia.org/wiki/Document_Object_Model";
  a.textContent = "Статья на Dom";
  const div = document.querySelector("#main");
  div.append(a);
};
function_2();

const function_3 = (color) => {
  document.body.style.backgroundColor = color;
};
function_3("grey");

const function_4 = (text) => {
  const li = document.createElement('li')
  li.textContent = text
  
  const ul = document.querySelector('#list')
  ul.append(li)
}
function_4('JS')

const function_5 = () => {
    const elem = document.querySelector('#copyright')
    elem.remove(elem)
}
function_5()

console.log(document.body);
