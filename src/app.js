console.log('app.js is running');

let user = {
  name: 'Ashwin',
  age: 20,
  location: 'Richardson'
}

let app = {
  title: 'Indecision App',
  subtitle: 'Let me make a decision for you!',
  options: ['Learn React', 'Watch Silicon Valley']
}

let template = ( // the parenthesis open and close is just for readability purposes, not syntax
<div>
  <h1>{app.title}</h1>
  { app.subtitle && <p> {app.subtitle} </p>}
  <p>{app.options.length > 0 ? `Here are your options 1) ${app.options[0]} 2) ${app.options[1]} `: 'No options'}</p>
</div>
); // all our tags must be within 1 root div

function getLocation(location) {
  if(location)
    return <p>Location: {location}</p>
  }

var template3 = (
  <div>
    <h1>
      {user.name}
    </h1>
    <p>
      Age: {user.age}
    </p>
    <p>
      {getLocation(user.location)}
    </p>
  </div>
);
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

const appRoot = document.getElementById('app'); //fetch the div

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

renderCounterApp();
