var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');



var SeaIsleComponent = React.createClass({

  handleClick: function(){

    $('#sea-isle-summary').toggle('slow');

  },

  render: function(){


    return(
      <div id="sea-isle-background" className="container-fluid">
        <div classNme="col-md-12">
          <div className="sea-isle-writeup">
            <h2>Sea Isle</h2>
            <div className="image-one"></div>
            <div className="image-two"></div>
            <div className="image-three"></div>
            <p>Orange County, FL</p>
            <p id="summary" onClick={this.handleClick} className="info-click-event" role="button">
              Project Info<span className="glyphicon glyphicon-chevron-down" />
            </p>
            <div id="sea-isle-summary" className="dropdown-menu">
              <div className="project-type"><p><span>Project Type:</span>Single-Family Community Development</p><br/></div>
              <div className="client-type"><p><span>Client:</span>DR Horton, Inc.</p><br/></div>
              <div className="project-summary"><p>
                Located within the Sea World Orlando Design Corridor, Sea Isle is a coastal inspired, multi-family community with sand, landscape, bold colored accents, and rich textures used to create a unique, resort-style sense of place.  Amenities near the clubhouse were designed on axis with different clubhouse architectural elements to maximize space efficacy, views, and use.  In addition to the 356 units, the design program includes a resort style swimming pool, dog park, outdoor fireplace, grill stations, dining area, gated entrance feature, custom columns, decorative paving, and lush landscaping.
              </p></div>
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
