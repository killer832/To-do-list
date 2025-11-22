
      
    let toDo = [];


    document.getElementById("myInput").addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        entedTask();
      }
    });
    function renderToDo() {
      let toDoTaskHtml = '';
      for (let i = 0; i < toDo.length; i++) {
        const toDoTask = toDo[i];
        toDoTaskHtml += `
          <div class="ented-task-div">
            <div><p class="paraTask">${toDoTask.task}</p></div>
            <div><p class="paraDate">${toDoTask.date}</p></div>
            <div><button onclick="removeTask(${i})" class="Delete-button">Delete</button></div>
          </div>
        `;
      }
      document.querySelector('.text-div-js').innerHTML = toDoTaskHtml;
    }

    function removeTask(index) {
      toDo.splice(index, 1);
      renderToDo();
    }

    function entedTask() {
      const task = document.querySelector('.text-box-js').value;
      let date = document.querySelector('.js-date-box').value;
      


      if (task === "") {
        alert("Please enter a task");
        return;
      }

      if (!date) {
          date = "No due date";
      }

      toDo.push({ task, date });
      document.querySelector('.text-box-js').value = "";
      document.querySelector('.js-date-box').value = "";
      renderToDo();
    }
    
     
