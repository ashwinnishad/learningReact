class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options) {
        this.setState(() => ({ options: options }));
      }
    }
    catch (e) {
      // do nothing, case for invalid json
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving');
    }
  }
  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }))
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
      this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
    }
}
handleDeleteSingleOption(optionToRemove) {
  this.setState((prevState) => ({
    options: prevState.options.filter((option) => {
      return optionToRemove !== option; // filter has a callback function, so for every element in the array, if it satisfies the condition, item remains in the array, if not, not returned in the new array
    })
  }))
}
  render() {
    const subtitle = 'Let me decide what you should do!';
    return (
      <div>
        <Header subtitle={subtitle}/> {/*title is a prop, key-value pair*/}
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick = {this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions = {this.handleDeleteOptions}
          handleDeleteSingleOption = {this.handleDeleteSingleOption}
        />
        <AddOption
          handleAddOption = {this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button
       onClick={props.handlePick}
       disabled={!props.hasOptions}
       >
        What should I do?
      </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}> Remove all </button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map((option) => {
          return <Option
            key={option}
            optionText={option}
            handleDeleteSingleOption={props.handleDeleteSingleOption}
          />
        })
      }
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteSingleOption(props.optionText);
        }}
      >
        Remove</button>
    </div>

  );
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
    this.setState(() => ({
        error: error
    }))
    if(!error) {
      e.target.elements.option.value ='';
    }
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
