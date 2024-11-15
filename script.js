   
   const form = document.querySelector("form")
  let inputGet = document.getElementById("task-input")
  
  let taskList = document.querySelector("#task-list")
  
    
  //створення нового елемента
 function addTask(task){
  const listItem = document.createElement('li')
  listItem.style.border = '1px solid grey'
  listItem.style.width = '400px'
  listItem.innerHTML = `  <input type="checkbox"/> <span>${task}</span>  <button>Delete</button>`;
  taskList.appendChild(listItem)

 }

 form.addEventListener('submit', (event) => {
     event.preventDefault();
     const input = document.querySelector('#task-input');
     const task = input.value;
     addTask(task);
     input.value = ''
 })

 taskList.addEventListener('click', (event) => {
     if(event.target.tagName === 'BUTTON'){
          const listItem = event.target.parentElement
          taskList.removeChild(listItem);
     }
 })  
 


  

