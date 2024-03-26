import { createStore } from "./core.js";
import Reducer from "./reducer.js";
import logger from "./logger.js";

const { dispatch, connect, attach } = createStore(logger(Reducer));

window.dispatch = dispatch;

export { connect, attach };
