import html from "../core.js";
import Todo_Item from "./Todo-Item.js";
import { connect } from "../store.js";

function Todo_List({ todos, editIndex, filters, filter, taskType, taskTypes }) {
  return html`<section class="app">
      <p class="app__text">Today main focus</p>
      <h1 class="app__heading">Design your plans</h1>
      <div class="add-block">
        <div class="dots">
          ${Object.keys(taskTypes).map(
            (key) => `<div
          id="${key}"
          onclick="dispatch('taskType', '${key}')"
          class="dot ${key === taskType && "active"}"
        ></div>`
          )}
        </div>
        <input
          onkeyup="event.keyCode === 13 && dispatch('ADD', this.value.trim(), '${taskType}')"
          placeholder="What is your next task?"
          type="text"
          class="add-task"
        />
        <input
          onclick="dispatch('toggleAll', this.checked)"
          hidden
          ${todos.every((todo) => todo.completed) && "checked"}
          type="checkbox"
          id="toggleAll"
        />
        ${todos.length > 0 &&
        '<label class="toggleAll" for="toggleAll"></label>'}
      </div>

      ${todos.length > 0 &&
      html`<div class="buttons">
        ${Object.keys(filters).map(
          (key) => `
      <button onclick ="dispatch('switchFilter', '${key}')" class="button ${
            filter === key && "active"
          }">${key[0].toUpperCase() + key.slice(1)}</button>`
        )}
        ${todos.filter(filters.completed).length > 0 &&
        `
      <button onclick="dispatch('clearCompleted')" class="button clearCompleted">
        Clear Completed
      </button>`}
      </div>`}

      <div class="todo-list">
        ${todos
          .filter(filters[filter])
          .map((todo, index) =>
            Todo_Item(
              todo.title,
              index,
              todo.completed,
              editIndex,
              todo.typeTodo
            )
          )}
      </div>
    </section>
    <div class="circle circle-pink"></div>
    <div class="circle circle-blue"></div>
    <div class="circle circle-yellow"></div>`;
}

export default connect()(Todo_List);
