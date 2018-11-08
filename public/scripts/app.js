'use strict';

console.log('app.js is running');
var appRoot = document.getElementById('app'); //fetch the div

var app = {
  title: 'Indecision App',
  subtitle: 'Let me make a decision for you!',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); // when we click submit, avoids refresh, and executes code below
  var userOption = e.target.elements.option.value; //getting user option
  if (userOption) {
    app.options.push(userOption);
    e.target.elements.option.value = '';
    renderPage();
  }
};

var removeOptions = function removeOptions() {
  app.options = [];
  renderPage();
};

var renderPage = function renderPage() {
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
      app.options.length > 0 ? 'Here are your options: ' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeOptions },
      'Remove all'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item one'
      ),
      React.createElement(
        'li',
        null,
        'Item two'
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  ); // all our tags must be within 1 root div

  ReactDOM.render(template, appRoot);
};

renderPage();
