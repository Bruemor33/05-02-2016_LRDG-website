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
                <li><a onClick={() => scroll.scrollTo(100)}></a></li>
                <li><a onClick={() => scroll.scrollMore(500)}></a></li>
              </ul>
            </div>
            <p>Bounton Beach, FL</p>
            <p id="summary" onClick={this.handleClick} className="harmony-click-event" role="button">
              Project Info<span className="glyphicon glyphicon-chevron-down" />
            </p>
            <div id="harmony-summary" className="dropdown-menu">
              <div className="project-type"><p><span>Project Type:</span>Mixed Use Development</p><br/></div>
              <div className="client-type"><p><span>Client:</span>Epoch Residential</p><br/></div>
              <div className="project-summary"><p>
                Las Ventanas is a Mediterranean style mix-use development located in Boynton Beach, FL.  It features two five-story towers, each with their own courtyard, a private parking garage, a variety of apartment styles and townhomes, retail shopping, restaurants, and professional offices.  Both courtyard designs were inspired by different interpretations of Las Ventanas, which is Spanish for “The Windows.”  One courtyard has curvilinear geometries implying movement through the window, while the other courtyard is beautifully formal suggesting views from the windows.  The design program included resort style swimming pools, spas, dining areas, lounge areas, outdoor grill areas, outdoor fire pits, vehicular entrance features, decorative paving, and signage.  Landscape, hardscape, lighting, and irrigation systems work in unison with the architecture to accentuate the narrative of the Mediterranean theme.
              </p></div>
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
