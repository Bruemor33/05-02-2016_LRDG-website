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

                <p>From the initial community vision, the development of Harmony set out to create a new town to improve the health and well-being of all by emphasizing relationships between residents, animals and nature.  Located just 7 miles east of St. Cloud, FL, Phase 1 of this 11,000-acre new town offers a Johnny Miller Signature Golf Course, a quaint downtown, eight TND designed neighborhoods, a lakeshore linear park and community parks throughout.  As a result of the planning and design solutions that involved offering pet-friendly environments with dog parks, nature enriched culture with protected wildlife environments and community trail access, a commitment to pristine Buck Lake with a community dock and boating limited to paddle, and electrical and solar-powered motors, along with use of native planting materials and other initiatives, Harmony became the first large-scale master-planned community to be certified by the Florida Green Building Coalition.</p>

                <p>Project Type: Master-Planned Community</p>
                <p>Client: Harmony Development Company and the Harmony CDD</p>

                <ul>
                  <p>Design Team:</p>
                  <li>
                    <p>Land Resource Design Group - formerly provided services as Miller Einhouse Rymer & Boyd</p>
                  </li>
                </ul>

                <ul>
                  <p>Project Services:</p>
                  <li>
                    <p>Neighborhood Planning</p>
                  </li>

                  <li>
                    <p>Parking Planning and Design</p>
                  </li>

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
