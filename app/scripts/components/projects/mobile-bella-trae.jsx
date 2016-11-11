var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobileMagicVillage = React.createClass({



  render: function(){

    return (

      <div className="container-fluid" id="mobile-bella">
        <div className="mobile-bella-background col-md-12">
          <div className="mobile-bella-writeup-container col-md-5">
            <div className="row">
              <div className="mobile-bella-container col-md-12">
                <div className="mobile-bella-title">
                  <h2>Bella Trae</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-bella-statement-container col-md-12">
                <p>Champion’s Gate, FL</p>
                <p>Size: 94 acres, 710 units</p>

                <p>Bella Trae, a Mediterranean-Style residential development, offers three housing types and provides a Del Webb lifestyle for the residents including the 12,500 sf clubhouse with a zero-entry pool and spa, a putting green, bocce ball courts, and access to numerous golf and tennis amenities. It is located within the mixed-use resort community of Champions Gate, the home of two Greg Norman Golf courses and the David Ledbetter Golf Academy.</p>

                <p>As the community name suggests, Italian themes were extracted to create a “beautiful” aesthetic starting with the stately elegance of Italian cypress trees working in concert with the Mediterranean-themed architectural facades of the community buildings. The main community intersection creates a strong sense of place where the four quadrants come together to celebrate the arrival point with Italian cypress trees planted in gravel beds, citrus trees in the median, gated entrances of stucco walls, accent columns with barreled-tiled roof caps to match the guardhouse, prominent signage, and fountains.</p>

                <p>Project Type: Resort Residential</p>
                <p>Client: Pulte Homes</p>

                <ul>
                  <p>Design Team:</p>
                  <li>
                    <p>Land Resource Design Group, Inc.</p>
                  </li>
                </ul>

                <ul>
                  <p>Project Services:</p>
                  <li>
                    <p>Community Theming</p>
                  </li>

                  <li>
                    <p>Landscape Design</p>
                  </li>    

                  <li>
                    <p>Hardscape Design</p>
                  </li>

                  <li>
                    <p>Irrigation Design</p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div className="mobile-bella-images-container col-md-7">
            <div className="row">
              <div className="mobile-bella-row-one col-md-12">
                <div className="bella-image-one-spacing col-md-6">
                  <div className="mobile-bella-image-one"></div>
                </div>
                <div className="bella-two-spacing col-md-6">
                  <div className="mobile-bella-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-bella-row-two col-md-12">
                <div className="bella-image-three-spacing col-md-6">
                  <div className="mobile-bella-image-three"></div>
                </div>
                <div className="bella-image-four-spacing col-md-6">
                  <div className="mobile-bella-image-four"></div>
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
  'MobileMagicVillage': MobileMagicVillage
}
