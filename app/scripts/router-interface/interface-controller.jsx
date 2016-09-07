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
var BellaTraeComponent = require('./components/projects/bella-trae.jsx').BellaTraeComponent;
var OverviewComponent = require('./components/overview.jsx').OverviewComponent;
var CommunityPlanningComponent = require('./components/community-planning.jsx').CommunityPlanningComponent;
var LandscapeArchitectureComponent = require('./components/landscape-architecture.jsx').LandscapeArchitectureComponent;
var ConstructionAdministrationComponent = require('./components/construction-administration.jsx').ConstructionAdministrationComponent;
var GraphicsServiceComponent = require('./components/graphics.jsx').GraphicsServiceComponent;
var StudioPageComponent = require('./components/studio.jsx').StudioPageComponent;
var ContactPageComponent = require('./components/contact-page.jsx').ContactPageComponent;
var PracticeNavigation = require('./components/practice-nav.jsx').PracticeNavigation;
var ProjectPageNavigation = require('./components/project-page-nav.jsx').ProjectPageNavigation;
var StudioPageNavigation = require('./components/studio-nav.jsx').StudioPageNavigation;
var ContactPageNavigation = require('./components/contact-nav.jsx').ContactPageNavigation;
var ClientsComponent = require('./components/clients.jsx').ClientsComponent;
var ClientsPageNavigation = require('./components/clients-nav.jsx').ClientsPageNavigation;


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
      siteNavigation = (<PracticeNavigation />)
      body = (<OverviewComponent />)
    }
    if(this.state.router.current == "overview/community"){
      siteNavigation = (<PracticeNavigation />)
      body = (<CommunityPlanningComponent />)
    }
    if(this.state.router.current == "overview/landscape-architecture"){
      siteNavigation = (<PracticeNavigation />)
      body = (<LandscapeArchitectureComponent />)
    }
    if(this.state.router.current == "overview/construction-administration"){
      siteNavigation = (<PracticeNavigation />)
      body = (<ConstructionAdministrationComponent />)
    }
    if(this.state.router.current == "overview/graphics"){
      siteNavigation = (<PracticeNavigation />)
      body = (<GraphicsServiceComponent />)
    }
    if(this.state.router.current == "projects"){
      siteNavigation = (<ProjectPageNavigation />)
      body = (<ProjectsComponent />)
    }
    if(this.state.router.current == "kindred"){
      siteNavigation = (<ProjectPageNavigation />)
      body = (<KindredComponent />)
    }
    if(this.state.router.current == "waterleigh"){
      siteNavigation = (<ProjectPageNavigation />)
      body = (<WaterleighComponent />)
    }
    if(this.state.router.current == "nonapark"){
      siteNavigation = (<ProjectPageNavigation />)
      body = (<NonaParkComponent />)
    }
    if(this.state.router.current == "seaisle"){
      siteNavigation = (<ProjectPageNavigation />)
      body = (<SeaIsleComponent />)
    }
    if(this.state.router.current == "altis"){
      siteNavigation = (<ProjectPageNavigation />)
      body = (<SandlakeComponent />)
    }
    if(this.state.router.current == "dwell"){
      siteNavigation = (<ProjectPageNavigation />)
      body = (<DwellNonaPlaceComponent />)
    }
    if(this.state.router.current == "plazaUniversity"){
      siteNavigation = (<ProjectPageNavigation />)
      body = (<PlazaUniversityComponent />)
    }
    if(this.state.router.current == "ventanas"){
      siteNavigation = (<ProjectPageNavigation />)
      body = (<LasVentanasComponent />)
    }
    if(this.state.router.current == "brisas"){
      siteNavigation = (<ProjectPageNavigation />)
      body = (<LasBrisasComponent />)
    }
    if(this.state.router.current == "harmony"){
      siteNavigation = (<ProjectPageNavigation />)
      body = (<HarmonyComponent />)
    }
    if(this.state.router.current == "magic"){
      siteNavigation = (<ProjectPageNavigation />)
      body = (<MagicVillageComponent />)
    }
    if(this.state.router.current == "bella"){
      siteNavigation = (<ProjectPageNavigation />)
      body = (<BellaTraeComponent />)
    }
    if(this.state.router.current == "people"){
      navigation = (<StudioPageNavigation />)
      body = (<StudioPageComponent />)
    }
    if(this.state.router.current == "clients"){
      navigation = (<PracticeNavigation />)
      body = (<ClientsComponent />)
    }
    if(this.state.router.current == "contact"){
      navigation = (<ContactPageNavigation />)
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
