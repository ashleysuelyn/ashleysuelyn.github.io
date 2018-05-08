
const myToDoList = document.getElementById('toDoList');


function myShitToDo() {

    var x = document.getElementById("myText").value;
    var y = document.createElement("INPUT");
    y.setAttribute("type", "checkbox");


    if (x != "") { 
	const newListItem = document.createElement('li');
	console.log(newListItem);
    newListItem.innerHTML = x;
    console.log(myToDoList);
    myToDoList.appendChild(newListItem);
    // myToDoList.appendChild(y);
   	// document.getElementById('myText').value = "";
   }
   else {
	confirm("You don't have shit to do?");
   }
  }

  myToDoList.onclick = function(event) {
    const deleteButton = event.target.remove();
    }

  function myEnter() {
    if(event.keyCode == 13) {
      myShitToDo();
    }
    else {}

  }
function makeSure() {
  document.getElementById('myText').value = "";
}


  function myEraser() {
    const myToDoList = document.getElementById('toDoList');
    if (confirm("Are you sure you want to clear list?")) {
      myToDoList.innerHTML = "";
    }
}

function myFunction() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    document.body.appendChild(x);
}

