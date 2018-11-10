

let txt = "";
let btnValue = "Show Details"
const buttonClick = () => {
  if(btnValue === "Show Details") {
    txt ="Hidden information";
    btnValue ="Hide details";
    renderPage();
  }
  else if(btnValue === "Hide details") {
    txt="";
    btnValue="Show Details";
    renderPage();
  }
}
const appRoot = document.getElementById('app');
const renderPage = () => {
  const template = (
    <div>
    <h1> Visibility Toggle </h1>
    <button onClick={buttonClick}>{btnValue}</button>
    <p> {txt} </p>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderPage();
