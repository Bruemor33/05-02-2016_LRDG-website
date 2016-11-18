var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobileCommunityPlanningComponent = React.createClass({


  render: function(){

    return(
      <div className="container-fluid">
        <div className="mobile-community-background col-md-12">
          <div className="mobile-community-writeup-container col-md-5">
            <div className="row">
              <div className="mobile-community-container col-md-12">
                <div className="mobile-community-title">
                  <h2>Community Planning</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-community-statement-container col-md-12">
                <div className="mobile-community-scroller">
                  <p>Community planning is the initial and most critical opportunity to create value through resource-based land planning. This allows the establishment of optimal land use classifications, site-specific design criteria, and marketable densities. Combined, these assist in creating an architectural canvas that define successful and viable “outdoor living spaces” throughout the community.</p>
                  <p>Our community planning develops the value of the land through the skillful execution of the following services:</p>
                  <ul>
                    <li>
                      <p>Projects Programming</p>
                    </li>
                    <li>
                      <p>Site Analysis and Due Diligence Research</p>
                    </li>
                    <li>
                      <p>Land Planning</p>
                    </li>
                    <li>
                      <p>Golf Course Routing</p>
                    </li>
                    <li>
                      <p>Permitting Coordination</p>
                    </li>
                    <li>
                      <p>Consultant Team Leader Coordination</p>
                    </li>
                    <li>
                      <p>Design Process Coordination</p>
                    </li>
                    <li>
                      <p>Rezoning and Comprehensive Plan Amendment Exhibit Preparation</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-community-images-container col-md-7">
            <div className="row">
              <div className="mobile-construction-row-one col-md-12">
                <div className="mobile-image-one-spacing col-md-6">
                  <div className="mobile-community-image-one"></div>
                </div>
                <div className="mobile-image-two-spacing col-md-6">
                  <div className="mobile-community-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-construction-row-two col-md-12">
                <div className="mobile-image-three-spacing col-md-6">
                  <div className="mobile-community-image-three"></div>
                </div>
                <div className="mobile-image-four-spacing col-md-6">
                  <div className="mobile-community-image-four"></div>
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
  'MobileCommunityPlanningComponent': MobileCommunityPlanningComponent
}
