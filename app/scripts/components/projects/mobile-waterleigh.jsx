var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobileWaterleigh = React.createClass({



  render: function(){

    return (

      <div className="container-fluid" id="mobile-waterleigh">
        <div className="mobile-waterleigh-background col-md-12">
          <div className="mobile-waterleigh-writeup-container col-md-5">
            <div className="row">
              <div className="mobile-waterleigh-container col-md-12">
                <div className="mobile-waterleigh-title">
                  <h2>Waterleigh</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-waterleigh-statement-container col-md-12">
                <p>Orange County, FL</p>
                <p>Size: Approx.1600 Acres, 3,500 units</p>

                <p>Waterleigh is a master-planned community nestled on the banks of scenic Hickorynut Lake in SW Orange County.  The name ‘Waterleigh’, which was born from this intrinsic pairing of water and land, is a combination of the words water and surname, leigh, which means meadow.  The community is centered around a commercial village core and central park system all interconnected with a trail system and multiple lake access points.  In addition to the 110 homes of phase one, the design program includes a Clubhouse amenity with a resort style swimming pool, dog park, community gardens, neighborhood parks, sculpture, streetscapes, tot lots, and multiple picnic areas.</p>

                <p>Phase 1 of Waterleigh was recently completed and the community is rapidly growing.  Known as “Marina Bay Village,” this phase focuses on celebrating its surroundings through the use of artistic elements and naturally inspired materials.</p>

                <p>Project Type: Single-Family Community Development</p>
                <p>Client: DR Horton, Inc.</p>

                <ul>
                  <p>Design Team:</p>
                  <li>
                    <p>Land Resource Design Group, Inc.</p>
                  </li>

                  <li>
                    <p>VHB MillerSellen, Inc.</p>
                  </li>

                  <li>
                    <p>Bio Tech Consulting, Inc.</p>
                  </li>
                  
                  <li>
                    <p>Allen & Company Inc.</p>
                  </li>

                  <li>
                    <p>Universal Engineering Sciences</p>
                  </li>
                </ul>

                <ul>
                  <p>Project Services:</p>

                  <li>
                    <p>Community Visioning</p>
                  </li>

                  <li>
                    <p>Community Naming, Branding, & Programming</p>
                  </li>

                  <li>
                    <p>Full Landscape Architectural Services</p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div className="mobile-waterleigh-images-container col-md-7">
            <div className="row">
              <div className="mobile-waterleigh-row-one col-md-12">
                <div className="waterleigh-image-one-spacing col-md-6">
                  <div className="mobile-waterleigh-image-one"></div>
                </div>
                <div className="waterleigh-two-spacing col-md-6">
                  <div className="mobile-waterleigh-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-waterleigh-row-two col-md-12">
                <div className="waterleigh-image-three-spacing col-md-6">
                  <div className="mobile-waterleigh-image-three"></div>
                </div>
                <div className="waterleigh-image-four-spacing col-md-6">
                  <div className="mobile-waterleigh-image-four"></div>
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
  'MobileWaterleigh': MobileWaterleigh
}
