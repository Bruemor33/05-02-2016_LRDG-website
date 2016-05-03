var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('Backbone-React-Component');



var LandingPage = React.createClass({

  render: function(){
    return(
      <div id="imagehere" className="container-fluid">
        <div className="background-image">
          <ul className="cd-slideshow">
            <li>
              <span className="image-one"></span>
              <div>
                <h3>Design</h3>
              </div>
            </li>
            <li>
              <span className="image-two"></span>
              <div>
                <h3>Conservation</h3>
              </div>
            </li>
            <li>
              <span className="image-three"></span>
              <div>
                <h3>Planning</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})


//Exports
module.exports = {
  'LandingPage': LandingPage
}
