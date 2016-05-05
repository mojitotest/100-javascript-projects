var form      = document.getElementById('todo-form');
var toDoList  = document.getElementById('todo-items');
var newToDo   = document.getElementById('todo-add-new');

var addToDo = function() {
  var txt       = document.createTextNode(newToDo.value);
  var item      = document.createElement("li");
  
  item.appendChild(txt);
  toDoList.appendChild(item);
};


document.getElementById('btn-submit').addEventListener(
  'click', 
  function(event){
    event.stopPropagation;
    addToDo();
  },
  false
);
