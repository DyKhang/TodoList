import storage from "./util/storage.js";

var initState = {
  todos: storage.get(),
  editIndex: null,
  taskType: "personal",
  taskTypes: {
    personal: "personal",
    freelance: "freelance",
    work: "work",
  },
  filter: "all",
  filters: {
    all: () => true,
    uncompleted: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
};

const actions = {
  ADD({ todos }, title, taskType) {
    if (title) {
      todos.push({ title, completed: false, typeTodo: taskType });
    }
    storage.set(todos);
  },
  REMOVE({ todos }, index) {
    todos.splice(index, 1);
    storage.set(todos);
  },
  TOGGLE({ todos }, index) {
    todos[index].completed = !todos[index].completed;
    storage.set(todos);
  },
  toggleAll({ todos }, checked) {
    todos.forEach((todo) => (todo.completed = checked));
    storage.set(todos);
  },
  startEdit(state, index) {
    state.editIndex = index;
  },
  endEdit(state, title) {
    if (title) {
      state.todos[state.editIndex].title = title;
    } else {
      this.REMOVE(state, state.editIndex);
    }
    state.editIndex = null;
    storage.set(state.todos);
  },
  switchFilter(state, key) {
    state.filter = key;
    storage.set(state.todos);
  },
  clearCompleted(state) {
    state.todos = state.todos.filter(state.filters.uncompleted);
    storage.set(state.todos);
  },
  taskType(state, type) {
    state.taskType = type;
  },
};

export default function Reducer(state = initState, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
