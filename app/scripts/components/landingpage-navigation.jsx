var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');


var LandingNav = React.createClass({

  render: function(){

    return(
      <div className="container-fluid">
        <nav className="row">
          <div className="landing-navigation col-md-12">
            <img src="./images/small-lrdg-logo.png" className="landing-logo" />
            <a href="#overview" className="landing-overview">Overview</a>
            <a href="#projects" className="landing-projects">Projects</a>
            <a href="#people" className="landing-people">Studio</a>
            <a href="#contact" className="landing-contact">Contact</a>
            <a href="#index" className="landing-company-name">Land Resource Design Group</a>
          </div>
        </nav>
      </div>
    )
  }
})


//Component Export
module.exports = {
  'LandingNav': LandingNav
}
