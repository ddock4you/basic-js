//DATE로 ID값 적용 전에 사용한 ID 생성 변수값
//var totalItems = 0;

function mouseout() {
    var pencilIconId = this.id.replace('li_', '');
    console.log(pencilIconId);
    var pencilIcon = document.getElementById('pencilIcon_' + pencilIconId);
    var trashIcon = document.getElementById('trash_' + pencilIconId);

    pencilIcon.style.visibility = 'hidden';
    trashIcon.style.visibility = 'hidden';
}

function mouseover() {
    var pencilIconId = this.id.replace('li_', '');
    console.log(pencilIconId);
    var pencilIcon = document.getElementById('pencilIcon_' + pencilIconId);
    var trashIcon = document.getElementById('trash_' + pencilIconId);
    
    pencilIcon.style.visibility = 'visible';
    trashIcon.style.visibility = 'visible';
}


var donelist = document.getElementById('donelist');

function moveItem() {
    var listItemId = this.id.replace('li_', '');
    var listItem = document.getElementById('li_' + listItemId);
    var listItemParentId = listItem.parentElement;

    //기존에 있는 태그를 appendChild하면 복사되는 게 아닌 요청한 위치로 이동됨.
    if(listItemParentId == donelist) {
        todolist.appendChild(listItem);
    } else {
        donelist.appendChild(listItem);
    }
}


function  removeItem() {
    var listItemId = this.id.replace('trash_','');
    var list = document.getElementById('li_' + listItemId);
    list.style.display = 'none';
}


function renameItem() {
    var newText = prompt('바꾸고 싶은 텍스트 내용을 입력하세요.');
    if(!newText || newText === '' || newText === ' ') {
        alert('값이 유효하지 않습니다. 다시 입력해주세요.');
        return false;
    } else {
        //this와 같은 ID값을 가진 span에 입력한 내용을 저장
        var spanId = this.id.replace('pencilIcon_', '');
        var span = document.getElementById('item_' + spanId);
        span.innerText = newText;
    }
}

function updateItemStatus() {
    //replace메서드 : 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환합니다.
    var chId = this.id.replace('cb_', '');
    console.log(chId)
    var itemText = document.getElementById('item_' + chId);

    if(this.checked) {
        itemText.className = 'checked';
    } else {
        itemText.className = '';
    }
}


function addNewItem(list, itemText) {
    var date = new Date();
// ''를 붙인 이유 : 값을 string으로 인식하게 하여 더 큰 수를 만들기 위해 사용
var id = '' + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    var listItem = document.createElement('li');
    listItem.id = 'li_' + id;
    listItem.ondblclick = moveItem;
    
    var checkbox = document.createElement('input');
    //listItem.innerText = itemText;
    checkbox.type = 'checkbox';
    checkbox.id = 'cb_' + id;
    checkbox.onclick = updateItemStatus;
    
    var span = document.createElement('span');
    span.id = 'item_' + id;
    span.innerText = itemText;
    span.onclick = renameItem;

    var pencilIcon = document.createElement('i');
    pencilIcon.className = 'fas fa-pencil-alt';
    pencilIcon.id = 'pencilIcon_' + id;
    pencilIcon.onclick = renameItem;

    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'far fa-trash-alt';
    deleteIcon.id = 'trash_' + id;
    deleteIcon.onclick = removeItem;

    listItem.appendChild(span);
    listItem.appendChild(checkbox);
    listItem.appendChild(pencilIcon);
    listItem.appendChild(deleteIcon);
    list.appendChild(listItem);

    listItem.addEventListener('mouseover', mouseover);
    listItem.addEventListener('mouseout', mouseout);
    //DATE로 ID값 적용 전에 사용한 ID 생성 변수값
    //totalItems++;
}

//New Item 버튼 누르면 addMewItem 함수 실행
//var btnNew = document.getElementById('btnAdd');
var inputText = document.getElementById('inputText');

//onkeyup 메소드 = 키를 눌렀다 땔 때 이벤트 핸들러 반환
inputText.onkeyup = function(e) {
    //.which 프로퍼티는 익스에선 IE9 이상에서 사용 가능
    //.keyCode 프로퍼티는 파이어폭스에서 인식못하는 이슈가 있음.
    //익스, 파이어폭스에서 키값을 받아오기 위해 keyCode, which 프로퍼티를 모두 사용한다.
    var pressKey = e.keyCode || e.which;
    console.log(pressKey)
    if(pressKey === 13) {
        var itemText = inputText.value;

        if(!itemText || itemText === '' || itemText === ' ') {
            alert('값이 유효하지 않습니다. 다시 입력해주세요.');
            return false;
        }

        addNewItem(document.getElementById('todolist'), itemText);

        //inputText.focus();
        inputText.select();
    }
};