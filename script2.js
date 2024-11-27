//const ul = document.querySelector('ul');
//const input = document.getElementById('item');
//let itemsArray = localStorage.getItem('items') ?
//JSON.parse(localStorage.getItem('items')) : [];

// const task = input.value;
// if(!task){
//     alert("Please enter a bucket list item");
//     return;
// }

//itemsArray.forEach(addTask);
//function addTask(text){
  //const li = document.createElement('li')
 // li.textContent = text;
  //ul.appendChild(li);


//function add(){
  //itemsArray.push(input.value);
  //localStorage.setItem('items', JSON.stringify(itemsArray));
 // addTask(input.value);
 // input.value = '';


 const todoContainer = document.querySelector('.to-do-container');
 const businessBttn = document.querySelector('#business');
 const personalBttn = document.querySelector('#personal');
 let toDo = document.querySelectorAll('.input');
 
 businessBttn.addEventListener("click", ()=>{
     let input = document.createElement("p");
     input.className = "input";
     input.setAttribute('contenteditable', 'true');
     input.setAttribute('style', 'background ');
     todoContainer.appendChild(input);
 })
 
 personalBttn.addEventListener('click', ()=>{
     let input = document.createElement("p");
     input.className = 'input';
     input.setAttribute('contenteditable', 'true');
     todoContainer.appendChild(input);
 } )
 