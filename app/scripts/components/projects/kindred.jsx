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


var KindredComponent = React.createClass({

  handleClick: function(){

    $('#kindred-summary').toggle('slow');

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
        <div classNme="col-md-12">
          <div id="main-nav" className="writeup">
            <div className="project-nav">
              <h2 className="kindred-title">Kindred</h2>
              <ul className="image-links">

                <li className="kindred-list-item" role="button">
                  <Link activeClass="active" className="kindred-two" to="kindred-two" spy={true} smooth={true} duration={500}>

                  </Link>
                </li>

                <li className="kindred-list-item" role="button">
                  <Link activeClass="active" className="kindred-three" to="kindred-three" spy={true} smooth={true} duration={500}>

                  </Link>
                </li>

                <li className="kindred-list-item" role="button">
                  <Link activeClass="active" className="kindred-four" to="kindred-four" spy={true} smooth={true} duration={500}>

                  </Link>
                </li>

                <li className="kindred-list-item" role="button">
                  <Link activeClass="active" className="kindred-one" to="kindred-one" spy={true} smooth={true} duration={500}>

                  </Link>
                </li>

                <li><a onClick={function(){scroll.scrollTo(100)}}></a></li>

                <li><a onClick={function(){scroll.scrollMore(500)}}></a></li>

              </ul>
            </div>
            <p>Osceola County, FL</p>
            <p id="summary" onClick={this.handleClick} className="kindred-click-event" role="button">
              Project Info<span className="arrow"><i className="fa fa-sort-desc fa-2x" aria-hidden="true"></i></span>
            </p>
            <div id="kindred-summary" className="dropdown-menu">
              <div className="summary-container">
                <div className="project-type"><p>Project Type: Master-Planned Community Development</p><br/></div>
                <div className="client-type"><p>Client: DR Horton, Inc.</p><br/></div>
                <div className="design-team">
                  <h4 className="design-title">Design Team</h4>
                  <ul className="team-list">
                    <li>Land Resource Design Group, Inc.</li>
                    <li>Boyd Civil Engineering, Inc.</li>
                    <li>American Surveying & Mapping</li>
                  </ul>
                </div>
                <div className="project-services">
                  <h4 className="services-title">Project Services:</h4>
                  <ul className="services-list">
                    <li>Community Visioning</li>
                    <li>Community Naming, Branding, & Programming</li>
                    <li>Full Landscape Architectural Services</li>
                  </ul>
                </div>
                <div className="project-summary"><p>
                  Located in Osceola County, FL, the Town of Kindred is a piece of land rich in local historic significance. Once the site of the Partin Family Heart Bar Ranch, the Town of Kindred is a place where family, community and the great outdoors are the foundations of the “Kindred” quality of life. Within Kindred, there’s access to Lake Tohopekaliga and multiple residential villages all integrated with sidewalks, trails, and various parks serving as common meeting places. Kindred’s aesthetic provides comfortable warmth, stability, a variety of architectural design styles, and an abundance of healthy lifestyle amenities that are interconnected to encourage and celebrate community.
                </p></div>
              </div>
            </div>
          </div>
        </div>
        <div id="kindred-one"></div>
        <div id="kindred-two"></div>
        <div id="kindred-three"></div>
        <div id="kindred-four"></div>
      </div>
    )
  }
})



//Exports
module.exports = {
  'KindredComponent': KindredComponent
}
