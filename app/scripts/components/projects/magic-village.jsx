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


var MagicVillageComponent = React.createClass({

  handleClick: function(){

    $('#magic-summary').toggle('slow');

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
        <div className="magic-village-container col-md-12">
          <div id="main-nav" className="writeup">
            <div className="project-nav">
              <h2 className="magic-title">Magic Village</h2>
              <ul className="image-links">
                <li className="magic-list-item"><Link activeClass="active" className="magic-two" to="magic-two" spy={true} smooth={true} duration={500}></Link></li>
                <li className="magic-list-item"><Link activeClass="active" className="magic-three" to="magic-three" spy={true} smooth={true} duration={500}></Link></li>
                <li className="magic-list-item"><Link activeClass="active" className="magic-four" to="magic-four" spy={true} smooth={true} duration={500}></Link></li>
                <li className="magic-list-item"><Link activeClass="active" className="magic-one" to="magic-one" spy={true} smooth={true} duration={500}></Link></li>
                <li><a onClick={function(){scroll.scrollTo(100)}}></a></li>
                <li><a onClick={function(){scroll.scrollMore(500)}}></a></li>
              </ul>
            </div>
            <p>Osceola County, FL</p>
            <p id="summary" onClick={this.handleClick} className="magic-click-event" role="button">
              Project Info<span className="glyphicon glyphicon-chevron-down" />
            </p>
            <div id="magic-summary" className="dropdown-menu">
              <div className="summary-container">
                <div className="project-type"><p>Project Type: Multi-Family Residential – Vacation Rental</p><br/></div>
                <div className="client-type"><p>Client: Magic Village</p><br/></div>
                <div className="design-team">
                  <h4 className="design-title">Design Team:</h4>
                  <ul className="team-list">
                    <li>Land Resource Design Group, Inc.</li>
                  </ul>
                </div>
                <div className="project-services">
                  <h4 className="services-title">Project Services:</h4>
                  <ul className="services-list">
                    <li>Land Planning</li>
                    <li>Hardscape Design</li>
                    <li>Landscape Design</li>
                    <li>Lighting Design</li>
                  </ul>
                </div>
                <div className="project-summary"><p>
                  Located adjacent to Disney’s Animal Kingdom and Hollywood Studios, Magic Village is a South American inspired oasis consisting of Brazilian forms, textures, colors, and materials that create a rich urban fabric and resort-style experience.  The preservation and maximization of stunning views of Disney’s nightly fireworks was central to the design program.  This idea guided the orientation and adjacent plantings of the picnic, pool, and hammock areas.  LRDG’s role was to design a resort-style beach entry swimming pool, spa, picnic & grill area, lounge areas, decorative paving, and an entrance fountain feature complete with landscape, hardscape, and accent lighting in creating an unforgettable short-term rental experience.
                </p></div>
              </div>
            </div>
          </div>
        </div>
        <div id="magic-one"></div>
        <div id="magic-two"></div>
        <div id="magic-three"></div>
        <div id="magic-four"></div>
      </div>
    )
  }
})





//exports
module.exports = {
  'MagicVillageComponent': MagicVillageComponent
}
