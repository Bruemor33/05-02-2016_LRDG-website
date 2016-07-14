var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var StudioPageComponent = React.createClass({


  render: function(){

    return(
      <div className="container">
        <div className="col-md-6">
          <div className="row">
            <ul>
              <li className="barry">

              </li>
              <li className="jim">

              </li>
              <li className="scott">

              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">

        </div>
      </div>
    )
  }
})




//exports
module.exports = {
  'StudioPageComponent': StudioPageComponent
}
