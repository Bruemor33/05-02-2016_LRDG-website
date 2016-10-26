var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobileLasVentanas = React.createClass({



  render: function(){

    return (

      <div className="container-fluid" id="mobile-ventanas">
        <div className="mobile-ventanas-background col-md-12">
          <div className="mobile-ventanas-writeup-container col-md-5">
            <div className="row">
              <div className="mobile-ventanas-container col-md-12">
                <div className="mobile-ventanas-title">
                  <h2>Las Ventanas</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-ventanas-statement-container col-md-12">
                <p>Boynton Beach, FL</p>
                <p>Size: 15 acres, 494 units</p>

                <p>Las Ventanas is a Mediterranean style mix-use development located in Boynton Beach, FL.  It features two five-story towers, each with their own courtyard, a private parking garage, a variety of apartment styles and townhomes, retail shopping, restaurants, and professional offices.  Both courtyard designs were inspired by different interpretations of Las Ventanas, which is Spanish for “The Windows.”  One courtyard has curvilinear geometries implying movement through the window, while the other courtyard is beautifully formal suggesting views from the windows.  The design program included resort style swimming pools, spas, dining areas, lounge areas, outdoor grill areas, outdoor fire pits, vehicular entrance features, decorative paving, and signage.  Landscape, hardscape, lighting, and irrigation systems work in unison with the architecture to accentuate the narrative of the Mediterranean theme.</p>

                <p>Project Type: Mixed Use Development – Mid Rise</p>
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
                    <p>Lighting Design</p>
                  </li>

                  <li>
                    <p>Wayfinding</p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div className="mobile-ventanas-images-container col-md-7">
            <div className="row">
              <div className="mobile-ventanas-row-one col-md-12">
                <div className="ventanas-image-one-spacing col-md-6">
                  <div className="mobile-ventanas-image-one"></div>
                </div>
                <div className="ventanas-two-spacing col-md-6">
                  <div className="mobile-ventanas-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-ventanas-row-two col-md-12">
                <div className="ventanas-image-three-spacing col-md-6">
                  <div className="mobile-ventanas-image-three"></div>
                </div>
                <div className="ventanas-image-four-spacing col-md-6">
                  <div className="mobile-ventanas-image-four"></div>
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
  'MobileLasVentanas': MobileLasVentanas
}
