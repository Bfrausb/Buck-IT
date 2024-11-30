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
  //li.textContent = text;
  //ul.appendChild(li);
//}

//function add(){
  //itemsArray.push(input.value);
  //localStorage.setItem('items', JSON.stringify(itemsArray));
  //addTask(input.value);
  //input.value = '';
//}

const info = [
  {
  username: 'username@user.com',
  password: 'password'}

  {
    username: 'username1@user.com',
    password: 'password1'
  }
  {
    username: 'username2@user.com',
    password: 'password2'
  }
  {
    username: 'username3@user.com',
    password: 'password3'
  }
]

function login(){
  var user = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  const inHouseUser = info.find(info => info.username === user && info.password === password);
  if(inHouseUser){
    window.location.href = "todolist.html"
  } else{
    alert('try again');
  }

}

//document.querySelector('#login').addEventListener('submit', function(e){
 //e.preventDefault();
 // login();
//})





