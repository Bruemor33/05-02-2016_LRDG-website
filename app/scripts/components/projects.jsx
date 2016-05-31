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
                  <li className="transparent-background">
                    <h3 className="zero">Plaza at University</h3>
                    <p className="zero">location here</p>
                    <p className="zero">Size: values here</p>
                  </li>
                  <li><img className="top" src="images/1-plaza.jpg" /></li>
                </a>
              </ul>
            </div>

            <div className="nonapark-landing col-md-3">
              <ul className="hoover-effect">
                <li>
                  <figure>
                    <a href="#nonapark">
                      <img className="nonapark-thumbnail" src="images/5-nona-park-village.jpg"/>
                      <figcaption className="transparent-background">
                        <h3>Nona Park</h3>
                        <p>location here</p>
                        <p>Size: values here</p>
                      </figcaption>
                    </a>
                  </figure>
                </li>
              </ul>
            </div>

            <div className="seaisle-landing col-md-3">
              <a href="#seaisle">
                <div className="transparent-background">
                  <h3>Sea Isle</h3>
                  <p>location here</p>
                  <p>Size: values here</p>
                </div>
              </a>
            </div>

            <div className="kindred-writeup col-md-3">
              <a href={"#kindred"}>
                <div className="transparent-background">
                  <h3>Kindred</h3>
                  <p>Osceola County, Fl</p>
                  <p>Size: 1,450 Acres, 3,000 Units</p>
                </div>
              </a>
            </div>

            <div className="waterleigh-landing col-md-3">
              <a href={"#waterleigh"}>
                <div className="transparent-background">
                  <h3>Waterleigh</h3>
                  <p>location here</p>
                  <p>Size: values here</p>
                </div>
              </a>
            </div>

            <div className="altis-landing col-md-3">
              <a href="#altis">
                <div className="transparent-background">
                  <h3>Altis at Sandlake</h3>
                  <p>location here</p>
                  <p>Size: values here</p>
                </div>
              </a>
            </div>

            <div className="dwell-landing col-md-3">
              <a href="#dwell">
                <div className="transparent-background">
                  <h3>Dwell at Nona Place</h3>
                  <p>location here</p>
                  <p>Size: values here</p>
                </div>
              </a>
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
