export default function logger(reducer) {
  return (preState, action, args) => {
    console.group(action);
    console.log("preState: ", preState);
    console.log("action arguments: ", args);
    let nextState = reducer(preState, action, args);
    console.log(nextState);
    console.groupEnd();
    return nextState;
  };
}
