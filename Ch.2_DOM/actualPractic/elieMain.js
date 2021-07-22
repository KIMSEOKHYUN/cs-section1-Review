const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button')


function onAdd() {
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }
    //1. 사용자가 입력한 텍스트를 받아온다.
    //2. 새로운 아이템을 만든다(텍스트 + 삭제버튼)
    const item = createItem(text);
    //3. items 컨테이너안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    item.scrollIntoView({ block: 'center'});
    //4. 새로 추가된 아이템으로 스크롤링
    //5. 인풋을 초기화 한다.
    input.value = '';
    input.focus();
   


}


function createItem(text) {

    const itemRow = document.createElement('li'); // 요소만들기
    itemRow.setAttribute('class', 'item_row'); // 만든 요소 클래스 설정
    
    const item = document.createElement('div'); 
    item.setAttribute('class', 'item');

    const itemName = document.createElement('span'); 
    itemName.setAttribute('class', 'item_name');
    itemName.innerText = text; // 받아온 텍스트를 화면에 표시

    const deleteBtn = document.createElement('button'); // 요소만들기
    deleteBtn.setAttribute('class', 'item_delete');
    deleteBtn.innerHTML = '<ion-icon name="archive"></ion-icon>'; // 받아온 이미지 정적으로 계속 활용
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);

    }) // delete버튼 클릭했을때 items에서 itemRow 제거


    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item_divider');

    item.appendChild(itemName);
    item.appendChild(deleteBtn);
    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;

}



addBtn.addEventListener('click', () => {
    onAdd();
})

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        onAdd();
    }
});