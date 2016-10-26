var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobileNonaPark = React.createClass({



  render: function(){

    return (

      <div className="container-fluid" id="mobile-nona">
        <div className="mobile-nona-background col-md-12">
          <div className="mobile-nona-writeup-container col-md-5">
            <div className="row">
              <div className="mobile-nona-container col-md-12">
                <div className="mobile-nona-title">
                  <h2>Nona Park Village</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-nona-statement-container col-md-12">
                <p>Orlando, FL</p>
                <p>Size: 13.8 Acres, 303 Units</p>

                <p>Located in SE Orlando and surrounded by the elegant settings of the Lake Nona District, Nona Park Village is a multi-family community that exhibits the essence of Florida living.  The contemporary design demonstrates the importance and power of axial relationships as a means to organize program elements to maximize the use of space.  The appropriate use of color and texture with both the landscape and hardscape elements help define the spaces and guide residence along providing a true experiential landscape.  In addition to the 303 units, the design program includes a resort style swimming pool, dog park, outdoor fireplace, grill stations, dining area, beach hammocks, bocce ball courts, community garden, custom columns, trellis structures, decorative paving, and lush landscaping.</p>

                <div className="design-team">
                  <h4 className="design-title">Design Team</h4>
                  <ul className="team-list">
                    <li>Land Resource Design Group, Inc.</li>
                    <li>Dave Schmitt Engineering, Inc.</li>
                    <li>Charlin, Brock & Associates</li>
                  </ul>
                </div>

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
          <div className="mobile-nona-images-container col-md-7">
            <div className="row">
              <div className="mobile-nona-row-one col-md-12">
                <div className="nona-image-one-spacing col-md-6">
                  <div className="mobile-nona-image-one"></div>
                </div>
                <div className="nona-two-spacing col-md-6">
                  <div className="mobile-nona-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-nona-row-two col-md-12">
                <div className="nona-image-three-spacing col-md-6">
                  <div className="mobile-nona-image-three"></div>
                </div>
                <div className="nona-image-four-spacing col-md-6">
                  <div className="mobile-nona-image-four"></div>
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
  'MobileNonaPark': MobileNonaPark
}
