let count = 0;
const someId = 'plusButton';
const addOne = () => {
  count++;
  renderCounterApp();
}
const minusOne = () => {
  count--;
  renderCounterApp();
}
const reset = () => {
  count=0;
  renderCounterApp();
}



const renderCounterApp = () => {
  const plusMinusTemplate = (
    <div>
      <h1> Count: {count} </h1>
      <button onClick={addOne}> +1 </button> {/*yoou can reference a function in these*/}
      <button onClick={minusOne}> -1 </button>
      <button onClick={reset}> Reset </button>
    </div>
  );
  ReactDOM.render(plusMinusTemplate, appRoot); // 2 arguments
};
