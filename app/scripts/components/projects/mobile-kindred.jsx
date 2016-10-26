var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobileKindred = React.createClass({



  render: function(){

    return (

      <div className="container-fluid" id="mobile-kindred">
        <div className="mobile-kindred-background col-md-12">
          <div className="mobile-kindred-writeup-container col-md-5">
            <div className="row">
              <div className="mobile-kindred-container col-md-12">
                <div className="mobile-kindred-title">
                  <h2>Kindred</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-kindred-statement-container col-md-12">
                <p>Osceola County, FL</p>
                <p>Size: 1,450 Acres, 3,000 Units</p>

                <p>Located in Osceola County, FL, the Town of Kindred is a piece of land rich in local historic significance. Once the site of the Partin Family Heart Bar Ranch, the Town of Kindred is a place where family, community and the great outdoors are the foundations of the “Kindred” quality of life. Within Kindred, there’s access to Lake Tohopekaliga and multiple residential villages all integrated with sidewalks, trails, and various parks serving as common meeting places. Kindred’s aesthetic provides comfortable warmth, stability, a variety of architectural design styles, and an abundance of healthy lifestyle amenities that are interconnected to encourage and celebrate community.</p>

                <p>Project Type: Master-Planned Community Development</p>
                <p>Client: DR Horton, Inc.</p>

                <ul>
                  <p>Design Team:</p>
                  <li>
                    <p>Land Resource Design Group, Inc.</p>
                  </li>

                  <li>
                    <p>Boyd Civil Engineering, Inc.</p>
                  </li>

                  <li>
                    <p>American Surveying & Mapping</p>
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
          <div className="mobile-kindred-images-container col-md-7">
            <div className="row">
              <div className="mobile-kindred-row-one col-md-12">
                <div className="kindred-image-one-spacing col-md-6">
                  <div className="mobile-kindred-image-one"></div>
                </div>
                <div className="kindred-two-spacing col-md-6">
                  <div className="mobile-kindred-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-kindred-row-two col-md-12">
                <div className="kindred-image-three-spacing col-md-6">
                  <div className="mobile-kindred-image-three"></div>
                </div>
                <div className="kindred-image-four-spacing col-md-6">
                  <div className="mobile-kindred-image-four"></div>
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
  'MobileKindred': MobileKindred
}
