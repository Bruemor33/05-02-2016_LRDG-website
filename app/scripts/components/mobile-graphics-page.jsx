var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobileGraphicsServiceComponent = React.createClass({


  render: function(){

    return(
      <div className="container-fluid">
        <div className="mobile-graphics-background col-md-12">
          <div className="mobile-graphics-writeup-container col-md-5">
            <div className="row">
              <div className="mobile-graphics-container col-md-12">
                <div className="mobile-graphics-title">
                  <h2>Graphics</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-graphics-statement-container col-md-12">
                <div className="mobile-graphics-scroller">
                  <p>Each project develops its own personality and signature. This becomes the Community Brand that influences the planning, design, marketing and sales efforts. It is the detail of a logo, a font style, a color palette and a material selection that weaves visual continuity throughout. The community’s design vocabulary is reinforced through the following graphic expressions:</p>
                  <ul>
                    <li>
                      <p>Illustrative Site Plan Renderings</p>
                    </li>
                    <li>
                      <p>Conceptual Renderings</p>
                    </li>
                    <li>
                      <p>Sketch-Up Perspectives</p>
                    </li>
                    <li>
                      <p>Marketing and Sales Graphics</p>
                    </li>
                    <li>
                      <p>Community Branding Booklets</p>
                    </li>
                    <li>
                      <p>Logo Design</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-construction-images-container col-md-7">
            <div className="row">
              <div className="mobile-construction-row-one col-md-12">
                <div className="mobile-image-one-spacing col-md-6">
                  <div className="mobile-graphics-image-one"></div>
                </div>
                <div className="mobile-image-two-spacing col-md-6">
                  <div className="mobile-graphics-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-construction-row-two col-md-12">
                <div className="mobile-image-three-spacing col-md-6">
                  <div className="mobile-graphics-image-three"></div>
                </div>
                <div className="mobile-image-four-spacing col-md-6">
                  <div className="mobile-graphics-image-four"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});



//exports
module.exports = {
  'MobileGraphicsServiceComponent': MobileGraphicsServiceComponent
}
