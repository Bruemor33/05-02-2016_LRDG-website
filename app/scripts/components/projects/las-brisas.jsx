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


var LasBrisasComponent = React.createClass({

  handleClick: function(){

    $('#brisas-summary').toggle('slow');

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
        <div className="las-brisas-container col-md-12">
          <div id="main-nav" className="writeup">
            <div className="project-nav">
              <h2 className="brisas-title">Las Brisas</h2>
              <ul className="image-links">
                <li className="brisas-list-item"><Link activeClass="active" className="brisas-two" to="brisas-two" spy={true} smooth={true} duration={500}></Link></li>
                <li className="brisas-list-item"><Link activeClass="active" className="brisas-three" to="brisas-three" spy={true} smooth={true} duration={500}></Link></li>
                <li className="brisas-list-item"><Link activeClass="active" className="brisas-four" to="brisas-four" spy={true} smooth={true} duration={500}></Link></li>
                <li className="brisas-list-item"><Link activeClass="active" className="brisas-one" to="brisas-one" spy={true} smooth={true} duration={500}></Link></li>
                <li><a onClick={function(){scroll.scrollTo(100)}}></a></li>
                <li><a onClick={function(){scroll.scrollMore(500)}}></a></li>
              </ul>
            </div>
            <p>Round Rock, TX</p>
            <p id="summary" onClick={this.handleClick} className="brisas-click-event" role="button">
              Project Info<span className="arrow"><i className="fa fa-sort-desc fa-2x" aria-hidden="true"></i></span>
            </p>
            <div id="brisas-summary" className="dropdown-menu">
              <div className="summary-container">
                <div className="project-type"><p>Project Type: Multi-Family</p><br/></div>
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
                    <li>Site Planning</li>
                    <li>Hardscape Design</li>
                    <li>Landscape Design</li>
                  </ul>
                </div>
                <div className="project-summary"><p>
                  Located in the town of Round Rock, home of Dell Computers, Las Brisas reaches the rental market of this popular tech-cultured community.  With rolling hills as a backdrop, this site features a “Texas” themed development with architectural materials that are indigenous to the area.  It offers a series of three and four story carriage-style residential buildings sensitively positioned with existing rolling terrain to minimize development costs.  The main clubhouse amenity area is highlighted with an organic-shaped, resort-style pool with an interactive fountain spa along with an outdoor kitchen.  The community also offers a smaller pool venue in closer proximity to those who reside higher up on the hill.
                </p></div>
              </div>
            </div>
          </div>
        </div>
        <div id="brisas-one"></div>
        <div id="brisas-two"></div>
        <div id="brisas-three"></div>
        <div id="brisas-four"></div>
      </div>
    )
  }
})





//exports
module.exports = {
  'LasBrisasComponent': LasBrisasComponent
}
