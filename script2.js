const businessBttn = document.querySelector('#business');
const personalBttn = document.querySelector('#personal');
const schoolBttn = document.querySelector('#school');
const toDoBttn = document.querySelector('#to-do');
const modal = document.getElementById("helpModal");
const helpguide = document.getElementById("help");
const modalexit = document.getElementsByClassName("modalexit")[0];
const exit = document.querySelector('#exit');
let todoContainer = document.getElementById('to-do-container');




// The added event listener for each declared button gives the button the code to run when the user 'clicks' on it.

// We created a text area using the inner HTML property and styled it according to its specific button using the previously declared root variables in our linked stylesheet

// We then appended the newly created sticky note to our parent container to be manipulated later on

function savesticky(newSticky){
  let stickyNotes = JSON.parse(localStorage.getItem('sticky-notes')) || [];
  const newStickyContent = newSticky.value;
  stickyNotes.push(newStickyContent);
  console.log(newStickyContent);
  localStorage.setItem('sticky-notes', JSON.stringify(stickyNotes));
}

businessBttn.addEventListener('click', () => {
  let newSticky = document.createElement('div');
  newSticky.classList.add('sticky-note');
  newSticky.innerHTML = 
  '<span class="close">&times</span> <textarea id="businessbttn" placeholder="start typing..." rows="10" cols="30"></textarea></>';
  newSticky.style.background = 'var(--business)';
  todoContainer.appendChild(newSticky);
  const bbuttonContent = document.getElementById("businessbttn");
 // newSticky.querySelector('textarea').value.push(newStickyContent);
 console.log(bbuttonContent);
  bbuttonContent.addEventListener('change', () =>{
    console.log(newSticky);
    savesticky(bbuttonContent);
  })
  })


  schoolBttn.addEventListener('click', () => {
    let newSticky = document.createElement('div');
    newSticky.classList.add('sticky-note');
    newSticky.innerHTML = 
    '<span class="close">&times</span> <textarea id= "schoolbttn" placeholder="start typing..." rows="10" cols="30"></textarea></>';
    newSticky.style.background = 'var(--school)';
    todoContainer.appendChild(newSticky);
    const sbuttonContent = document.getElementById("schoolbttn"); 

    sbuttonContent.addEventListener('change', () =>{
    
      savesticky(sbuttonContent);
    })
  })
    


personalBttn.addEventListener('click', () => {
  let newSticky = document.createElement('div');
  newSticky.classList.add('sticky-note');
  newSticky.innerHTML = 
  '<span class="close">&times</span> <textarea id="perBttn" placeholder="start typing..." rows="10" cols="30"></textarea></>';
  newSticky.style.background = 'var(--personal)';
  todoContainer.appendChild(newSticky);
const perBttn = document.getElementById('perBttn');

perBttn.addEventListener('change', () => {
  savesticky(perBttn);
})

  })

  toDoBttn.addEventListener('click', () => {
    let newSticky = document.createElement('div');
    newSticky.classList.add('sticky-note');
    newSticky.innerHTML = 
    '<span class="close">&times</span> <textarea id="todoBttn" placeholder="start typing..." rows="10" cols="30"></textarea><p><u></u></p>';
    newSticky.style.background = 'var(--to-do)';
    newSticky.style.cursor = 'cursor';
    todoContainer.appendChild(newSticky);
    const toDoBttn = document.getElementById("todoBttn");

    toDoBttn.addEventListener('change', ()=>{
      savesticky(toDoBttn);
    })
  
  
    })

    


// When the user clicks the button, open the modal 
helpguide.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
modalexit.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


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