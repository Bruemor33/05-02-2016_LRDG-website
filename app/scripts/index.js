var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
// var Parse = require('parse');
// var ParseReact = require('parse-react');



var router = require('./router-interface/router.js');
var InterfaceComponent = require('./router-interface/interface-controller.jsx').InterfaceComponent;


if (process.env.NODE_ENV === 'production'){
  console.log('production only');
}

$(function(){
  ReactDOM.render(
    React.createElement(InterfaceComponent, {
      router: router
    }),
    document.getElementById('main-container')
  );
  Backbone.history.start();
});
