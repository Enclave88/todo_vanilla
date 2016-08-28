'use strict';
var list = [];
function addItem() {
    //debugger;
    var item = document.getElementById('item'),
        para = document.createElement('p'),
        newItem = document.createTextNode(item.value);
    /*либо массив не нужен, либо удаление элементов будет из двух мест (массива и para)*/
    list.push(para);
    //Array.from(newItem);


    //para.setAttribute("id", "id1" + 1);

    if(item.value) {
        para.appendChild(newItem);
        document.getElementById('checklist').appendChild(para);
        for (var i = 0; i < para.length; i++) {
            para[i].id = 'id' + i;
        }
        para.setAttribute("id", para[i]);
    }

    item.value = null;

}

function enterKeyInput() {
    if(event.keyCode === 13) {
        addItem();
    }
}

function deleteItem() {
    var parent = document.getElementById('checklist'),
        child = document.getElementById('id11');
    parent.removeChild(child);
}

function clearInput() {
    document.getElementById('item').value = null;
}