const list = document.querySelector(".list");
const addBtn = document.querySelector(".addTask");

addBtn.addEventListener("click", () => {
  addBtn.disabled = true;
  addTask();
});

function addTask() {
  const task = document.createElement("li");
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Enter Task");
  input.setAttribute("class", "form-control");
  input.setAttribute("id", "task");
  task.appendChild(input);
  list.appendChild(task);
  input.addEventListener("keydown", (event) => {
    event.preventDefault;
    if (event.key === "Enter") {
      addBtn.disabled = false;
      task.remove();
      const val = event.target.value;
      if (val.trim()) {
        const taskAdd = document.createElement("li");
        const checkbox = document.createElement("input");
        const label = document.createElement("label");
        const remove = document.createElement("button");

        taskAdd.setAttribute("class", "list-item");

        //   check box
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "list-item-checkbox");
        checkbox.setAttribute("id", "checkbox");
        //   label
        label.setAttribute("for", "checkbox");
        label.setAttribute("class", "list-item-label");
        label.textContent = val;
        remove.setAttribute("class", "btnDelete");
        remove.textContent = "Delete";
        taskAdd.appendChild(checkbox);
        taskAdd.appendChild(label);
        taskAdd.appendChild(remove);
        if (checkbox.checked) {
          remove.style.display = "none";
        }
        remove.addEventListener("click", () => {
          taskAdd.remove();
        });

        list.appendChild(taskAdd);
      }
    }
  });
}
