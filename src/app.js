class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    const randNum = Math.floor(Math.random()*this.state.options.length); // getting a random index
    const option = this.state.options[randNum];
    alert(option);
  }
  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    }
    else if(this.state.options.indexOf(option) > -1) {
      return 'Option already exists'
    }
    else {
      this.setState((prevState) => {
      return {
          options: prevState.options.concat(option)
        };
      });
    }
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Let me decide what you should do!';
    return (
      <div>
        <Header title={title} subtitle={subtitle}/> {/*title is a prop, key-value pair*/}
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick = {this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions = {this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption = {this.handleAddOption}
        />
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
  render() {
    return (
      <div>
        <button
         onClick={this.props.handlePick}
         disabled={!this.props.hasOptions}
         >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}> Remove all </button>
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
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: undefined
    }
  }
  onFormSubmit(e) {
    e.preventDefault();
    const userOption = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(userOption);
    this.setState(() => {
      return {
        error: error
      };
    })
    e.target.elements.option.value ='';
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option"/>
          <button> Add option </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
