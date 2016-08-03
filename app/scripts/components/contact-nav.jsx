var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');


var ContactPageNavigation = React.createClass({

  render: function(){

    return(
      <div className="container-fluid">
        <nav id="site-nav" className="row">
          <div className="projects-navigation col-md-12">
            <a href="#"><img src="./images/small-lrdg-logo.png" className="landing-logo" /></a>
            <a href="#overview" className="projects-overview">Practice</a>
            <a href="#projects" className="projects-projects">Projects</a>
            <a href="#people" className="projects-people">Studio</a>
            <a href="#contact" id="contact-active" className="projects-contact">Contact</a>
            <a href="#" className="navigation-home">
              <i className="fa fa-home fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </nav>
      </div>
    )
  }
})


//Component Export
module.exports = {
  'ContactPageNavigation': ContactPageNavigation
}
