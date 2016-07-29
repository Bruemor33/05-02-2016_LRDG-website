var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');


var StudioPageNavigation = React.createClass({

  render: function(){

    return(
      <div className="container-fluid">
        <nav id="site-nav" className="row">
          <div className="projects-navigation col-md-12">
            <img src="./images/small-lrdg-logo.png" className="landing-logo" />
            <a href="#overview" className="projects-overview">Practice</a>
            <a href="#projects" className="projects-projects">Projects</a>
            <a href="#people" id="studio-active" className="projects-people">Studio</a>
            <a href="#contact" className="projects-contact">Contact</a>
            <a href="#" className="landing-company-name">LRDG: Studio</a>
          </div>
        </nav>
      </div>
    )
  }
})


//Component Export
module.exports = {
  'StudioPageNavigation': StudioPageNavigation
}