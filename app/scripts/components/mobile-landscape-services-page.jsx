var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobileLandscapeArchitectureComponent = React.createClass({


  render: function(){

    return(
      <div className="container-fluid">
        <div className="mobile-landscape-background col-md-12">
          <div className="mobile-landscape-service-container col-md-5">
            <div className="row">
              <div className="mobile-landscape-architecture-container col-md-12">
                <div className="mobile-landscape-architecture-title">
                  <div className="mobile-landscape-architecture-logo"></div>
                  <h2>Landscape Architecture</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-landscape-architecture-statement-container col-md-12">
                <div className="mobile-landscape-scroller">
                  <p>Landscape Architecture serves as a continuum of design influence throughout the entire community development process. It plays a major role in establishing design criteria through the planning process, provides CAD-generated site plans as a foundation for the project’s engineering process, and provides programming, design, and implementation assistance in the form of construction administration.</p>

                  <p>The Landscape Architecture team influences our communities through the following services:</p>

                  <ul>
                    <li>
                      <p>Community Branding</p>
                    </li>
                    <li>
                      <p>Community Planning</p>
                    </li>
                    <li>
                      <p>Community Design Guidelines</p>
                    </li>
                    <li>
                      <p>Schematic Design</p>
                    </li>
                    <li>
                      <p>Design Development</p>
                    </li>
                    <li>
                      <ul>
                        <p>Final Construction Documents</p>
                        <li>
                          <p>Planting Plans</p>
                        </li>
                        <li>
                          <p>Irrigation Plans</p>
                        </li>
                        <li>
                          <p>Hardscape Layout Plans</p>
                        </li>
                        <li>
                          <p>Grading Plans</p>
                        </li>
                        <li>
                          <p>Hardscape Details</p>
                        </li>
                        <li>
                          <p>Hardscape Material Specifications</p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>Graphic and Signage Design</p>
                    </li>
                    <li>
                      <p>Pool and Water Feature Design</p>
                    </li>
                    <li>
                      <p>CDD Landscape Architecture Management</p>
                    </li>
                    <li>
                      <p>Permitting Documents</p>
                    </li>
                    <li>
                      <p>Design budgeting and cost estimating</p>
                    </li>
                    <li>
                      <p>Park Design</p>
                    </li>
                    <li>
                      <p>Urban Renewal</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-landscape-images-container col-md-7">
            <div className="row">
              <div className="mobile-landscape-row-one col-md-12">
                <div className="mobile-landscape-one-spacing col-md-4">
                  <div className="mobile-landscape-image-one"></div>
                </div>
                <div className="mobile-landscape-two-spacing col-md-4">
                  <div className="mobile-landscape-image-two"></div>
                </div>
                <div className="mobile-landscape-three-spacing col-md-4">
                  <div className="mobile-landscape-image-three"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-landscape-row-two col-md-12">
                <div className="mobile-landscape-one-spacing col-md-4">
                  <div className="mobile-landscape-image-four"></div>
                </div>
                <div className="mobile-landscape-two-spacing col-md-4">
                  <div className="mobile-landscape-image-five"></div>
                </div>
                <div className="mobile-landscape-three-spacing col-md-4">
                  <div className="mobile-landscape-image-six"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-landscape-row-three col-md-12">
                <div className="mobile-landscape-one-spacing col-md-4">
                  <div className="mobile-landscape-image-seven"></div>
                </div>
                <div className="mobile-landscape-two-spacing col-md-4">
                  <div className="mobile-landscape-image-eight"></div>
                </div>
                <div className="mobile-landscape-three-spacing col-md-4">
                  <div className="mobile-landscape-image-nine"></div>
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
  'MobileLandscapeArchitectureComponent': MobileLandscapeArchitectureComponent
}
