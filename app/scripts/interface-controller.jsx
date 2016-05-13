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
var ProjectsNav = require('./components/projects-nav.jsx').ProjectsNav;
var LandingPage = require('./components/landing-page.jsx').LandingPage;
var ProjectsComponent = require('./components/projects.jsx').ProjectsComponent;
var SeaIsleComponent = require('./components/projects/sea-isle.jsx').SeaIsleComponent;


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
    var siteNavigation;

    if(this.state.router.current == "index"){
      navigation = (<LandingNav />)
      body = (<LandingPage/>)
    }
    if(this.state.router.current == "overview"){
      siteNavigation = (<LandingNav />)
      body = (<h1>Overview</h1>)
    }
    if(this.state.router.current == "projects"){
      siteNavigation = (<LandingNav />)
      body = (<ProjectsComponent />)
    }
    if(this.state.router.current == "kindred"){
      siteNavigation = (<LandingNav />)
      body = (<h1>Kindred</h1>)
    }
    if(this.state.router.current == "waterleigh"){
      siteNavigation = (<LandingNav />)
      body = (<h1>Waterleigh</h1>)
    }
    if(this.state.router.current == "nonapark"){
      siteNavigation = (<LandingNav />)
      body = (<h1>Nona Park</h1>)
    }
    if(this.state.router.current == "seaisle"){
      siteNavigation = (<LandingNav />)
      body = (<SeaIsleComponent />)
    }
    if(this.state.router.current == "altis"){
      siteNavigation = (<LandingNav />)
      body = (<h1>Altis at Sandlake</h1>)
    }
    if(this.state.router.current == "dwell"){
      siteNavigation = (<LandingNav />)
      body = (<h1>Dwell at Nona Place</h1>)
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
        {siteNavigation}
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
