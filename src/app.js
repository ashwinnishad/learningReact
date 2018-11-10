class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() { // this method is required whenever extending from React.Component
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Let me decide what you should do!</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options</p>
        <Option /> 
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <p> Option 1 </p>
    );
  }
}
class AddOption extends React.Component {
  render() {
    return (
      <p> Add options </p>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
