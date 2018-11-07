'use strict';

console.log('app.js is running');

var user = {
  name: 'Ashwin',
  age: 20,
  location: 'Richardson'
};

var app = {
  title: 'Indecision App',
  subtitle: 'Let me make a decision for you!',
  options: ['Learn React', 'Watch Silicon Valley']
};

var template = // the parenthesis open and close is just for readability purposes, not syntax
React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    ' ',
    app.subtitle,
    ' '
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options 1) ' + app.options[0] + ' 2) ' + app.options[1] + ' ' : 'No options'
  )
); // all our tags must be within 1 root div

function getLocation(location) {
  if (location) return React.createElement(
    'p',
    null,
    'Location: ',
    location
  );
}

var template3 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    getLocation(user.location)
  )
);
var count = 0;
var someId = 'plusButton';
var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app'); //fetch the div

var renderCounterApp = function renderCounterApp() {
  var plusMinusTemplate = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      ' Count: ',
      count,
      ' '
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      ' +1 '
    ),
    ' ',
    React.createElement(
      'button',
      { onClick: minusOne },
      ' -1 '
    ),
    React.createElement(
      'button',
      { onClick: reset },
      ' Reset '
    )
  );
  ReactDOM.render(plusMinusTemplate, appRoot); // 2 arguments
};

renderCounterApp();
