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

    $('#dwell-summary').toggle('slow');

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
              <h2 className="dwell-title">Dwell at Nona Place</h2>
              <ul className="image-links">

                <li className="dwell-list-item" role="button">
                  <Link activeClass="active" className="dwell-two" to="dwell-two" spy={true} smooth={true} duration={500}>

                  </Link>
                </li>

                <li className="dwell-list-item" role="button">
                  <Link activeClass="active" className="dwell-three" to="dwell-three" spy={true} smooth={true} duration={500}>

                  </Link>
                </li>

                <li className="dwell-list-item" role="button">
                  <Link activeClass="active" className="dwell-four" to="dwell-four" spy={true} smooth={true} duration={500}>

                  </Link>
                </li>

                <li className="dwell-list-item" role="button">
                  <Link activeClass="active" className="dwell-one" to="dwell-one" spy={true} smooth={true} duration={500}>

                  </Link>
                </li>

                <li><a onClick={function(){scroll.scrollTo(100)}}></a></li>

                <li><a onClick={function(){scroll.scrollMore(500)}}></a></li>

              </ul>
            </div>
            <p>Orlando, FL</p>
            <p id="summary" onClick={this.handleClick} className="dwell-click-event" role="button">
              Project Info<span className="arrow"><i className="fa fa-sort-desc fa-2x" aria-hidden="true"></i></span>
            </p>
            <div id="dwell-summary" className="dropdown-menu">
              <div className="summary-container">
                <div className="project-type"><p>Project Type: Multi-Family Community</p><br/></div>
                <div className="client-type"><p>Client: The Klein Company</p><br/></div>
                  <div className="design-team">
                    <h4 className="design-title">Design Team</h4>
                    <ul className="team-list">
                      <li>Land Resource Design Group, Inc.</li>
                      <li>Kelly, Collins, & Gentry, Inc.</li>
                      <li>Forum Architecture</li>
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
                  Located in the Lake Hart region of SE Orlando and on the shores of beautiful Lake Whippoorwill is Dwell at Nona Place. As a Florida Green Building Coalition certified multi-family community Dwell evokes a contemporary community design that connects the residents to their community, Lake Whippoorwill, and the nearby Lake Nona District.  Creating spaces with upscale amenities and minimal impact to the lake is the guiding force behind the direction of the design.  This is accomplished with curvilinear hardscape elements whose forms were dictated by lake edge geometry.  The curvilinear, resort-style swimming pool features a beach entry, decorative fountains, fabric cabanas, and hammocks.  In addition to the 274 units, the design program includes a dog park, picnic & grill area, dining area, fountain feature, 200’ boardwalk with lake observation deck, custom columns, decorative paving, and lush landscaping.
                </p></div>
              </div>
            </div>
          </div>
        </div>
        <div id="dwell-one"></div>
        <div id="dwell-two"></div>
        <div id="dwell-three"></div>
        <div id="dwell-four"></div>
      </div>
    )
  }
})



//Exports
module.exports = {
  'DwellNonaPlaceComponent': DwellNonaPlaceComponent
}
