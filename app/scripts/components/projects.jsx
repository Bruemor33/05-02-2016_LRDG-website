var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');



var ProjectsComponent = React.createClass({


  render: function(){

    return(
      <div className="container-fluid">
        <div className="row">
          <div className="project-one-container col-md-12">

            <div className="kindred-writeup"></div>

            <div className="kindred-photo-slideshow">
              <img src="images/seaisle-signage.jpg" />
            </div>

          </div>
          <div className="project-two-container col-md-12">

            <div className="waterleigh-photo-slideshow"></div>

            <div className="waterleigh-writeup">

            </div>

          </div>
        </div>
      </div>
    )
  }
})


//Exports
module.exports = {
  'ProjectsComponent': ProjectsComponent
}
