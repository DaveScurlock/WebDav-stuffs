
let inputTitle = document.getElementById('title');
let inputDescription = document.getElementById('description');


let button = document.getElementById('addToDo');
let list = document.getElementById('listContentActual');

//control empty space

button.addEventListener('mousedown', function() {

    if (inputTitle.value === "" || inputDescription.value === "") {
        button.removeEventListener('mouseup', addEvent);
        document.getElementById('note').style.display = 'block';
    } else {
        button.addEventListener('mouseup', addEvent)
        document.getElementById('note').style.display = 'none';
    }
    })

//Button color on press

button.addEventListener('mousedown', function() {

    button.style.backgroundColor = 'midnightblue';
    button.style.color = 'lightgray';

})

button.addEventListener('mouseup', function() {

    button.style.backgroundColor = '';
    button.style.color = ''

})

// Add task to list

function addEvent() {
    let title = inputTitle.value;
    let description = inputDescription.value;
    
   
    let paragraph = document.createElement('li');
    
    
    paragraph.innerText = `${title} - ${description}`;
     
    
    listContentActual.appendChild(paragraph);
    inputTitle.value = "";
    inputDescription.value = "";
}


          
    