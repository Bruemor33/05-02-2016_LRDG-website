var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');



var SeaIsleComponent = React.createClass({

  handleClick: function(e){
    e.preventDefault();

  },

  render: function(){


    return(
      <div id="sea-isle-background" className="container-fluid">
        <div classNme="col-md-12">
          <div className="sea-isle-writeup">
            <h2>Sea Isle</h2>
            <p>Orange County, FL</p>
            <a className="info-click-event" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Project Info<span className="glyphicon glyphicon-chevron-down" />
            </a>
            <div id="sea-isle-summary" className="dropdown-menu">
              <p className="dropdown-item"><span>Project Type:</span>Single-Family Community Development</p>
              <p className="dropdown-item"><span>Client:</span>DR Horton, Inc.</p>
              <p className="dropdown-item">
                Located within the Sea World Orlando Design Corridor, Sea Isle is a coastal inspired, multi-family community with sand, landscape, bold colored accents, and rich textures used to create a unique, resort-style sense of place.  Amenities near the clubhouse were designed on axis with different clubhouse architectural elements to maximize space efficacy, views, and use.  In addition to the 356 units, the design program includes a resort style swimming pool, dog park, outdoor fireplace, grill stations, dining area, gated entrance feature, custom columns, decorative paving, and lush landscaping.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})



//Exports
module.exports = {
  'SeaIsleComponent': SeaIsleComponent
}
