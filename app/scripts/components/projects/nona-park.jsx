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


var NonaParkComponent = React.createClass({

  handleClick: function(){

    $('#nona-park-summary').toggle('slow');

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
              <h2 className="nona-title">Nona Park Village</h2>
              <ul className="image-links">
                <li className="nona-list-item"><Link activeClass="active" className="image-two" to="image-two" spy={true} smooth={true} duration={500}></Link></li>
                <li className="nona-list-item"><Link activeClass="active" className="image-three" to="image-three" spy={true} smooth={true} duration={500}></Link></li>
                <li className="nona-list-item"><Link activeClass="active" className="image-four" to="image-four" spy={true} smooth={true} duration={500}></Link></li>
                <li className="nona-list-item"><Link activeClass="active" className="image-one" to="image-one" spy={true} smooth={true} duration={500}></Link></li>
                <li><a onClick={() => scroll.scrollTo(100)}></a></li>
                <li><a onClick={() => scroll.scrollMore(500)}></a></li>
              </ul>
            </div>
            <p>Orlando, FL</p>
            <p id="summary" onClick={this.handleClick} className="nona-click-event" role="button">
              Project Info<span className="glyphicon glyphicon-chevron-down" />
            </p>
            <div id="nona-park-summary" className="dropdown-menu">
              <div className="project-type"><p><span>Project Type:</span>Multi-Family Community</p><br/></div>
              <div className="client-type"><p><span>Client:</span>Epoch Properties</p><br/></div>
              <div className="project-summary"><p>
                Located in SE Orlando and surrounded by the elegant settings of the Lake Nona District, Nona Park Village is a multi-family community that exhibits the essence of Florida living.  The contemporary design demonstrates the importance and power of axial relationships as a means to organize program elements to maximize the use of space.  The appropriate use of color and texture with both the landscape and hardscape elements help define the spaces and guide residence along providing a true experiential landscape.  In addition to the 303 units, the design program includes a resort style swimming pool, dog park, outdoor fireplace, grill stations, dining area, beach hammocks, bocce ball courts, community garden, custom columns, trellis structures, decorative paving, and lush landscaping.
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
  'NonaParkComponent': NonaParkComponent
}
