const lines = [
  "This is a To-Do list.",
  "You can list your Tasks here.",
  "Organize your tasks!"
];                                                                                                  

const el = document.getElementById("typed-line");
let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (charIndex <= lines[lineIndex].length) {
    el.textContent = lines[lineIndex].substring(0, charIndex);
    el.style.width = charIndex + "ch";
    charIndex++;
    setTimeout(typeLine, 100);
  } else {
    setTimeout(eraseLine, 1500);
  }
}

function eraseLine() {
  if (charIndex > 0) {
    charIndex--;
    el.textContent = lines[lineIndex].substring(0, charIndex);
    el.style.width = charIndex + "ch";
    setTimeout(eraseLine, 50);
  } else {
    lineIndex = (lineIndex + 1) % lines.length;
    setTimeout(typeLine, 500);
  }
}

typeLine();

// dark/light 
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
});



const taskform = document.getElementById("to-d-list-form");

const taskoutput = document.querySelector(".task-output");

taskform.addEventListener("submit", function(event) {
    event.preventDefault();
    const tasktitle = document.getElementById("task-title").value.trim();
    const taskdiscription = document.getElementById("task-discription").value.trim();
    const taskpriority = document.getElementById("priority-selection").value;
    const taskdate = document.getElementById("date").value;
    const taskdelete = document.getElementById("delete-task").value;
    const taskedit = document.getElementById("edit-task").value;


    function changeColor(element, priority) {
    const p = priority.toLowerCase(); 
    if (p === "high") {
        element.style.backgroundColor = "red"; 
    } else if (p === "medium") {
        element.style.backgroundColor = "blue"; 
    } else if (p === "low") {
        element.style.backgroundColor = "green"; 
    }
}
   
        const output = document.createElement("div");
        output.innerHTML = `
                            <input  type="search" placeholder="Search Your Tasks"> <br>
                            <strong>Task: </strong> ${tasktitle} <br> 
                            <strong>Discription:</strong> ${taskdiscription} <br> 
                            <strong>Priority:</strong> ${taskpriority} <br> 
                            <strong>Date: </strong> ${taskdate} <br>`;
                            changeColor(output, taskpriority);


        const deletebtn = document.createElement("button");
        deletebtn.textContent = "🚮 Delete";
        deletebtn.addEventListener("click", () => {
            output.remove();
        });

        const editbtn = document.createElement("button");
        editbtn.textContent = "✏️ Edit";
        editbtn.addEventListener("click", () => {
            output.innerHTML = `
                <form class="edit-form">
                    <label>Task:</label>
                    <input type="text" value="${tasktitle}" id="edit-title"><br>
                    <label>Description:</label>
                    <input type="text" value="${taskdiscription}" id="edit-description"><br>
                    <label>Priority:</label>
                    <select id="edit-priority">
                        <option value="Low" ${taskpriority === "Low" ? "selected" : ""}>Low</option>
                        <option value="Medium" ${taskpriority === "Medium" ? "selected" : ""}>Medium</option>
                        <option value="High" ${taskpriority === "High" ? "selected" : ""}>High</option>
                    </select><br>
                    <label>Date:</label>
                    <input type="date" value="${taskdate}" id="edit-date"><br>
                    <button type="submit">Save</button>
                </form>
            `;
            
            output.querySelector(".edit-form").addEventListener("submit", (e) => {
                e.preventDefault();
                const updatedTitle = output.querySelector("#edit-title").value.trim();
                const updatedDescription = output.querySelector("#edit-description").value.trim();
                const updatedPriority = output.querySelector("#edit-priority").value;
                const updatedDate = output.querySelector("#edit-date").value;

                output.innerHTML = `<strong>Task: </strong> ${updatedTitle} <br> 
                                     <strong>Discription: </strong> ${updatedDescription} <br> 
                                     <strong>Priority: </strong> ${updatedPriority} <br> 
                                     <strong>Date: </strong> ${updatedDate} <br>`;
                                     changeColor(output, updatedPriority);


                output.appendChild(editbtn);
                output.appendChild(deletebtn);
            });
        });

        output.appendChild(editbtn);
        output.appendChild(deletebtn);
        taskoutput.appendChild(output);
        taskform.reset();
    
});
