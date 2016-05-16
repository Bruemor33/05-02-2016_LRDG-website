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


var DwellNonaPlaceComponent = React.createClass({

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
        <div classNme="col-md-12">
          <div id="main-nav" className="sea-isle-writeup">
            <div className="project-nav">
              <h2 className="project-title">Dwell at Nona Place</h2>
              <ul className="image-links">
                <li className="image-list-item"><Link activeClass="active" className="image-two" to="image-two" spy={true} smooth={true} duration={500}></Link></li>
                <li className="image-list-item"><Link activeClass="active" className="image-three" to="image-three" spy={true} smooth={true} duration={500}></Link></li>
                <li className="image-list-item"><Link activeClass="active" className="image-four" to="image-four" spy={true} smooth={true} duration={500}></Link></li>
                <li className="image-list-item"><Link activeClass="active" className="image-one" to="image-one" spy={true} smooth={true} duration={500}></Link></li>
                <li><a onClick={() => scroll.scrollTo(100)}></a></li>
                <li><a onClick={() => scroll.scrollMore(500)}></a></li>
              </ul>
            </div>
            <p>Orlando, FL</p>
            <p id="summary" onClick={this.handleClick} className="info-click-event" role="button">
              Project Info<span className="glyphicon glyphicon-chevron-down" />
            </p>
            <div id="sea-isle-summary" className="dropdown-menu">
              <div className="project-type"><p><span>Project Type:</span>Multi-Family Community</p><br/></div>
              <div className="client-type"><p><span>Client:</span>The Klein Company</p><br/></div>
              <div className="project-summary"><p>
                Located in SE Orlando on the shores of beautiful Lake Whippoorwill is Dwell at Nona Place, a Florida Green Building Coalition certified, multi-family community with a contemporary landscape design that connects the residents to their community, Lake Whippoorwill, and the nearby Lake Nona District.  Creating spaces with upscale amenities and minimal impact to the lake is the guiding force behind the direction of the design.  This is accomplished with curvilinear hardscape elements whose forms were dictated by lake edge geometry.  The curvilinear, resort-style swimming pool features a beach entry, decorative fountains, fabric cabanas, and hammocks.  In addition to the 274 units, the design program includes a dog park, picnic & grill area, dining area, fountain feature, 200’ boardwalk with lake observation deck, custom columns, decorative paving, and lush landscaping.
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
  'DwellNonaPlaceComponent': DwellNonaPlaceComponent
}
