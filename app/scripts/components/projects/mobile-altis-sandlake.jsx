var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobileAltisSandlake = React.createClass({



  render: function(){

    return (

      <div className="container-fluid" id="mobile-altis-sandlake">
        <div className="mobile-altis-sandlake-background col-md-12">
          <div className="mobile-altis-sandlake-writeup-container col-md-5">
            <div className="row">
              <div className="mobile-altis-sandlake-container col-md-12">
                <div className="mobile-altis-sandlake-title">
                  <h2>Altis at Sandlake</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-altis-sandlake-statement-container col-md-12">
                <p>Orange County, FL</p>
                <p>Size: 13.5 Acres, 315 Units</p>

                <p>Located near the Dr. Phillips community of SW Orlando, Altis at Sand Lake is a resort-style multi-family community with a modern/chic landscape design.  Each space takes it shape from the unique and linear layout of the property itself.  Simple and elegant, the linear forms maximize site’s development value and provides an opportunity to create an upscale experience for the residence.  Because of this relationship to the land, Altis at Sand Lake is the largest apartment community in Orlando to receive the National Green Building Standards Award.  Landscape and carefully selected accents with textures are used to define each space and stimulate the senses.  In addition to the 315 units, the design program includes a resort style swimming pool, dog park, community gardens, courtyard with arbors for outdoor dining, and fountain features for leisure reading while relaxing in adirondack chairs.</p>

                <p>Project Type: Multi-family Residential</p>
                <p>Client: Altman Development Corporation</p>

                <ul>
                  <p>Design Team:</p>
                  <li>
                    <p>Land Resource Design Group, Inc.</p>
                  </li>

                  <li>
                    <p>Donald W. McIntosh Associates, Inc.</p>
                  </li>

                  <li>
                    <p>Forum Architecture</p>
                  </li>
                </ul>

                <ul>
                  <p>Project Services:</p>

                  <li>
                    <p>Community Planning</p>
                  </li>

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
          <div className="mobile-altis-sandlake-images-container col-md-7">
            <div className="row">
              <div className="mobile-altis-sandlake-row-one col-md-12">
                <div className="altis-sandlake-image-one-spacing col-md-6">
                  <div className="mobile-altis-sandlake-image-one"></div>
                </div>
                <div className="altis-sandlake-two-spacing col-md-6">
                  <div className="mobile-altis-sandlake-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-altis-sandlake-row-two col-md-12">
                <div className="altis-sandlake-image-three-spacing col-md-6">
                  <div className="mobile-altis-sandlake-image-three"></div>
                </div>
                <div className="altis-sandlake-image-four-spacing col-md-6">
                  <div className="mobile-altis-sandlake-image-four"></div>
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
  'MobileAltisSandlake': MobileAltisSandlake
}
