class Main extends React.Component {
  render() {
    const title = "Visibility toggle";
    return (
      <div>
        <h1> {title} </h1>
        <VisibilityButton />
      </div>
    );
  }
}

class VisibilityButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}> {
          this.state.visibility ? 'Hide details' : 'Show details'
        } </button>
        {this.state.visibility && (
          <div>
            <p> hidden information!! </p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));


// let txt = "";
// let btnValue = "Show Details"
// const buttonClick = () => {
//   if(btnValue === "Show Details") {
//     txt ="Hidden information";
//     btnValue ="Hide details";
//     renderPage();
//   }
//   else if(btnValue === "Hide details") {
//     txt="";
//     btnValue="Show Details";
//     renderPage();
//   }
// }
// const appRoot = document.getElementById('app');
// const renderPage = () => {
//   const template = (
//     <div>
//     <h1> Visibility Toggle </h1>
//     <button onClick={buttonClick}>{btnValue}</button>
//     <p> {txt} </p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// }
//
// renderPage();
