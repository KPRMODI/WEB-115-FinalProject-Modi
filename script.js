// The defining of variables that will be used all throughout the code

let submit = document.getElementById("submit")
let taskpriority = document.getElementById("taskpriority")
let taskmanager = document.getElementById("taskmanager")
let importantcheckbox = document.getElementById("important")
let id = 1
let input = document.getElementById("input")

let ten = []


let tasks = { } // Defines the tasks object, which will add ids and keys when the user submits the task

let date = Date()

submit.addEventListener("click", () =>{ // When submit is clicked, assign all values to the object 
     if (input.value === "") {
    window.alert("You must enter something")
} else{
    console.log(important.value)
    tasks.id = id
    tasks.input = input.value
    tasks.priority = taskpriority.value
    tasks.isImportant = importantcheckbox.value
    tasks.isCompleted = false
    tasks.date = date.value



    console.log(tasks)

    let newdiv = document.createElement("div")
    taskmanager.appendChild(newdiv)

    ten.push(newdiv)

    newdiv.style.border = "2px solid"
    newdiv.style.padding = "20px"
    newdiv.style.margin = "20px"
    newdiv.style.fontSize = "20px"
    if (taskpriority.value === "high") {
        newdiv.style.color = "red"
    }





    let taskdata = document.createElement("p")
    taskdata.innerHTML = `Task: ${input.value} <br> priority: ${taskpriority.value} <br> date: ${Date()}`
    newdiv.appendChild(taskdata)

        let newcheck = document.createElement(`input`)
        newcheck.setAttribute("type", "checkbox")
        newdiv.appendChild(newcheck)

        checkname = document.createElement("p")
        checkname.innerHTML = "done"
        newdiv.appendChild(checkname)


    let i = document.createElement("button")
    i.innerHTML = "Delete"
    newdiv.appendChild(i)

    let hi = document.getElementById("hi")

    i.addEventListener("click", () =>{
        taskmanager.removeChild(newdiv)
    })


    id += 1 // for each time the submit button is pressed, just do this
    }
})

console.log()