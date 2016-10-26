var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobileLasBrisas = React.createClass({



  render: function(){

    return (

      <div className="container-fluid" id="mobile-brisas">
        <div className="mobile-brisas-background col-md-12">
          <div className="mobile-brisas-writeup-container col-md-5">
            <div className="row">
              <div className="mobile-brisas-container col-md-12">
                <div className="mobile-brisas-title">
                  <h2>Las Brisas</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-brisas-statement-container col-md-12">
                <p>Round Rock, TX</p>
                <p>Size: 29.9 acres, 414 units</p>

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
          <div className="mobile-brisas-images-container col-md-7">
            <div className="row">
              <div className="mobile-brisas-row-one col-md-12">
                <div className="brisas-image-one-spacing col-md-6">
                  <div className="mobile-brisas-image-one"></div>
                </div>
                <div className="brisas-two-spacing col-md-6">
                  <div className="mobile-brisas-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-brisas-row-two col-md-12">
                <div className="brisas-image-three-spacing col-md-6">
                  <div className="mobile-brisas-image-three"></div>
                </div>
                <div className="brisas-image-four-spacing col-md-6">
                  <div className="mobile-brisas-image-four"></div>
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
  'MobileLasBrisas': MobileLasBrisas
}
