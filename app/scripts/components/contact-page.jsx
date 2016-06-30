var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var ContactPageComponent = React.createClass({



  render: function(){


    return(
      <div className="container-fluid">
        <div className="contact-background">
          <div className="row">
            <div className="contact-container col-md-12">
              <div className="company-container col-md-7">
                <div className="company-name-wrapper">
                  <div className="logo-wrapper">
                    <div className="company-logo"></div>
                  </div>
                  <h1 className="company-title">Land Resource Design Group</h1>
                </div>
              </div>
              <div className="company-info">
                <div className="social-links">
                  <p>Find us online!</p>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/Land-Resource-Design-Group-872873609490285/?fref=ts">
                        <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></li>
                  </ul>
                </div>
                <div className="google-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.920700076393!2d-81.38118281018005!3d28.511031171583102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77b743865303b%3A0x35803a342f7b6c45!2s2929+Wadsworth+Ave%2C+Orlando%2C+FL+32806!5e0!3m2!1sen!2sus!4v1465219067841" width="600" height="300" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});





//exports
module.exports = {
  'ContactPageComponent': ContactPageComponent
}
