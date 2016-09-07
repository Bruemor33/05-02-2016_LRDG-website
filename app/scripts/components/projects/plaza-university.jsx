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



var PlazaUniversityComponent = React.createClass({

  handleClick: function(){
    $('#plaza-summary').toggle('slow');
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
        <div className="plaza-university-container col-md-12">
          <div id="main-nav" className="writeup">
            <div className="project-nav">
              <h2 className="plaza-title">Plaza at University</h2>
              <ul className="image-links">
                <li className="plaza-list-item"><Link activeClass="active" className="plaza-two" to="plaza-two" spy={true} smooth={true} duration={500}></Link></li>
                <li className="plaza-list-item"><Link activeClass="active" className="plaza-three" to="plaza-three" spy={true} smooth={true} duration={500}></Link></li>
                <li className="plaza-list-item"><Link activeClass="active" className="plaza-four" to="plaza-four" spy={true} smooth={true} duration={500}></Link></li>
                <li className="plaza-list-item"><Link activeClass="active" className="plaza-one" to="plaza-one" spy={true} smooth={true} duration={500}></Link></li>
                <li><a onClick={() => scroll.scrollTo(100)}></a></li>
                <li><a onClick={() => scroll.scrollMore(500)}></a></li>
              </ul>
            </div>
            <p>Orlando, FL</p>
            <p id="summary" onClick={this.handleClick} className="plaza-click-event" role="button">
              Project Info<span className="glyphicon glyphicon-chevron-down" />
            </p>
            <div id="plaza-summary" className="dropdown-menu">
              <div className="summary-container">
                <div className="project-type"><p>Project Type: Mixed-Use - University Student Housing and Retail</p><br/></div>
                <div className="client-type"><p>Client: American Campus Communities</p><br/></div>
                <div className="design-team">
                  <h4 className="design-title">Design Team</h4>
                  <ul className="team-list">
                    <li>Land Resource Design Group, Inc.</li>
                    <li>Kelly, Collins & Gentry, Inc.</li>
                    <li>Niles Bolton Associates</li>
                  </ul>
                </div>
                <div className="project-services">
                  <h4 className="services-title">Project Services:</h4>
                  <ul className="services-list">
                    <li>Hardscape Design</li>
                    <li>Landscape Design</li>
                  </ul>
                </div>
                <div className="project-summary"><p>
                  Located directly across from the main entrance to the second largest college campus in the country, The Plaza on University serves the housing needs for 1,330 University of Central Florida students and offers many the of area’s retail and eatery options. This mixed-use student community, was developed and is operated by, one of the country’s largest providers of student housing, American Campus Communities. This community environment provides a cutting-edge contemporary life-style that relates to the “apple” generation of tech-savvy collegians. The amenities offer a lifestyle that most college students only dream about with two main courtyards defined by five floors of balcony units overlooking a large resort-style pool, a fitness lap pool, a community spa, several grill stations and an arbor nesting of hanging egg chairs along with a small putt-putt area for social relaxation. The community also offers a “main street” with restaurant access, festive string lighting, an outdoor entertainment “green” and a perimeter courtyard with beach volleyball, picnic areas, bocce ball/corn-hole and beach hammocks.
                </p></div>
              </div>
            </div>
          </div>
        </div>
        <div id="plaza-one"></div>
        <div id="plaza-two"></div>
        <div id="plaza-three"></div>
        <div id="plaza-four"></div>
      </div>
    )
  }
})





//exports
module.exports = {
  'PlazaUniversityComponent': PlazaUniversityComponent
}
