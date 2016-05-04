var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
// var Parse = require('parse');
// var ParseReact = require('parse-react');
require('Backbone-React-Component');


//Local component imports here
var LandingNav = require('./components/landingpage-navigation.jsx').LandingNav;
var LandingPage = require('./components/landing-page.jsx').LandingPage;


//kick off controller
var InterfaceComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  getInitialState: function(){
    return{
      router: this.props.router
    };
  },
  componentWillMount: function(){
    this.callback = (function(){
      this.forceUpdate();
    }).bind(this);
    this.state.router.on('route', this.callback);
  },
  componentWillUnmount: function(){
    this.state.router.off('route', this.callback);
  },
  render: function(){
    var body;
    var navigation;

    if(this.state.router.current == "index"){
      navigation = (<LandingNav />)
      body = (<LandingPage/>)
    }
    if(this.state.router.current == "overview"){
      navigation = (<LandingNav />)
      body = (<h1>Overview</h1>)
    }
    if(this.state.router.current == "projects"){
      navigation = (<LandingNav />)
      body = (<h1>Projects</h1>)
    }
    if(this.state.router.current == "people"){
      navigation = (<LandingNav />)
      body = (<h1>People</h1>)
    }
    if(this.state.router.current == "contact"){
      navigation = (<LandingNav />)
      body = (<h1>Contact</h1>)
    }

    return(
      <div>
        {body}
        {navigation}
      </div>
    )
  }
});


//Component Export
module.exports = {
  'InterfaceComponent': InterfaceComponent
}
