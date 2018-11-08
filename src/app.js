console.log('app.js is running');
const appRoot = document.getElementById('app'); //fetch the div

let app = {
  title: 'Indecision App',
  subtitle: 'Let me make a decision for you!',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault(); // when we click submit, avoids refresh, and executes code below
  const userOption = e.target.elements.option.value; //getting user option
  if(userOption) {
    app.options.push(userOption);
    e.target.elements.option.value = '';
    renderPage();
  }
}

const removeOptions = () => {
  app.options = [];
  renderPage();
}

const renderPage = () => {
  let template = ( // the parenthesis open and close is just for readability purposes, not syntax
  <div>
    <h1>{app.title}</h1>
    { app.subtitle && <p> {app.subtitle} </p>}
    <p>{app.options.length > 0 ? `Here are your options: `: 'No options'}</p>
    <p>{app.options.length}</p>
    <button onClick={removeOptions}>Remove all</button>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
        <button>Add option</button>
    </form>
  </div>
  ); // all our tags must be within 1 root div

  ReactDOM.render(template, appRoot);
}

renderPage();
