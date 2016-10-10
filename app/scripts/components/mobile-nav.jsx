var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobileNavigation = React.createClass({


  render: function(){

    return(
      <div className="container-fluid">
        <div id="mobile-nav">
          <div className="mobile-nav-toggle">
            <ul className="mobile-nav-items">
              <li className="mobile-nav-links">
                <a href="#overview" className="mobile-practice">Practice</a>
              </li>
              <li className="mobile-nav-links">
                <a href="#projects" className="mobile-projects">Projects</a>
              </li>
              <li className="mobile-nav-links">
                <a href="#people" className="mobile-studio">Studio</a>
              </li>
              <li className="mobile-nav-links">
                <a href="#contact" className="mobile-contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})




//component export
module.exports = {
  'MobileNavigation': MobileNavigation
}
