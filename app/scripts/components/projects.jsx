var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');



var ProjectsComponent = React.createClass({


  render: function(){

    return(
      <div className="container">
        <div className="page-background"></div>
        <div className="row">
          <div className="project-one-container col-md-12">

            <div className="plaza-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href="#plazaUniversity">
                  <li className="plaza-background">
                    <h3 className="zero">Plaza at University</h3>
                    <p className="zero">location here</p>
                    <p className="zero">Size: values here</p>
                  </li>
                  <li><img className="top" src="images/1-plaza.jpg" /></li>
                </a>
              </ul>
            </div>

            <div className="nonapark-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href="#nonapark">
                  <li className="nona-background">
                    <h3 className="zero">Nona Park</h3>
                    <p className="zero">location here</p>
                    <p className="zero">Size: values here</p>
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
                    <p className="zero">location here</p>
                    <p className="zero">Size: values here</p>
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
                  <li><img className="top" src="images/emily-concept-1.jpg" /></li>
                </a>
              </ul>
            </div>

            <div className="waterleigh-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href={"#waterleigh"}>
                  <li className="waterleigh-background">
                    <h3 className="zero">Waterleigh</h3>
                    <p className="zero">location here</p>
                    <p className="zero">Size: values here</p>
                  </li>
                  <li><img className="top" src="images/emily-concept-2.jpg" /></li>
                </a>
              </ul>
            </div>

            <div className="altis-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href="#altis">
                  <li className="altis-background">
                    <h3 className="zero">Altis at Sandlake</h3>
                    <p className="zero">location here</p>
                    <p className="zero">Size: values here</p>
                  </li>
                  <li><img className="top" src="images/emily-concept-3.jpg" /></li>
                </a>
              </ul>
            </div>

            <div className="dwell-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href="#dwell">
                  <li className="dwell-background">
                    <h3 className="zero">Dwell at Nona Place</h3>
                    <p className="zero">location here</p>
                    <p className="zero">Size: values here</p>
                  </li>
                  <li><img className="top" src="images/emily-concept-4.jpg" /></li>
                </a>
              </ul>
            </div>

            <div className="ventanas-landing col-md-3">
              <ul className="hover-effect-2 effect">
                <a href="#ventanas">
                  <li className="ventanas-background">
                    <h3 className="zero">Las Ventanas</h3>
                    <p className="zero">location here</p>
                    <p className="zero">Size: value here</p>
                  </li>
                  <li><img className="top" src="images/emily-concept-1.jpg" /></li>
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
