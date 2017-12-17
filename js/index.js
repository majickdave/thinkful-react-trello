require('babel-polyfill');

// js/components/index.js
var React = require('react');
var ReactDOM = require('react-dom');

var Board = require('./components/board');


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="Dave's Board" />, document.getElementById('app'));
});
