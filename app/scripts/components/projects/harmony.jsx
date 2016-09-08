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


var HarmonyComponent = React.createClass({

  handleClick: function(){

    $('#harmony-summary').toggle('slow');

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
        <div className="harmony-container col-md-12">
          <div id="main-nav" className="writeup">
            <div className="project-nav">
              <h2 className="harmony-title">Harmony</h2>
              <ul className="image-links">
                <li className="harmony-list-item"><Link activeClass="active" className="harmony-two" to="harmony-two" spy={true} smooth={true} duration={500}></Link></li>
                <li className="harmony-list-item"><Link activeClass="active" className="harmony-three" to="harmony-three" spy={true} smooth={true} duration={500}></Link></li>
                <li className="harmony-list-item"><Link activeClass="active" className="harmony-four" to="harmony-four" spy={true} smooth={true} duration={500}></Link></li>
                <li className="harmony-list-item"><Link activeClass="active" className="harmony-one" to="harmony-one" spy={true} smooth={true} duration={500}></Link></li>
                <li><a onClick={function(){scroll.scrollTo(100)}}></a></li>
                <li><a onClick={function(){scroll.scrollMore(500)}}></a></li>
              </ul>
            </div>
            <p>Osceola County, FL</p>
            <p id="summary" onClick={this.handleClick} className="harmony-click-event" role="button">
              Project Info<span className="glyphicon glyphicon-chevron-down" />
            </p>
            <div id="harmony-summary" className="dropdown-menu">
              <div className="summary-container">
                <div className="project-type"><p>Project Type: Master-Planned Community</p><br/></div>
                <div className="client-type"><p>Client: Harmony Development Company and the Harmony CDD</p><br/></div>
                <div className="design-team">
                  <h4 className="design-title">Design Team</h4>
                  <ul className="team-list">
                    <li>Land Resource Design Group - formerly provided services as Miller Einhouse Rymer & Boyd</li>
                  </ul>
                </div>
                <div className="project-services">
                  <h4 className="services-title">Project Services:</h4>
                  <ul className="services-list">
                    <li>Neighborhood Planning</li>
                    <li>Parking Planning and Design</li>
                    <li>Hardscape Design</li>
                    <li>Landscape Design</li>
                  </ul>
                </div>
                <div className="project-summary"><p>
                  From the initial community vision, the development of Harmony set out to create a new town to improve the health and well-being of all by emphasizing relationships between residents, animals and nature.  Located just 7 miles east of St. Cloud, FL, Phase 1 of this 11,000-acre new town offers a Johnny Miller Signature Golf Course, a quaint downtown, eight TND designed neighborhoods, a lakeshore linear park and community parks throughout.  As a result of the planning and design solutions that involved offering pet-friendly environments with dog parks, nature enriched culture with protected wildlife environments and community trail access, a commitment to pristine Buck Lake with a community dock and boating limited to paddle, and electrical and solar-powered motors, along with use of native planting materials and other initiatives, Harmony became the first large-scale master-planned community to be certified by the Florida Green Building Coalition.
                </p></div>
              </div>
            </div>
          </div>
        </div>
        <div id="harmony-one"></div>
        <div id="harmony-two"></div>
        <div id="harmony-three"></div>
        <div id="harmony-four"></div>
      </div>
    )
  }
})





//exports
module.exports = {
  'HarmonyComponent': HarmonyComponent
}
