import html from "../core.js";
import Side_bar from "./Side-bar.js";
import Todo_List from "./Todo-List.js";

function App() {
  return html`${Side_bar()} ${Todo_List()}`;
}

export default App;
