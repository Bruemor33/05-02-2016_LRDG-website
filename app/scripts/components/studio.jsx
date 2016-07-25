var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('Backbone-React-Component');





var StudioPageComponent = React.createClass({


  render: function(){

    return(
      <div className="container-fluid">
        <div className="studio-background"></div>
        <div className="row">
          <div className="col-md-12">
            <div className="barry col-md-4">
              <img src="images/1-barry.jpg"></img>
              <h4 className="staff-title">Barry H. Rymer, PLA</h4>

              <p className="barry-first-paragraph">Barry began his landscape architecture career over 30 years ago in Central Florida. Having received his BLA from the University of Florida in 1985, he sought after a fully integrated understanding of the profession and spent much of his career working for leading multi-disciplinary design firms. It was with these experiences where he learned the value of a coordinated design effort with all design disciplines in developing buildable and lasting solutions.</p>

              <p className="barry-second-paragraph">In the spring of 2011, Barry founded Land Resource Design Group. The establishment of the firm was inspired by his core belief of viewing land as an extremely valuable resource. Barry works closely with his clients and leadership team to collaborate with other design disciplines in providing thoughtful design, carefully crafted execution, and timeless value in the communities they create. Over the years, he has had the privilege to work with award-wining master-planned community developers, leading national builders, industry-leading multi-family developers and world leaders in theme park entertainment.</p>

              <p className="barry-third-paragraph">Barry loves his role as husband and father to his wife of thirty years and his three talented and now adult children. In his spare time, he is a big sports fan, enjoys managing his daughter’s golf career and serving up some tasty BBQ from his prized Big Green Egg.</p>
            </div>
            <div className="scott col-md-4">
              <img src="images/2-scott.jpg"></img>
              <h4 className="staff-title">Scott Moorman, Sr. Planner/Project Manager</h4>

              <p className="scott-first-paragraph">Since Scott graduated from the University of Florida’s school of Landscape Architecture in 1993, he has compiled over 20 years of experience practicing both Landscape Architect and Land Planning in the Central Florida arena. </p>

              <p className="scott-second-paragraph">Prior to joining LRDG, he worked at several multi-disciplinary Civil and Architectural firms and has developed a strong working knowledge of each facet of the design, entitlements, production and construction processes.  His experience spans nearly all levels of project styles that a Landscape Architect could hope to work on during their career.  DRI development, site planning and entitlements, rezonings and comp plan amendments, preliminary engineering and the full gamut of Landscape Architectural services for both private and public sector Clients. </p>

              <p className="scott-third-paragraph">Here at LRDG, Scott specializes in design and construction plans preparation, project management, consultant team coordination, plans processing, government approvals, construction administration and services marketing to our Client base.</p>

              <p className="scott-fourth-paragraph">Away from the office Scott is an avid Outdoorsman and enjoys spending time with his fiancé and adult son hunting, fishing and participating in shooting sports.</p>
            </div>
            <div className="jim col-md-4">
              <img src="images/3-jim.jpg"></img>
              <h4 className="staff-title">Jim Morgan, PLA</h4>

              <p className="jim-first-paragraph">Jim has actively practiced in the central Florida area since 2005 with over 10 years of experience in landscape architecture.  He’s gained a broad knowledge, which allows him to focus on many issues of every project.  As a landscape architect, his responsibilities are diverse and include client development, contract administration, project management, and production of all documents that leave the office.  His involvement in every project, which generally includes strategic planning, project themes, and overall document production lends a broad perspective to all levels of the development of the project.</p>

              <p className="jim-second-paragraph">In his spare time, Jim enjoys writing and illustrating children’s books inspired by his 2 kids and wife of 10 years.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})




//exports
module.exports = {
  'StudioPageComponent': StudioPageComponent
}
