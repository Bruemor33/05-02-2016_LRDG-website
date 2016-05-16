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
              <h2 className="project-title">Waterleigh</h2>
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
                Waterleigh is a single-family community nestled on the banks of scenic Hickorynut Lake in SW Orange County.  The name ‘Waterleigh’, which was born from this intrinsic pairing of water and land, is a combination of the words water and surname, leigh, which means meadow.  The community is centered around a commercial village core and central park system all interconnected with a trail system and multiple lake access points.  In addition to the 110 homes of phase one, the design program includes a Clubhouse amenity with a resort style swimming pool, dog park, community gardens, neighborhood parks, sculpture, streetscapes, tot lots, and multiple picnic areas.
              </p></div>
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
