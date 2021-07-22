// input에 입력하면 화면에 나타난다.

const shopList = document.querySelector('.shopList')
const plusBtn = document.querySelector('.plusBtn')
const input = document.querySelector('input')
const deleteBtn = document.querySelector('.deleteBtn')




plusBtn.addEventListener('click', () => {
    const list = document.querySelector('#list')
    const li = document.createElement('li')
    const button = document.createElement('button')
    li.setAttribute('class', 'shopList'); // <li class = "title"></li>
    li.textContent = input.value; // <li class = "title">hello world</li>
    list.appendChild(li);

    button.setAttribute('class', 'deleteBtn');
    button.textContent = "button"
    li.appendChild(button);
    
});

deleteBtn.addEventListener('click', () => {
   const ul = document.querySelector('#list');
   const items = ul.getElementsByTagName('li');
   if(items.length > 0) {
       items[0].remove();
   }

})