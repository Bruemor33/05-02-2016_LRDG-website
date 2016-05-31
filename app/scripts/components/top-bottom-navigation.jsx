var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');


var BottomNav = React.createClass({

  render: function(){

    return(
      <div className="container-fluid">
        <nav id="top-nav" className="row">
          <div className="projects-navigation col-md-12">
            <img src="./images/small-lrdg-logo.png" className="landing-logo" />
            <a href="#overview" className="top-overview">Overview</a>
            <a href="#projects" className="top-projects">Projects</a>
            <a href="#people" className="top-people">Studio</a>
            <a href="#contact" className="top-contact">Contact</a>
            <a href="#" className="landing-company-name">Land Resource Design Group</a>
          </div>
        </nav>
      </div>
    )
  }
})


//Component Export
module.exports = {
  'BottomNav': BottomNav
}
