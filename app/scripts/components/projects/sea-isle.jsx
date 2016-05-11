var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');



var SeaIsleComponent = React.createClass({

  handleClick: function(){

    $('#sea-isle-summary').toggle('slow');

  },
  handleScroll: function(){
    $(document).ready(function(){
      //Background click actions
      $('.image-nav').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
      });
      //Scroll to top
      $('.image-one').on('click', function(event){
        event.preventDefault();
        $('hrml,body').animate({scrollTop:0}, 'slow')
      });

    });

    //scroll function
    function scrollToID(id, speed){
      var offSet = 50;
      var targetOffset = $(id).offset().top - offSet;
      var mainNav = $('#main-nav');
      $('html,body').animate({scrollTop:targetOffset}, speed);
      if(mainNav.hasClass("open")){
        mainNav.css("height", "0px").removeClass("in").addClass("collapse");
        mainNav.removeClass("open");
      }
    };
  },

  render: function(){


    return(
      <div id="sea-isle-background" className="container-fluid">
        <div classNme="col-md-12">
          <div id="main-nav" className="sea-isle-writeup">
            <div className="project-nav">
              <h2 className="project-title">Sea Isle</h2>
              <div className="image-item" onClick={this.handleScroll}>
                <a roll="button" className="image-nav" data-id=""><i class="fa fa-circle-o" aria-hidden="true"></i></a>
              </div>
              <div className="image-item" onClick={this.handleScroll}>
                <a roll="button" className="image-nav" data-id=""><i class="fa fa-circle-o" aria-hidden="true"></i></a>
              </div>
              <div className="image-item" onClick={this.handleScroll}>
                <a roll="button" className="image-nav" data-id=""><i class="fa fa-circle-o" aria-hidden="true"></i></a>
              </div>
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
