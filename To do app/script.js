
let inputField = document.getElementById('title');
let button = document.getElementById('addToDo')
let list = document.getElementById('listContent')

button.addEventListener('click', function() {

    let paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    list.appendChild(paragraph);
    inputField.value = ""

})


          
    