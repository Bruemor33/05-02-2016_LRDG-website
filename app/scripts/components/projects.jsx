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
              <div className="transparent-background">
                <h3>Kindred</h3>
                <p>Osceola County, Fl</p>
                <p>Project type: Single Family Community Development</p>
                <p>Size: 1,450 Acres, 3,000 Units</p>
              </div>
            </div>

            <div className="waterleigh-landing col-md-4">
              <div className="transparent-background">
                <h3>Waterleigh</h3>
                <p>location here</p>
                <p>Project Type: Single Family Community Development</p>
                <p>Size: values here</p>
              </div>
            </div>

            <div className="nonapark-landing col-md-4">
              <div className="transparent-background">
                <h3>Nona Park</h3>
                <p>location here</p>
                <p>Project Type: type here</p>
                <p>Size: values here</p>
              </div>
            </div>

            <div className="seaisle-landing col-md-4">
              <div className="transparent-background">
                <h3>Sea Isle</h3>
                <p>location here</p>
                <p>Project Type: type here</p>
                <p>Size: values here</p>
              </div>
            </div>

            <div className="altis-landing col-md-4">
              <div className="transparent-background">
                <h3>Altis at Sandlake</h3>
                <p>location here</p>
                <p>Project Type: type here</p>
                <p>Size: values here</p>
              </div>
            </div>

            <div className="dwell-landing col-md-4">
              <div className="transparent-background">
                <h3>Dwell at Nona Place</h3>
                <p>location here</p>
                <p>Project Type: type here</p>
                <p>Size: values here</p>
              </div>
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
