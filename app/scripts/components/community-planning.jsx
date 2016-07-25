var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var CommunityPlanningComponent = React.createClass({


  render: function(){

    return(
      <div className="container-fluid">
        <div>Hello</div>
      </div>
    )
  }
});



//exports
module.exports = {
  'CommunityPlanningComponent': CommunityPlanningComponent
}
