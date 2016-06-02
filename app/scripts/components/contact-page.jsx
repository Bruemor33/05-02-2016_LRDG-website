var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var ContactPageComponent = React.createClass({



  render: function(){


    return(
      <div className="container">
        <div className="contact-background">
          <div className="row">
            <div className="col-md-12">
              <div className="company-container col-md-8">
                <div className="company-logo"></div>
                <h1 className="company-title">Land Resource Design Group</h1>
                <p className="company-address">Address here</p>
                <p className="company-emial">Query email here</p>
              </div>
              <div className="google-map col-md-4">
                <p>probably a map here.</p>
                <p>link to directions</p>
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
  'ContactPageComponent': ContactPageComponent
}
