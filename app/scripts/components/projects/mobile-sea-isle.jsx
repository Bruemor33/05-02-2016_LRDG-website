var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobileSeaIsle = React.createClass({



  render: function(){

    return (

      <div className="container-fluid" id="mobile-sea-isle">
        <div className="mobile-sea-isle-background col-md-12">
          <div className="mobile-sea-isle-writeup-container col-md-5">
            <div className="row">
              <div className="mobile-sea-isle-container col-md-12">
                <div className="mobile-sea-isle-title">
                  <h2>Nona Park Village</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-sea-isle-statement-container col-md-12">
                <p>Orange County, FL</p>
                <p>Size: 15.7 Acres, 356 Units</p>

                <p>Located within the Sea World Orlando Design Corridor, Sea Isle is a coastal inspired, multi-family community with sand, landscape, bold colored accents, and rich textures used to create a unique, resort-style sense of place.  Amenities near the clubhouse were designed on axis with different clubhouse architectural elements to maximize space efficacy, views, and use.  In addition to the 356 units, the design program includes a resort style swimming pool, dog park, outdoor fireplace, grill stations, dining area, gated entrance feature, custom columns, decorative paving, and lush landscaping.</p>

                <div className="project-type"><p>Project Type: Multi-Family Residential</p><br/></div>
                <div className="client-type"><p>Client: Epoch Properties</p><br/></div>

                <ul>
                  <p>Design Team:</p>
                  <li>
                    <p>Land Resource Design Group, Inc.</p>
                  </li>

                  <li>
                    <p>Dave Schmitt Engineering, Inc.</p>
                  </li>

                  <li>
                    <p>Charlin, Brock & Associates</p>
                  </li>
                </ul>

                <ul>
                  <p>Project Services:</p>

                  <li>
                    <p>Hardscape Design</p>
                  </li>

                  <li>
                    <p>Landscape Design</p>
                  </li>

                  <li>
                    <p>Lighting Design</p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div className="mobile-sea-isle-images-container col-md-7">
            <div className="row">
              <div className="mobile-sea-isle-row-one col-md-12">
                <div className="sea-isle-image-one-spacing col-md-6">
                  <div className="mobile-sea-isle-image-one"></div>
                </div>
                <div className="sea-isle-two-spacing col-md-6">
                  <div className="mobile-sea-isle-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-sea-isle-row-two col-md-12">
                <div className="sea-isle-image-three-spacing col-md-6">
                  <div className="mobile-sea-isle-image-three"></div>
                </div>
                <div className="sea-isle-image-four-spacing col-md-6">
                  <div className="mobile-sea-isle-image-four"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )

  }

});



module.exports = {
  'MobileSeaIsle': MobileSeaIsle
}
