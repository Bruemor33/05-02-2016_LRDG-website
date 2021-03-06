var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');



var ProjectsComponent = React.createClass({


  render: function(){

    return(
      <div className="container-fluid">
        <div className="page-background"></div>
        <div className="row">
          <div className="project-one-container col-md-12">

            <div className="plaza-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href="#plazaUniversity">
                  <li className="plaza-background">
                    <h3 className="zero project-title">Plaza at University</h3>
                    <p className="zero">Orlando, FL</p>
                    <p className="zero">Size: 13.1 Acres, 355 Units/1,330 Student Beds, 64,457 s.f. Commercial Retail</p>
                  </li>
                  <li><img className="top" src="images/tn-plaza.png" /></li>
                </a>
              </ul>
            </div>

            <div className="nonapark-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href="#nonapark">
                  <li className="nona-background">
                    <h3 className="zero">Nona Park</h3>
                    <p className="zero">Orlando, FL</p>
                    <p className="zero">Size: 13.8 Acres, 303 Units</p>
                  </li>
                  <li><img className="top" src="images/5-nona-park-village.jpg"/></li>
                </a>
              </ul>
            </div>

            <div className="seaisle-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href="#seaisle">
                  <li className="seaisle-background">
                    <h3 className="zero">Sea Isle</h3>
                    <p className="zero">Orange County, FL</p>
                    <p className="zero">Size: 15.7 Acres, 356 Units</p>
                  </li>
                  <li><img className="top" src="images/tn-sea-isle.jpg" /></li>
                </a>
              </ul>
            </div>

            <div className="kindred-writeup col-md-3">
              <ul className="hover-effect-2 effect">
                <a href={"#kindred"}>
                  <li className="kindred-background">
                    <h3 className="zero">Kindred</h3>
                    <p className="zero">Osceola County, Fl</p>
                    <p className="zero">Size: 1,450 Acres, 3,000 Units</p>
                  </li>
                  <li><img className="top" src="images/tn-kindred.png" /></li>
                </a>
              </ul>
            </div>

            <div className="waterleigh-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href={"#waterleigh"}>
                  <li className="waterleigh-background">
                    <h3 className="zero">Waterleigh</h3>
                    <p className="zero">Orange County, FL</p>
                    <p className="zero">Size: Approx.1600 Acres, 3,500 units</p>
                  </li>
                  <li><img className="top" src="images/tn-waterleigh.png" /></li>
                </a>
              </ul>
            </div>

            <div className="altis-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href="#altis">
                  <li className="altis-background">
                    <h3 className="zero">Altis at Sandlake</h3>
                    <p className="zero">Orange County, FL</p>
                    <p className="zero">Size: 13.5 Acres, 315 Units</p>
                  </li>
                  <li><img className="top" src="images/tn-altis-sandlake.png" /></li>
                </a>
              </ul>
            </div>

            <div className="dwell-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href="#dwell">
                  <li className="dwell-background">
                    <h3 className="zero">Dwell at Nona Place</h3>
                    <p className="zero">Orlando, FL</p>
                    <p className="zero">Size: 19.2 Acres, 274 Units</p>
                  </li>
                  <li><img className="top" src="images/tn-2-dwell-nonaplace.png" /></li>
                </a>
              </ul>
            </div>

            <div className="ventanas-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href="#ventanas">
                  <li className="ventanas-background">
                    <h3 className="zero">Las Ventanas</h3>
                    <p className="zero">Boynton Beach, FL</p>
                    <p className="zero">Size: 15 acres, 494 units</p>
                  </li>
                  <li><img className="top" src="images/tn-las-ventanas.png" /></li>
                </a>
              </ul>
            </div>

            <div className="brisas-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href="#brisas">
                  <li className="brisas-background">
                    <h3 className="zero">Las Brisas</h3>
                    <p className="zero">Round Rock, TX</p>
                    <p className="zero">Size: 29.9 acres, 414 units</p>
                  </li>
                  <li><img className="top" src="images/tn-las-brisas.png" /></li>
                </a>
              </ul>
            </div>


            <div className="brisas-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href="#harmony">
                  <li className="brisas-background">
                    <h3 className="zero">Harmony</h3>
                    <p className="zero">Osceola County, FL</p>
                    <p className="zero">Size: Phase 1 - Approximately 1,000 Acres</p>
                  </li>
                  <li><img className="top" src="images/tn-harmony.png" /></li>
                </a>
              </ul>
            </div>
            <div className="brisas-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href="#magic">
                  <li className="brisas-background">
                    <h3 className="zero">Magic Village</h3>
                    <p className="zero">Osceola County, Fl</p>
                    <p className="zero">Size: 21 acres, 188 units</p>
                  </li>
                  <li><img className="top" src="images/tn-magic-village.png" /></li>
                </a>
              </ul>
            </div>
            <div className="brisas-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href="#bella">
                  <li className="brisas-background">
                    <h3 className="zero">Bella Trea</h3>
                    <p className="zero">Champion’s Gate, FL</p>
                    <p className="zero">Size: 94 acres, 710 units</p>
                  </li>
                  <li><img className="top" src="images/tn-bella-trae.png" /></li>
                </a>
              </ul>
            </div>

          </div>
        </div>
      </div>
    )
  }
})


//Exports
module.exports = {
  'ProjectsComponent': ProjectsComponent
}
