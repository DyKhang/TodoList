import html from "../core.js";

function Todo_Item(title, index, completed, editIndex, typeTodo) {
  return html`<div class="todo-item ${completed && "completed"}">
    <div id="${typeTodo}" class="dot"></div>
    <span ondblclick ="dispatch('startEdit', ${index})"  class="todo-item__title ${
    editIndex === index && "editing"
  }">${title}</span>
    <input onblur ="dispatch('endEdit', this.value.trim())" onkeyup = "event.keyCode === 13 && dispatch('endEdit', this.value.trim())" class="editTitle" value="${title}" type="text"></input>
    <input
      ${completed && "checked"}
      hidden
      id="check${index}"
      type="checkbox"
      class="todo-item__check"
      onclick="dispatch('TOGGLE', ${index})"
    />
    <label for="check${index}" class="check-label"></label>
    <i
      onclick="dispatch('REMOVE', ${index})"
      class="fa-solid fa-trash-can"
      style="color: #6332f5;"
    ></i>
  </div>`;
}

export default Todo_Item;
