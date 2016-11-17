var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('boron/FadeModal');
require('Backbone-React-Component');





var modalStyle = {
  width: '315px'
}

var backdropStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)'
}

var contentStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)'
}


var MobileNavigation = React.createClass({

  showModal: function() {
    this.refs.modal.show();
  },

  hideModal: function() {
    this.refs.modal.hide();
  },

  callback: function(event){
    console.log(event);
  },

  navModal: function() {
    this.refs.nav.show();
  },

  hideNav: function() {
    this.refs.nav.hide();
  },


  handleClick: function() {

    $('.mobile-nav-items').toggle('slow');

  },

  hideClick: function() {
    $('.mobile-nav-items').toggle('slow');
  },


  render: function(){

    return(
      <div className="container-fluid">
        <div id="mobile-nav">
          <div className="mobile-nav-toggle" onClick={this.navModal} >
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
          </div>
          <Modal ref="nav" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
            <ul className="mobile-nav-items">
              <li className="mobile-nav-links">
                <a href="#overview" className="mobile-practice" onClick={this.hideNav}>Practice</a>
              </li>
              <li className="mobile-nav-links">
                <a href="#projects" className="mobile-projects" onClick={this.hideNav}>Projects</a>
              </li>
              <li className="mobile-nav-links">
                <a href="#people" className="mobile-studio" onClick={this.hideNav}>Studio</a>
              </li>
              <li className="mobile-nav-links">
                <a href="#contact" className="mobile-contact" onClick={this.hideNav}>Contact</a>
              </li>
            </ul>
          </Modal>
        </div>
      </div>
    )
  }
})




//component export
module.exports = {
  'MobileNavigation': MobileNavigation
}
