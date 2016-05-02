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
            <a href="#overview">Overview</a>
            <a href="#projects">Projects</a>
            <a href="#people">People</a>
            <a href="#contact">Contact Us</a>
            <a href="#index">Land Resource Design Group</a>
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
