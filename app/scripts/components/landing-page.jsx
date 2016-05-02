var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('Backbone-React-Component');



var LandingPage = React.createClass({

  render: function(){
    return(
      <div className="container-fluid">
        <div className="background-image">

        </div>
      </div>
    )
  }
})


//Exports
module.exports = {
  'LandingPage': LandingPage
}
