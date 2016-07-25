var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var GraphicsServiceComponent = React.createClass({


  render: function(){

    return(
      <div className="container-fluid">
        <div className="practice-background">
          <div className="row">
            <div className="graphics-container col-md-12">
              <div className="graphics-title">
                <div className="graphics-logo"></div>
                <h2>Community Planning</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="graphics-statement-container col-md-12">
              <div className="graphics-scroller">
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
      </div>
    )
  }
});



//exports
module.exports = {
  'GraphicsServiceComponent': GraphicsServiceComponent
}
