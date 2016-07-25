var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var OverviewComponent = React.createClass({


  render: function(){

    return(
      <div className="container-fluid">
        <div className="practice-background">
          <div className="row">
            <div className="practice-container col-md-12">
              <div className="overview-title">
                <div className="overview-logo"></div>
                <h2>Land Resource Design Group</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="statement-container col-md-12">
              <div className="scroller">
                <p>Land Resource Design Group, aka LRDG, was founded by long time Central Florida landscape architect Barry H. Rymer.  Mr. Rymer has practiced land planning and landscape architecture in the Central Florida and throughout the southeast United States for over 30 years.</p>
                <p>LRDG was formed with the philosophy of viewing land as a valuable resource for man's sustainability through improving our quality of life, environmental stewardship and economic prosperity. LRDG practices this philosophy through the planning, design and implementation of new communities and the enhancement of existing communities.</p>
                <p>LRDG's professional staff have over 60 years of Central Florida planning and landscape architecture experience in providing services in the following private and public markets.</p>
                <h4>What We Do</h4>
                <ul>
                  <li>
                    <a href="#overview/community">Community Planning</a>
                  </li>
                  <li>
                    <a>Landscape Architecture</a>
                  </li>
                  <li>
                    <a>Construction Administration</a>
                  </li>
                  <li>
                    <a>Graphics</a>
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
  'OverviewComponent': OverviewComponent
}
