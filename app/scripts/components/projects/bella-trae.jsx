var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');
var Scroll = require('react-scroll');


//Scroll Variables
var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;


var BellaTraeComponent = React.createClass({

  handleClick: function(){

    $('#bella-summary').toggle('slow');

  },
  componentDidMount: function(){
    Events.scrollEvent.register('begin', function(to, element){
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function(to, element){
      console.log("end", arguments);
    });
  },
  componentWillUnmount: function(){
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },
  scrollToTop: function(){
    scroll.scrollToTop();
  },
  scrollToBottom: function(){
    scroll.scrollToBottom();
  },
  scrollTo: function(){
    scroll.scrollTo(100);
  },
  scrollMore: function(){
    scroll.scrollMore(100);
  },


  render: function(){


    return(
      <div id="sea-isle-background" className="container-fluid">
        <div className="bella-trae-container col-md-12">
          <div id="main-nav" className="writeup">
            <div className="project-nav">
              <h2 className="bella-title">Bella Trae</h2>
              <ul className="image-links">
                <li className="bella-list-item"><Link activeClass="active" className="bella-two" to="bella-two" spy={true} smooth={true} duration={500}></Link></li>
                <li className="bella-list-item"><Link activeClass="active" className="bella-three" to="bella-three" spy={true} smooth={true} duration={500}></Link></li>
                <li className="bella-list-item"><Link activeClass="active" className="bella-four" to="bella-four" spy={true} smooth={true} duration={500}></Link></li>
                <li className="bella-list-item"><Link activeClass="active" className="bella-one" to="bella-one" spy={true} smooth={true} duration={500}></Link></li>
                <li><a onClick={() => scroll.scrollTo(100)}></a></li>
                <li><a onClick={() => scroll.scrollMore(500)}></a></li>
              </ul>
            </div>
            <p>Champion's Gate, FL</p>
            <p id="summary" onClick={this.handleClick} className="bella-click-event" role="button">
              Project Info<span className="glyphicon glyphicon-chevron-down" />
            </p>
            <div id="bella-summary" className="dropdown-menu">
              <div className="summary-container">
                <div className="project-type"><p>Project Type: Resort Residential</p><br/></div>
                <div className="client-type"><p>Client: Pulte Homes</p><br/></div>
                <div className="design-team">
                  <h4 className="design-title">Design Team:</h4>
                  <ul className="team-list">
                    <li>Land Resource Design Group, Inc.</li>
                  </ul>
                </div>
                <div className="project-services">
                  <h4 className="services-title">Project Services:</h4>
                  <ul className="services-list">
                    <li>Community Theming</li>
                    <li>Hardscape Design</li>
                    <li>Landscape Design</li>
                    <li>Irrigation Design</li>
                  </ul>
                </div>
                <div className="project-summary">
                  <p>
                    Bella Trae, a Mediterranean-Style residential development, offers three housing types and provides a Del Webb lifestyle for the residents including the 12,500 sf clubhouse with a zero-entry pool and spa, a putting green, bocce ball courts, and access to numerous golf and tennis amenities. It is located within the mixed-use resort community of Champions Gate, the home of two Greg Norman Golf courses and the David Ledbetter Golf Academy.
                  </p>
                  <p>
                    As the community name suggests, Italian themes were extracted to create a “beautiful” aesthetic starting with the stately elegance of Italian cypress trees working in concert with the Mediterranean-themed architectural facades of the community buildings. The main community intersection creates a strong sense of place where the four quadrants come together to celebrate the arrival point with Italian cypress trees planted in gravel beds, citrus trees in the median, gated entrances of stucco walls, accent columns with barreled-tiled roof caps to match the guardhouse, prominent signage, and fountains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="bella-one"></div>
        <div id="bella-two"></div>
        <div id="bella-three"></div>
        <div id="bella-four"></div>
      </div>
    )
  }
})





//exports
module.exports = {
  'BellaTraeComponent': BellaTraeComponent
}
