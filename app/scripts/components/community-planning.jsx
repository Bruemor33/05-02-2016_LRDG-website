var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var CommunityPlanningComponent = React.createClass({


  render: function(){

    return(
      <div className="container-fluid">
        <div className="practice-background col-md-12">
          <div className="community-writeup-container col-md-5">
            <div className="row">
              <div className="community-container col-md-12">
                <div className="community-title">
                  <div className="community-logo"></div>
                  <h2>Community Planning</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="community-statement-container col-md-12">
                <div className="community-scroller">
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
          <div className="construction-images-container col-md-7">
            <div className="row">
              <div className="construction-row-one col-md-12">
                <div className="image-one-spacing col-md-6">
                  <div className="community-image-one"></div>
                </div>
                <div className="image-two-spacing col-md-6">
                  <div className="community-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="construction-row-two col-md-12">
                <div className="image-three-spacing col-md-6">
                  <div className="community-image-three"></div>
                </div>
                <div className="image-four-spacing col-md-6">
                  <div className="community-image-four"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})



//exports
module.exports = {
  'CommunityPlanningComponent': CommunityPlanningComponent
}
