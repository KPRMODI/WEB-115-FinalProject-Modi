// The defining of variables that will be used all throughout the code
let submit = document.getElementById("submit")
let taskpriority = document.getElementById("taskpriority")
let taskmanager = document.getElementById("taskmanager")
let importantcheckbox = document.getElementById("important")
let id = 1 
let input = document.getElementById("input")
let tasks = { } // Defines the tasks object, which will add ids and keys when the user submits the task

submit.addEventListener("click", () =>{ // When submit is clicked, assign all values to the object 
     if (input.value === "") { // checks if input is blank, and if it isint go to else statement
        window.alert("You must enter something")
    } else {
    // defines tasks object keys and id's
    tasks.id = id
    tasks.input = input.value
    tasks.priority = taskpriority.value
    tasks.isImportant = importantcheckbox.checked
    tasks.isCompleted = false
    tasks.date = Date().slice(0,10)

    // shows console log tasks object in JSON string format
    console.log(JSON.stringify(tasks))

    let newdiv = document.createElement("div")
    taskmanager.appendChild(newdiv) // creates a new div to append

    // CSS formatting for the boxes
    newdiv.style.border = "2px solid"
    newdiv.style.padding = "10px"
    newdiv.style.margin = "10px"
    newdiv.style.fontSize = "20px"

    // if important checkbox is clicked then turn background color of box red
    if (importantcheckbox.checked == true) {
        newdiv.style.backgroundColor = "red"
    }
 
    // Creates a task data element that gets all values and appends it to the new div element as a child
    let taskdata = document.createElement("p")
    taskdata.innerHTML = `Task: ${input.value} <br> priority: ${taskpriority.value} <br> date: ${Date().slice(0,10)}`
    newdiv.appendChild(taskdata)

    // Created for the check box for completion of task
    let newcheck = document.createElement(`input`)
    newcheck.setAttribute("type", "checkbox")
    newdiv.appendChild(newcheck)

    // Text Indicator of check  box
    checkname = document.createElement("p")
    checkname.innerHTML = "Click checkbox if done"
    newdiv.appendChild(checkname)

    // creation of the deletebutton that deletes the task
    let deletebutton = document.createElement("button")
    deletebutton.innerHTML = "Press to Delete task"
    newdiv.appendChild(deletebutton)

    // Event listener that removes child if clicked
    deletebutton.addEventListener("click", () =>{
        taskmanager.removeChild(newdiv)
    })

    // Add a line through if the check box is checked
    newcheck.addEventListener("click", () =>{
        newdiv.style.textDecoration = "line-through"
        tasks.isCompleted = true
        checkname.innerHTML = "undo"
        console.log(JSON.stringify(tasks))
        newcheck.addEventListener("click", () =>{ // is supposed to undo this, but I couldn't get it to work
            newdiv.removeAttribute("style","textDecoration: line-through")
    
        })
})

    id += 1 // for each time the submit button is pressed, just do this
    }
})