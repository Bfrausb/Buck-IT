
const businessBttn = document.querySelector('#business');
const personalBttn = document.querySelector('#personal');
const schoolBttn = document.querySelector('#school');
const toDoBttn = document.querySelector('#to-do');
const help = document.querySelector('#help');
const modal = document.getElementById('modal-dialog modal-dialog-scrollable');
let todoContainer = document.getElementById('modal');



// The added event listener for each declared button gives the button the code to run when the user 'clicks' on it.

// We created a text area using the inner HTML property and styled it according to its specific button using the previously declared root variables in our linked stylesheet

// We then appended the newly created sticky note to our parent container to be manipulated later on



businessBttn.addEventListener('click', () => {
  let newSticky = document.createElement('div');
  newSticky.classList.add('sticky-note');
  newSticky.innerHTML = 
  '<span class="close">X</span> <textarea placeholder="start typing..." rows="10" cols="30"></textarea></>';
  newSticky.style.background = 'var(--business)';
  todoContainer.appendChild(newSticky);


  })

  schoolBttn.addEventListener('click', () => {
    let newSticky = document.createElement('div');
    newSticky.classList.add('sticky-note');
    newSticky.innerHTML = 
    '<span class="close">X</span> <textarea placeholder="start typing..." rows="10" cols="30"></textarea></>';
    newSticky.style.background = 'var(--school)';
    todoContainer.appendChild(newSticky);
  
  
    })


personalBttn.addEventListener('click', () => {
  let newSticky = document.createElement('div');
  newSticky.classList.add('sticky-note');
  newSticky.innerHTML = 
  '<span class="close">X</span> <textarea placeholder="start typing..." rows="10" cols="30"></textarea></>';
  newSticky.style.background = 'var(--personal)';
  todoContainer.appendChild(newSticky);


  })

  toDoBttn.addEventListener('click', () => {
    let newSticky = document.createElement('div');
    newSticky.classList.add('sticky-note');
    newSticky.innerHTML = 
    '<span class="close">X</span> <textarea placeholder="start typing..." rows="10" cols="30"></textarea><p><u></u></p>';
    newSticky.style.background = 'var(--to-do)';
    newSticky.style.cursor = 'cursor';
    todoContainer.appendChild(newSticky);
  
  
    })

    help.addEventListener('click', ()=>{
      modal.show();
    })


// Here we added an on click event listener with a conditional statement. 
    // If the targeted element contains an item with the class of 'close', remove the targeted element. 


  document.addEventListener('click', (event) => {
    if (event.target.classList.contains("close")){
      event.target.parentNode.remove();
    }
  })

  // Below is the logic for the 'drag and drop' functionality


// These set the initial variables for the cursor and the sticky notes on the x and y axis to null

  // Declaring these as 'let' allows them to be manipulated later on


  let cursor = {
    x: null,
    y: null
  }
  let sticky = {
    dom: null,
    x: null,
    y: null
  }
// When the user clicks on the sticky note the function below fires


  document.addEventListener('mousedown', (event) => {

    //this conditional is targeting the class of 'sticky-note' and reassigning the variables 

    if(event.target.classList.contains('sticky-note')){
      cursor = {
        x: event.clientX,
        y: event.clientY
      }
      //Below uses the 'getBoundingClientRect' function to determine the location variable of the targeted sticky note on the x and y axis

      sticky = {
        dom: event.target,
        x: event.target.getBoundingClientRect().left,
        y: event.target.getBoundingClientRect().top
      }
    }
  })

// Below is the logic to move the selected element 

// The conditional statement says if nothing else is clicked on, then return out of the function (Line 122)

// Establishing current cursor and distance allows us to fluidly reset the location on the x and y axis (Line 123-125)

// We calculate distance by subtracting the coordinates from the previous function and the newly defined 'current cursor' variable (Line 127-129)

  document.addEventListener('mousemove', (event) => {
    if(sticky.dom == null) return;
    let currentcursor = {
      x: event.clientX,
      y: event.clientY
    }
    let distance = {
      x: currentcursor.x - cursor.x,
      y: currentcursor.y - cursor.y
    }

// Including 'px' gives css the ability to register our style changes while we move the selected element across the page

    sticky.dom.style.left = (sticky.x + distance.x) + 'px';
    sticky.dom.style.top = (sticky.y + distance.y) + 'px';

  })
// The 'mouseup' eventlistener tells the computer when the "mousemove" is no longer needed
  document.addEventListener('mouseup', () => {
    if(sticky.dom == null) return;
      sticky.dom = null;
  })
  
  
