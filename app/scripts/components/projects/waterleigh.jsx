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


var WaterleighComponent = React.createClass({

  handleClick: function(){

    $('#waterleigh-summary').toggle('slow');

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
              <h2 className="waterleigh-title">Waterleigh</h2>
              <ul className="image-links">
                <li className="waterleigh-list-item"><Link activeClass="active" className="waterleigh-two" to="waterleigh-two" spy={true} smooth={true} duration={500}></Link></li>
                <li className="waterleigh-list-item"><Link activeClass="active" className="waterleigh-three" to="waterleigh-three" spy={true} smooth={true} duration={500}></Link></li>
                <li className="waterleigh-list-item"><Link activeClass="active" className="waterleigh-four" to="waterleigh-four" spy={true} smooth={true} duration={500}></Link></li>
                <li className="waterleigh-list-item"><Link activeClass="active" className="waterleigh-one" to="waterleigh-one" spy={true} smooth={true} duration={500}></Link></li>
                <li><a onClick={function(){scroll.scrollTo(100)}}></a></li>
                <li><a onClick={function(){scroll.scrollMore(500)}}></a></li>
              </ul>
            </div>
            <p>Orange County, FL</p>
            <p id="summary" onClick={this.handleClick} className="waterleigh-click-event" role="button">
              Project Info<span className="arrow"><i className="fa fa-sort-desc fa-2x" aria-hidden="true"></i></span>
            </p>
            <div id="waterleigh-summary" className="dropdown-menu">
              <div className="summary-container">
                <div className="project-type"><p>Project Type: Single-Family Community Development</p><br/></div>
                <div className="client-type"><p>Client:DR Horton, Inc.</p><br/></div>
                <div className="design-team">
                  <h4 className="design-title">Design Team</h4>
                  <ul className="team-list">
                    <li>Land Resource Design Group, Inc.</li>
                    <li>VHB MillerSellen, Inc.</li>
                    <li>Bio Tech Consulting, Inc.</li>
                    <li>Allen & Company Inc.</li>
                    <li>Universal Engineering Sciences</li>
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
                  Waterleigh is a master-planned community nestled on the banks of scenic Hickorynut Lake in SW Orange County.  The name ‘Waterleigh’, which was born from this intrinsic pairing of water and land, is a combination of the words water and surname, leigh, which means meadow.  The community is centered around a commercial village core and central park system all interconnected with a trail system and multiple lake access points.  In addition to the 110 homes of phase one, the design program includes a Clubhouse amenity with a resort style swimming pool, dog park, community gardens, neighborhood parks, sculpture, streetscapes, tot lots, and multiple picnic areas.
                </p>
                <p>Phase 1 of Waterleigh was recently completed and the community is rapidly growing.  Known as “Marina Bay Village,” this phase focuses on celebrating its surroundings through the use of artistic elements and naturally inspired materials.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="waterleigh-one"></div>
        <div id="waterleigh-two"></div>
        <div id="waterleigh-three"></div>
        <div id="waterleigh-four"></div>
      </div>
    )
  }
})



//Exports
module.exports = {
  'WaterleighComponent': WaterleighComponent
}
