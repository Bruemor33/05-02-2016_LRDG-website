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


var SandlakeComponent = React.createClass({

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
          <div id="main-nav" className="writeup">
            <div className="project-nav">
              <h2 className="altis-title">Altis at Sandlake</h2>
              <ul className="image-links">
                <li className="altis-list-item"><Link activeClass="active" className="image-two" to="image-two" spy={true} smooth={true} duration={500}></Link></li>
                <li className="altis-list-item"><Link activeClass="active" className="image-three" to="image-three" spy={true} smooth={true} duration={500}></Link></li>
                <li className="altis-list-item"><Link activeClass="active" className="image-four" to="image-four" spy={true} smooth={true} duration={500}></Link></li>
                <li className="altis-list-item"><Link activeClass="active" className="image-one" to="image-one" spy={true} smooth={true} duration={500}></Link></li>
                <li><a onClick={() => scroll.scrollTo(100)}></a></li>
                <li><a onClick={() => scroll.scrollMore(500)}></a></li>
              </ul>
            </div>
            <p>Orange County, FL</p>
            <p id="summary" onClick={this.handleClick} className="altis-click-event" role="button">
              Project Info<span className="glyphicon glyphicon-chevron-down" />
            </p>
            <div id="sea-isle-summary" className="dropdown-menu">
              <div className="project-type"><p><span>Project Type:</span>Multi-family Residential</p><br/></div>
              <div className="client-type"><p><span>Client:</span>Altman Development Corporation</p><br/></div>
              <div className="project-summary"><p>
                Located near the Dr. Phillips community of SW Orlando, Altis at Sand Lake is a resort-style multi-family community with a modern/chic landscape design.  Each space takes it shape from the unique and linear layout of the property itself.  Simple and elegant, the linear forms maximize site usage and provide an opportunity to create an upscale experience for the residence.  Because of this relationship to the land, Altis at Sand Lake is the largest apartment community in Orlando to receive the National Green Building Standards Award.  Landscape and carefully selected accents with textures are used to define each space and stimulate the senses.  In addition to the 315 units, the design program includes a resort style swimming pool, dog park, community gardens, courtyard with arbors for outdoor dining, and fountain features for leisure reading while relaxing in adirondack chairs.
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
  'SandlakeComponent': SandlakeComponent
}
