var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
// var Parse = require('parse');
// var ParseReact = require('parse-react');



var router = require('./router.js');
var InterfaceComponent = require('./interface-controller.jsx').InterfaceComponent;


$(function(){
  ReactDOM.render(
    React.createElement(InterfaceComponent, {
      router: router
    }),
    document.getElementById('main-container')
  );
  Backbone.history.start();
});
