var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobileMagicVillage = React.createClass({



  render: function(){

    return (

      <div className="container-fluid" id="mobile-magic">
        <div className="mobile-magic-background col-md-12">
          <div className="mobile-magic-writeup-container col-md-5">
            <div className="row">
              <div className="mobile-magic-container col-md-12">
                <div className="mobile-magic-title">
                  <h2>Magic Village</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-magic-statement-container col-md-12">
                <p>Osceola County, Fl</p>
                <p>Size: 21 acres, 188 units</p>

                <p>Located adjacent to Disney’s Animal Kingdom and Hollywood Studios, Magic Village is a South American inspired oasis consisting of Brazilian forms, textures, colors, and materials that create a rich urban fabric and resort-style experience.  The preservation and maximization of stunning views of Disney’s nightly fireworks was central to the design program.  This idea guided the orientation and adjacent plantings of the picnic, pool, and hammock areas.  LRDG’s role was to design a resort-style beach entry swimming pool, spa, picnic & grill area, lounge areas, decorative paving, and an entrance fountain feature complete with landscape, hardscape, and accent lighting in creating an unforgettable short-term rental experience.</p>

                <p>Project Type: Multi-Family Residential – Vacation Rental</p>
                <p>Client: Magic Village</p>

                <ul>
                  <p>Design Team:</p>
                  <li>
                    <p>Land Resource Design Group, Inc.</p>
                  </li>
                </ul>

                <ul>
                  <p>Project Services:</p>
                  <li>
                    <p>Land Planning</p>
                  </li>

                  <li>
                    <p>Lighting Design</p>
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
          <div className="mobile-magic-images-container col-md-7">
            <div className="row">
              <div className="mobile-magic-row-one col-md-12">
                <div className="magic-image-one-spacing col-md-6">
                  <div className="mobile-magic-image-one"></div>
                </div>
                <div className="magic-two-spacing col-md-6">
                  <div className="mobile-magic-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-magic-row-two col-md-12">
                <div className="magic-image-three-spacing col-md-6">
                  <div className="mobile-magic-image-three"></div>
                </div>
                <div className="magic-image-four-spacing col-md-6">
                  <div className="mobile-magic-image-four"></div>
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
