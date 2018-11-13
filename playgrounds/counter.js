class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count : 0
    };
  }
  handleAddOne() {
    // setState() is used to automatically re-render based on events. the argument prevState is used to access the state before the event is fired. in setState, we return an object manipulating the data based on the event
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count -1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleAddOne}> +1 </button>
        <button onClick={this.handleMinusOne}> -1 </button>
        <button onClick={this.handleReset}> Reset </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const someId = 'plusButton';
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }
// const reset = () => {
//   count=0;
//   renderCounterApp();
// }
//
//
//
// const renderCounterApp = () => {
//   const plusMinusTemplate = (
//     <div>
//       <h1> Count: {count} </h1>
//       <button onClick={addOne}> +1 </button> {/*yoou can reference a function in these*/}
//       <button onClick={minusOne}> -1 </button>
//       <button onClick={reset}> Reset </button>
//     </div>
//   );
//   ReactDOM.render(plusMinusTemplate, appRoot); // 2 arguments
// };
