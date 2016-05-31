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


var SeaIsleComponent = React.createClass({

  handleClick: function(){

    $('#sea-isle-summary').toggle('slow');

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
        <div className="sea-isle-container col-md-12">
          <div id="main-nav" className="sea-isle-writeup">
            <div className="project-nav">
              <h2 className="project-title">Sea Isle</h2>
              <ul className="image-links">
                <li className="image-list-item"><Link activeClass="active" className="image-two" to="image-two" spy={true} smooth={true} duration={500}></Link></li>
                <li className="image-list-item"><Link activeClass="active" className="image-three" to="image-three" spy={true} smooth={true} duration={500}></Link></li>
                <li className="image-list-item"><Link activeClass="active" className="image-four" to="image-four" spy={true} smooth={true} duration={500}></Link></li>
                <li className="image-list-item"><Link activeClass="active" className="image-one" to="image-one" spy={true} smooth={true} duration={500}></Link></li>
                <li><a onClick={() => scroll.scrollTo(100)}></a></li>
                <li><a onClick={() => scroll.scrollMore(500)}></a></li>
              </ul>
            </div>
            <p>Orange County, FL</p>
            <p id="summary" onClick={this.handleClick} className="info-click-event" role="button">
              Project Info<span className="glyphicon glyphicon-chevron-down" />
            </p>
            <div id="sea-isle-summary" className="dropdown-menu">
              <div className="project-type"><p><span>Project Type:</span>Single-Family Community Development</p><br/></div>
              <div className="client-type"><p><span>Client:</span>DR Horton, Inc.</p><br/></div>
              <div className="project-summary"><p>
                Located within the Sea World Orlando Design Corridor, Sea Isle is a coastal inspired, multi-family community with sand, landscape, bold colored accents, and rich textures used to create a unique, resort-style sense of place.  Amenities near the clubhouse were designed on axis with different clubhouse architectural elements to maximize space efficacy, views, and use.  In addition to the 356 units, the design program includes a resort style swimming pool, dog park, outdoor fireplace, grill stations, dining area, gated entrance feature, custom columns, decorative paving, and lush landscaping.
              </p></div>
            </div>
          </div>
        </div>
        <div id="image-one"></div>
        <div id="image-two"></div>
        <div id="image-three"></div>
        <div id="image-four"></div>
      </div>
    )
  }
})



//Exports
module.exports = {
  'SeaIsleComponent': SeaIsleComponent
}
