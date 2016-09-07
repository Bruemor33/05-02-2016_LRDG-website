var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var ConstructionAdministrationComponent = React.createClass({


  render: function(){

    return(
      <div className="container-fluid">
        <div className="practice-background col-md-12">
          <div className="construction-service-container col-md-5">
            <div className="row">
              <div className="construction-container col-md-12">
                <div className="construction-title">
                  <div className="construction-logo"></div>
                  <h2>Construction Administration</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="construction-statement-container col-md-12">
                <div className="construction-scroller">
                  <p>Construction Administration allows the design intent of our plans to be met by serving as liaison between the contactor and the owner. Quality assurance, regulatory compliance, as well as, constructability is a priority from the on-set of the job. Our assistance with the preparation of the bid documents, execution of contracts, construction observations, and close-out documentation help to delivered a built project to the contractual expectations of the Owner. This process often includes:</p>
                  <ul>
                    <li>
                      <p>Construction Estimating</p>
                    </li>
                    <li>
                      <p>Preparation of Bid Documents</p>
                    </li>
                    <li>
                      <p>Facilitating Bid Procurement/Contractor Bid Interviews</p>
                    </li>
                    <li>
                      <p>Review of Construction Contacts</p>
                    </li>
                    <li>
                      <p>Shop Drawing Review</p>
                    </li>
                    <li>
                      <p>Plant Procurement/Tree Tagging</p>
                    </li>
                    <li>
                      <p>Field Observation</p>
                    </li>
                    <li>
                      <p>Quality Assurance</p>
                    </li>
                    <li>
                      <p>Pay Application Review and Approval</p>
                    </li>
                    <li>
                      <p>Project Close-out/Substantial Completion Coordination</p>
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
                  <div className="construction-image-one"></div>
                </div>
                <div className="image-two-spacing col-md-6">
                  <div className="construction-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="construction-row-two col-md-12">
                <div className="image-three-spacing col-md-6">
                  <div className="construction-image-three"></div>
                </div>
                <div className="image-four-spacing col-md-6">
                  <div className="construction-image-four"></div>
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
  'ConstructionAdministrationComponent': ConstructionAdministrationComponent
}
