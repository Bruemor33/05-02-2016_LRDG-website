var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobileDwellNonaPlace = React.createClass({



  render: function(){

    return (

      <div className="container-fluid" id="mobile-dwell-nonaplace">
        <div className="mobile-dwell-nonaplace-background col-md-12">
          <div className="mobile-dwell-nonaplace-writeup-container col-md-5">
            <div className="row">
              <div className="mobile-dwell-nonaplace-container col-md-12">
                <div className="mobile-dwell-nonaplace-title">
                  <h2>Dwell at Nona Place</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-dwell-nonaplace-statement-container col-md-12">
                <p>Orlando, FL</p>
                <p>Size: 19.2 Acres, 274 Units</p>

                <p>Located in the Lake Hart region of SE Orlando and on the shores of beautiful Lake Whippoorwill is Dwell at Nona Place. As a Florida Green Building Coalition certified multi-family community Dwell evokes a contemporary community design that connects the residents to their community, Lake Whippoorwill, and the nearby Lake Nona District.  Creating spaces with upscale amenities and minimal impact to the lake is the guiding force behind the direction of the design.  This is accomplished with curvilinear hardscape elements whose forms were dictated by lake edge geometry.  The curvilinear, resort-style swimming pool features a beach entry, decorative fountains, fabric cabanas, and hammocks.  In addition to the 274 units, the design program includes a dog park, picnic & grill area, dining area, fountain feature, 200’ boardwalk with lake observation deck, custom columns, decorative paving, and lush landscaping.</p>

                <p>Project Type: Multi-Family Community</p>
                <p>Client: The Klein Company</p>

                <ul>
                  <p>Design Team:</p>
                  <li>
                    <p>Land Resource Design Group, Inc.</p>
                  </li>

                  <li>
                    <p>Kelly, Collins, & Gentry, Inc.</p>
                  </li>

                  <li>
                    <p>Forum Architecture</p>
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
                </ul>

              </div>
            </div>
          </div>
          <div className="mobile-dwell-nonaplace-images-container col-md-7">
            <div className="row">
              <div className="mobile-dwell-nonaplace-row-one col-md-12">
                <div className="dwell-nonaplace-image-one-spacing col-md-6">
                  <div className="mobile-dwell-nonaplace-image-one"></div>
                </div>
                <div className="dwell-nonaplace-two-spacing col-md-6">
                  <div className="mobile-dwell-nonaplace-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-dwell-nonaplace-row-two col-md-12">
                <div className="dwell-nonaplace-image-three-spacing col-md-6">
                  <div className="mobile-dwell-nonaplace-image-three"></div>
                </div>
                <div className="dwell-nonaplace-image-four-spacing col-md-6">
                  <div className="mobile-dwell-nonaplace-image-four"></div>
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
  'MobileDwellNonaPlace': MobileDwellNonaPlace
}
