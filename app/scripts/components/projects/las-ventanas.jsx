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


var LasVentanasComponent = React.createClass({

  handleClick: function(){

    $('#ventanas-summary').toggle('slow');

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
        <div classNme="las-ventanas-container col-md-12">
          <div id="main-nav" className="writeup">
            <div className="project-nav">
              <h2 className="ventanas-title">Las Ventanas</h2>
              <ul className="image-links">

                <li className="ventanas-list-item" role="button">
                  <Link activeClass="active" className="ventanas-two" to="ventanas-two" spy={true} smooth={true} duration={500}>

                  </Link>
                </li>

                <li className="ventanas-list-item" role="button">
                  <Link activeClass="active" className="ventanas-three" to="ventanas-three" spy={true} smooth={true} duration={500}>

                  </Link>
                </li>

                <li className="ventanas-list-item" role="button">
                  <Link activeClass="active" className="ventanas-four" to="ventanas-four" spy={true} smooth={true} duration={500}>

                  </Link>
                </li>

                <li className="ventanas-list-item" role="button">
                  <Link activeClass="active" className="ventanas-one" to="ventanas-one" spy={true} smooth={true} duration={500}>

                  </Link>
                </li>

                <li><a onClick={function(){scroll.scrollTo(100)}}></a></li>

                <li><a onClick={function(){scroll.scrollMore(500)}}></a></li>

              </ul>
            </div>
            <p>Boynton Beach, FL</p>
            <p id="summary" onClick={this.handleClick} className="ventanas-click-event" role="button">
              Project Info<span className="arrow"><i className="fa fa-sort-desc fa-2x" aria-hidden="true"></i></span>
            </p>
            <div id="ventanas-summary" className="dropdown-menu">
              <div className="summary-container">
                <div className="project-type"><p>Project Type: Mixed Use Development – Mid Rise</p><br/></div>
                <div className="client-type"><p>Client: Epoch Residential</p><br/></div>
                <div className="design-team">
                  <h4 className="design-title">Design Team</h4>
                  <ul className="team-list">
                    <li>Land Resource Design Group, Inc.</li>
                  </ul>
                </div>
                <div className="project-services">
                  <h4 className="services-title">Project Services:</h4>
                  <ul className="services-list">
                    <li>Hardscape Design</li>
                    <li>Landscape Design</li>
                    <li>Lighting Design</li>
                    <li>Wayfinding</li>
                  </ul>
                </div>
                <div className="project-summary"><p>
                  Las Ventanas is a Mediterranean style mix-use development located in Boynton Beach, FL.  It features two five-story towers, each with their own courtyard, a private parking garage, a variety of apartment styles and townhomes, retail shopping, restaurants, and professional offices.  Both courtyard designs were inspired by different interpretations of Las Ventanas, which is Spanish for “The Windows.”  One courtyard has curvilinear geometries implying movement through the window, while the other courtyard is beautifully formal suggesting views from the windows.  The design program included resort style swimming pools, spas, dining areas, lounge areas, outdoor grill areas, outdoor fire pits, vehicular entrance features, decorative paving, and signage.  Landscape, hardscape, lighting, and irrigation systems work in unison with the architecture to accentuate the narrative of the Mediterranean theme.
                </p></div>
              </div>
            </div>
          </div>
        </div>
        <div id="ventanas-one"></div>
        <div id="ventanas-two"></div>
        <div id="ventanas-three"></div>
        <div id="ventanas-four"></div>
      </div>
    )
  }
})





//exports
module.exports = {
  'LasVentanasComponent': LasVentanasComponent
}
