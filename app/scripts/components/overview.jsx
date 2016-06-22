var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var OverviewComponent = React.createClass({


  render: function(){

    return(
      <div className="container-fluid">
        <div className="practice-background">
          <div className="row">
            <div className="practice-container col-md-12">
              <div className="overview-title">
                <div className="overview-logo"></div>
                <h3>Land Resource Design Group</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="statement-container col-md-12">
              <div className="overview-aboutus">
                <h5>intro statement</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="overview-services">
                <h5>What We Do</h5>
                <ul>
                  <li><p>Land Planning</p></li>
                  <li><p>Landscape Architecture</p></li>
                  <li><p>Conceptual Render/Marketing graphics</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});



//exports
module.exports = {
  'OverviewComponent': OverviewComponent
}
