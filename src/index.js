document.addEventListener("DOMContentLoaded", () => {
  const newTaskDescription = document.getElementById("new-task-description");
  const list = document.getElementById("tasks");

  document.getElementById("create-task-form").onsubmit = createTask;

  function createTask(e) {
    e.preventDefault();
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newTaskDescription.value));
    createDeleteBtn(li);
    list.appendChild(li);
    newTaskDescription.value = "";
  }

  function createDeleteBtn(li) {
    const btn = document.createElement('button');
    btn.innerText = "X";
    li.appendChild(btn);
    btn.addEventListener('click', function(e) {deleteTask(e)});
  }

  function deleteTask(e) {
    const selectedTask = e.target.parentElement;
    list.removeChild(selectedTask);
  }
});



