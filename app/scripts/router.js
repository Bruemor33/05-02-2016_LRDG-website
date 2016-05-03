var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
// var Parse = require('parse');
// var ParseReact = require('parse-react');
require('Backbone-React-Component')


var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "projects": "projects",
    "overview": "overview",
    "people": "people",
    "contact": "contact",
    "images": "images",
    "*notfound": "notfound"
  },
  initialize: function(){
    //set up heroku app for LRDG images
  },
  index: function(){
    this.current = "index"
  },
  projects: function(){
    this.current = "projects"
  },
  overview: function(){
    this.current = "overview"
  },
  people: function(){
    this.current = "people"
  },
  contact: function(){
    this.current = "contact"
  },
  images: function(){
    this.current = "images"
  }
});

//exports
module.exports = new Router();
