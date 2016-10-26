var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var MobilePlazaAtUniversity = React.createClass({



  render: function(){

    return (

      <div className="container-fluid" id="mobile-plaza">
        <div className="mobile-plaza-background col-md-12">
          <div className="mobile-plaza-writeup-container col-md-5">
            <div className="row">
              <div className="mobile-plaza-container col-md-12">
                <div className="mobile-plaza-title">
                  <h2>Plaza at University</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-plaza-statement-container col-md-12">
                <p>Orlando, FL</p>
                <p>Size: 13.1 Acres, 355 Units/1,330 Student Beds, 64,457 s.f. Commercial Retail</p>

                <p>Located directly across from the main entrance to the second largest college campus in the country, The Plaza on University serves the housing needs for 1,330 University of Central Florida students and offers many the of area’s retail and eatery options. This mixed-use student community, was developed and is operated by, one of the country’s largest providers of student housing, American Campus Communities. This community environment provides a cutting-edge contemporary life-style that relates to the “apple” generation of tech-savvy collegians. The amenities offer a lifestyle that most college students only dream about with two main courtyards defined by five floors of balcony units overlooking a large resort-style pool, a fitness lap pool, a community spa, several grill stations and an arbor nesting of hanging egg chairs along with a small putt-putt area for social relaxation. The community also offers a “main street” with restaurant access, festive string lighting, an outdoor entertainment “green” and a perimeter courtyard with beach volleyball, picnic areas, bocce ball/corn-hole and beach hammocks.</p>

                <ul>
                  <p>Project Services:</p>

                  <li>
                    <p>Hardscape Design</p>
                  </li>

                  <li>
                    <p>Landscape Design</p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
          <div className="mobile-plaza-images-container col-md-7">
            <div className="row">
              <div className="mobile-plaza-row-one col-md-12">
                <div className="plaza-image-one-spacing col-md-6">
                  <div className="mobile-plaza-image-one"></div>
                </div>
                <div className="plaza-two-spacing col-md-6">
                  <div className="mobile-plaza-image-two"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mobile-plaza-row-two col-md-12">
                <div className="plaza-image-three-spacing col-md-6">
                  <div className="mobile-plaza-image-three"></div>
                </div>
                <div className="plaza-image-four-spacing col-md-6">
                  <div className="mobile-plaza-image-four"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )

  }

});



module.exports = {
  'MobilePlazaAtUniversity': MobilePlazaAtUniversity
}
