class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Let me decide what you should do!';
    const options = ['t1','t2','t5'];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/> {/*title is a prop, key-value pair*/}
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() { // this method is required whenever extending from React.Component
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handleClick() {
    alert('pick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  removeAll() {
    alert('remove');
  }
  render() {
    return (
      <div>
        <button onClick={this.removeAll}> Remove all </button>
        {
          this.props.options.map((option) => {
            return <Option key={option} optionText={option}/>
          })
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
      Option: {this.props.optionText}
      </div>

    );
  }
}
class AddOption extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();
    const userOption = e.target.elements.option.value.trim();
    if(userOption)
      alert(userOption);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option"/>
          <button> Add option </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
