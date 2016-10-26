var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobileHarmony = React.createClass({



  render: function(){

    return (

      <div className="container-fluid" id="mobile-harmony">
        <div className="mobile-harmony-background col-md-12">
          <div className="mobile-harmony-writeup-container col-md-5">
            <div className="row">
              <div className="mobile-harmony-container col-md-12">
                <div className="mobile-harmony-title">
                  <h2>Harmony</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-harmony-statement-container col-md-12">
                <p>Osceola County, FL</p>
                <p>Size: Phase 1 - Approximately 1,000 Acres</p>

                <p>Located in the town of Round Rock, home of Dell Computers, Las Brisas reaches the rental market of this popular tech-cultured community.  With rolling hills as a backdrop, this site features a “Texas” themed development with architectural materials that are indigenous to the area.  It offers a series of three and four story carriage-style residential buildings sensitively positioned with existing rolling terrain to minimize development costs.  The main clubhouse amenity area is highlighted with an organic-shaped, resort-style pool with an interactive fountain spa along with an outdoor kitchen.  The community also offers a smaller pool venue in closer proximity to those who reside higher up on the hill.</p>

                <p>Project Type: Multi-Family</p>
                <p>Client: Epoch Residential</p>

                <ul>
                  <p>Design Team:</p>
                  <li>
                    <p>Land Resource Design Group, Inc.</p>
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
                    <p>Site Planning</p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div className="mobile-harmony-images-container col-md-7">
            <div className="row">
              <div className="mobile-harmony-row-one col-md-12">
                <div className="harmony-image-one-spacing col-md-6">
                  <div className="mobile-harmony-image-one"></div>
                </div>
                <div className="harmony-two-spacing col-md-6">
                  <div className="mobile-harmony-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-harmony-row-two col-md-12">
                <div className="harmony-image-three-spacing col-md-6">
                  <div className="mobile-harmony-image-three"></div>
                </div>
                <div className="harmony-image-four-spacing col-md-6">
                  <div className="mobile-harmony-image-four"></div>
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
  'MobileHarmony': MobileHarmony
}
