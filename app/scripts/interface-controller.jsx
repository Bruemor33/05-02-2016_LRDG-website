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
var BottomNav = require('./components/top-bottom-navigation.jsx').BottomNav;
var LandingPage = require('./components/landing-page.jsx').LandingPage;
var ProjectsComponent = require('./components/projects.jsx').ProjectsComponent;
var SeaIsleComponent = require('./components/projects/sea-isle.jsx').SeaIsleComponent;
var KindredComponent = require('./components/projects/kindred.jsx').KindredComponent;
var WaterleighComponent = require('./components/projects/waterleigh.jsx').WaterleighComponent;
var SandlakeComponent = require('./components/projects/sandlake.jsx').SandlakeComponent;
var NonaParkComponent =require('./components/projects/nona-park.jsx').NonaParkComponent;
var DwellNonaPlaceComponent = require('./components/projects/dwell-nonaplace.jsx').DwellNonaPlaceComponent;
var PlazaUniversityComponent = require('./components/projects/plaza-university.jsx').PlazaUniversityComponent;
var LasVentanasComponent = require('./components/projects/las-ventanas.jsx').LasVentanasComponent;
var LasBrisasComponent = require('./components/projects/las-brisas.jsx').LasBrisasComponent;
var HarmonyComponent = require('./components/projects/harmony.jsx').HarmonyComponent;
var MagicVillageComponent = require('./components/projects/magic-village.jsx').MagicVillageComponent;
var OverviewComponent = require('./components/overview.jsx').OverviewComponent;
var StudioPageComponent = require('./components/studio.jsx').StudioPageComponent;
var ContactPageComponent = require('./components/contact-page.jsx').ContactPageComponent;


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
      navigation = (<ProjectsNav />)
      body = (<LandingPage/>)
    }
    if(this.state.router.current == "overview"){
      siteNavigation = (<ProjectsNav />)
      body = (<OverviewComponent />)
    }
    if(this.state.router.current == "projects"){
      siteNavigation = (<ProjectsNav />)
      body = (<ProjectsComponent />)
    }
    if(this.state.router.current == "kindred"){
      siteNavigation = (<ProjectsNav />)
      body = (<KindredComponent />)
    }
    if(this.state.router.current == "waterleigh"){
      siteNavigation = (<ProjectsNav />)
      body = (<WaterleighComponent />)
    }
    if(this.state.router.current == "nonapark"){
      siteNavigation = (<ProjectsNav />)
      body = (<NonaParkComponent />)
    }
    if(this.state.router.current == "seaisle"){
      siteNavigation = (<ProjectsNav />)
      body = (<SeaIsleComponent />)
    }
    if(this.state.router.current == "altis"){
      siteNavigation = (<ProjectsNav />)
      body = (<SandlakeComponent />)
    }
    if(this.state.router.current == "dwell"){
      siteNavigation = (<ProjectsNav />)
      body = (<DwellNonaPlaceComponent />)
    }
    if(this.state.router.current == "plazaUniversity"){
      siteNavigation = (<ProjectsNav />)
      body = (<PlazaUniversityComponent />)
    }
    if(this.state.router.current == "ventanas"){
      siteNavigation = (<ProjectsNav />)
      body = (<LasVentanasComponent />)
    }
    if(this.state.router.current == "brisas"){
      siteNavigation = (<ProjectsNav />)
      body = (<LasBrisasComponent />)
    }
    if(this.state.router.current == "harmony"){
      siteNavigation = (<ProjectsNav />)
      body = (<HarmonyComponent />)
    }
    if(this.state.router.current == "magic"){
      siteNavigation = (<ProjectsNav />)
      body = (<MagicVillageComponent />)
    }
    if(this.state.router.current == "people"){
      navigation = (<ProjectsNav />)
      body = (<StudioPageComponent />)
    }
    if(this.state.router.current == "contact"){
      navigation = (<ProjectsNav />)
      body = (<ContactPageComponent />)
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
