var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var ClientsComponent = React.createClass({


  render: function(){

    return(
      <div className="container-fluid">
        <div className="practice-background">
          <div className="row">
            <div className="clients-container col-md-12">
              <div className="clients-title">
                <div className="overview-logo"></div>
                <h2>Client Listing</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container-cancel col-md-12">
              <div className="client-statement-container col-md-9">
                <div className="scroller">
                  <p>The Following is a sampling of the CLients that LRDG's leadership team has had the privilege to work with during our combined 60+ years of experience in Central Florida</p>

                  <ul className="client-listing col-md-12">
                    <div className="block-one col-md-4">
                      <li>
                        <h5 className="client-listing-catagory">Master-Planned Communities:</h5>
                        <ul className="client-names">
                          <li><p>DR Horton</p></li>
                          <li><p>Harmony Development</p></li>
                          <li><p>Harmony on Lake Eloise, LLC</p></li>
                          <li><p>The Ginn Company</p></li>
                        </ul>
                      </li>
                      <li>
                        <h5 className="client-listing-catagory">Community Development Districts:</h5>
                        <ul className="client-names">
                          <li><p>Anthem Park CDD</p></li>
                          <li><p>Concorde Estates CDD</p></li>
                          <li><p>Harmony CDD</p></li>
                          <li><p>Pine Island CDD</p></li>
                        </ul>
                      </li>
                    </div>

                    <div className="block-two col-md-4">
                      <li>
                        <h5 className="client-listing-catagory">Residential Communities:</h5>
                        <ul className="client-names">
                          <li><p>DR Horton</p></li>
                          <li><p>Hanover Capitol</p></li>
                          <li><p>KB Homes</p></li>
                          <li><p>Pulte Homes</p></li>
                        </ul>
                      </li>
                      <li>
                        <h5 className="client-listing-catagory">Resort/Entertainment:</h5>
                        <ul className="client-names">
                          <li><p>Disney Development Company</p></li>
                          <li><p>Godwin's Gatorland</p></li>
                          <li><p>Timescape Resorts</p></li>
                          <li><p>Walt Disney Imagineering</p></li>
                        </ul>
                      </li>
                      <li>
                        <h5 className="client-listing-catagory">Educational:</h5>
                        <ul className="client-names">
                          <li><p>UCF Convovation Corp.</p></li>
                        </ul>
                      </li>
                    </div>

                    <div className="block-three col-md-4">
                      <li>
                        <h5 className="client-listing-catagory">Multi-Family Communities:</h5>
                        <ul className="client-names">
                          <li><p>Altman Development Company</p></li>
                          <li><p>Crescent Resources</p></li>
                          <li><p>Epock Residential</p></li>
                          <li><p>The Klein Company</p></li>
                        </ul>
                      </li>
                      <li>
                        <h5 className="client-listing-catagory">Sr. Adult Communities:</h5>
                        <ul className="client-names">
                          <li><p>Pulte - Del Webb</p></li>
                          <li><p>Senior LIving Communities</p></li>
                        </ul>
                      </li>
                      <li>
                        <h5 className="client-listing-catagory">Student Housing - Mixed Use:</h5>
                        <ul className="client-names">
                          <li><p>American Campus Communities</p></li>
                        </ul>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="clients-image-container col-md-3">
                <div className="clients-image"></div>
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
  'ClientsComponent': ClientsComponent
}
