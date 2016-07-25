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
    "kindred": "kindred",
    "waterleigh": "waterleigh",
    "nonapark": "nonapark",
    "seaisle": "seaisle",
    "altis": "altis",
    "dwell": "dwell",
    "plazaUniversity": "plazaUniversity",
    "ventanas": "ventanas",
    "brisas": "brisas",
    "harmony": "harmony",
    "magic": "magic",
    "overview": "overview",
    "overview/community": "community",
    "overview/landscape-architecture": "landscape",
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
  kindred: function(){
    this.current = "kindred"
  },
  waterleigh: function(){
    this.current = "waterleigh"
  },
  nonapark: function(){
    this.current = "nonapark"
  },
  seaisle: function(){
    this.current = "seaisle"
  },
  altis: function(){
    this.current = "altis"
  },
  dwell: function(){
    this.current = "dwell"
  },
  plazaUniversity: function(){
    this.current = "plazaUniversity"
  },
  ventanas: function(){
    this.current = "ventanas"
  },
  brisas: function(){
    this.current = "brisas"
  },
  harmony: function(){
    this.current = "harmony"
  },
  magic: function(){
    this.current = "magic"
  },
  overview: function(){
    this.current = "overview"
  },
  community: function(){
    this.current = "overview/community"
  },
  landscape: function(){
    this.current = "overview/landscape-architecture"
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
