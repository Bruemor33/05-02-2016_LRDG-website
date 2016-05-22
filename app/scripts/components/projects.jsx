var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');



var ProjectsComponent = React.createClass({


  render: function(){

    return(
      <div className="container-fluid">
        <div className="row">
          <div className="project-one-container col-md-12">

            <div className="kindred-writeup col-md-4">
              <a href={"#kindred"}>
                <div className="transparent-background">
                  <h3>Kindred</h3>
                  <p>Osceola County, Fl</p>
                  <p>Size: 1,450 Acres, 3,000 Units</p>
                </div>
              </a>
            </div>

            <div className="waterleigh-landing col-md-4">
              <a href={"#waterleigh"}>
                <div className="transparent-background">
                  <h3>Waterleigh</h3>
                  <p>location here</p>
                  <p>Size: values here</p>
                </div>
              </a>
            </div>

            <div className="nonapark-landing col-md-4">
              <a href="#nonapark">
                <div className="transparent-background">
                  <h3>Nona Park</h3>
                  <p>location here</p>
                  <p>Size: values here</p>
                </div>
              </a>
            </div>

            <div className="seaisle-landing col-md-4">
              <a href="#seaisle">
                <div className="transparent-background">
                  <h3>Sea Isle</h3>
                  <p>location here</p>
                  <p>Size: values here</p>
                </div>
              </a>
            </div>

            <div className="altis-landing col-md-4">
              <a href="#altis">
                <div className="transparent-background">
                  <h3>Altis at Sandlake</h3>
                  <p>location here</p>
                  <p>Size: values here</p>
                </div>
              </a>
            </div>

            <div className="dwell-landing col-md-4">
              <a href="#dwell">
                <div className="transparent-background">
                  <h3>Dwell at Nona Place</h3>
                  <p>location here</p>
                  <p>Size: values here</p>
                </div>
              </a>
            </div>

            <div cassName="plaza-landing col-md-4">
              <a href="#plazaUniversity">
                <div className="transparent-background">
                  <h3>Plaza at University</h3>
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
