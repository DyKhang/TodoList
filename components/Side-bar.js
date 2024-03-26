import html from "../core.js";
import { connect } from "../store.js";

function Side_bar({ todos }) {
  let percent;
  if (todos.length > 0) {
    let todosNum = todos.length;
    let todoCompletedNum = todos.filter((todo) => todo.completed).length;
    percent = (todoCompletedNum / todosNum) * 100;
  }
  return html`<section class="side-bar">
    <div class="user">
      <img src="./assets/images/avatar.jpg" alt="" class="user__avatar" />
      <div class="user__infor">
        <p class="user__slogan">Do-it</p>
        <h2 class="user__name">Hamza Mameri</h2>
      </div>
    </div>
    <div class="separate"></div>
    <div class="filter">
      <i class="fa-regular fa-calendar" style="color: #b197fc"></i>
      <div class="filter__col">
        <p class="filter__text">Today tasks</p>

        <ul class="filter__list">
          <li class="filter__item">
            <div id="personal" class="dot"></div>
            <span class="filter__title">Personal</span>
          </li>
          <li class="filter__item">
            <div id="freelance" class="dot"></div>
            <span class="filter__title">Freelance</span>
          </li>
          <li class="filter__item">
            <div id="work" class="dot"></div>
            <span class="filter__title">Work</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="task-completed-block">
      <h2 class="task-completed">Task Completed</h2>
      <div class="task-process">
        <div
          style="width: ${Math.round(percent) + "%"}"
          class="process-background"
        ></div>
        <span class="process-text">${Math.round(percent)}%</span>
      </div>
    </div>
  </section>`;
}

export default connect()(Side_bar);
