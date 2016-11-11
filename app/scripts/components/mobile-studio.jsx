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


var MobileStudioComponent = React.createClass({

  showModal: function(){
    this.refs.modal.show();
  },

  hideModal: function(){
    this.refs.modal.hide();
  },

  callback: function(event){
    console.log(event);
  },

  barryModal: function(){
    this.refs.barry.show();
  },
  hideBarry: function(){
    this.refs.barry.hide();
  },

  scottModal: function(){
    this.refs.scott.show();
  },
  hideScott: function(){
    this.refs.scott.hide();
  },

  jimModal: function(){
    this.refs.jim.show();
  },
  hideJim: function(){
    this.refs.jim.hide();
  },


  render: function(){

    return(
      <div className="container-fluid mobile-studio-component">
        <div className="studio-background"></div>
        <div className="row">
          <div className="practice-container col-md-12">
            <div className="studio-title">
              <div className="overview-logo"></div>
              <h2>Studio Leaders</h2>
            </div>
          </div>
        </div>
        <div className="content-row row">
          <div className="studio-content-container col-md-12">
            <div className="barry col-md-4">
              <div className="barry-photo" role="button" onClick={this.barryModal}></div>
              <div className="barry-title">
                <h5 className="title-spacing">Barry Rymer, PLA</h5>
                <h5>Founder - Managing Principal</h5>
              </div>
              <Modal ref="barry" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                <div className="modal-picture-barry" onClick={this.hideBarry}></div>
                <div className="barry-writeup" onClick={this.hideBarry}>
                  <h4 className="staff-title">Barry H. Rymer, PLA</h4>

                  <p className="barry-first-paragraph">Barry began his landscape architecture career over 30 years ago in Central Florida. Having received his BLA from the University of Florida in 1985, he sought after a fully integrated understanding of the profession and spent much of his career working for leading multi-disciplinary design firms. It was with these experiences where he learned the value of a coordinated design effort with all design disciplines in developing buildable and lasting solutions.</p>

                  <p className="barry-second-paragraph">In the spring of 2011, Barry founded Land Resource Design Group. The establishment of the firm was inspired by his core belief of viewing land as an extremely valuable resource. Barry works closely with his clients and leadership team to collaborate with other design disciplines in providing thoughtful design, carefully crafted execution, and timeless value in the communities they create. Over the years, he has had the privilege to work with award-wining master-planned community developers, leading national builders, industry-leading multi-family developers and world leaders in theme park entertainment.</p>

                  <p className="barry-third-paragraph">Barry loves his role as husband and father to his wife of thirty years and his three talented and now adult children. In his spare time, he is a big sports fan, enjoys managing his daughter’s golf career and serving up some tasty BBQ from his prized Big Green Egg.</p>
                  <div className="modal-close" onClick={this.hideBarry}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="scott col-md-4">
              <div className="scott-photo" role="button" onClick={this.scottModal}></div>
              <div className="scott-title">
                <h5 className="title-spacing">Scott Moorman</h5>
                <h5>Sr. Planner/Project Manager</h5>
              </div>
              <Modal ref="scott" modalStyle={modalStyle} modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                <div className="modal-picture-scott" onClick={this.hideScott}></div>
                <div className="scott-writeup" onClick={this.hideScott}>
                  <h4 className="staff-title">Scott Moorman, Sr. Planner/Project Manager</h4>

                  <p className="scott-first-paragraph">Since Scott graduated from the University of Florida’s school of Landscape Architecture in 1993, he has compiled over 20 years of experience practicing both Landscape Architect and Land Planning in the Central Florida arena. </p>

                  <p className="scott-second-paragraph">Prior to joining LRDG, he worked at several multi-disciplinary Civil and Architectural firms and has developed a strong working knowledge of each facet of the design, entitlements, production and construction processes.  His experience spans nearly all levels of project styles that a Landscape Architect could hope to work on during their career.  DRI development, site planning and entitlements, rezonings and comp plan amendments, preliminary engineering and the full gamut of Landscape Architectural services for both private and public sector Clients. </p>

                  <p className="scott-third-paragraph">Here at LRDG, Scott specializes in design and construction plans preparation, project management, consultant team coordination, plans processing, government approvals, construction administration and services marketing to our Client base.</p>

                  <p className="scott-fourth-paragraph">Away from the office Scott is an avid Outdoorsman and enjoys spending time with his fiancé and adult son hunting, fishing and participating in shooting sports.</p>
                  <div className="modal-close" onClick={this.hideScott}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="jim col-md-4">
              <div className="jim-photo" role="button" onClick={this.jimModal}></div>
              <div className="jim-title">
                <h5 className="title-spacing">Jim Morgan, PLA</h5>
                <h5>Sr. Landscape Architect</h5>
              </div>
              <Modal ref="jim" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                <div className="modal-picture-jim" onClick={this.hideJim}></div>
                <div className="jim-writeup" onClick={this.hideJim}>
                  <h4 className="staff-title">Jim Morgan, PLA</h4>

                  <p className="jim-first-paragraph">Jim has actively practiced in the central Florida area since 2005 with over 10 years of experience in landscape architecture.  He’s gained a broad knowledge, which allows him to focus on many issues of every project.  As a landscape architect, his responsibilities are diverse and include client development, contract administration, project management, and production of all documents that leave the office.  His involvement in every project, which generally includes strategic planning, project themes, and overall document production lends a broad perspective to all levels of the development of the project.</p>

                  <p className="jim-second-paragraph">In his spare time, Jim enjoys writing and illustrating children’s books inspired by his 2 kids and wife of 10 years.</p>
                  <div className="jim-modal-close" onClick={this.hideJim}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    )
  }
})




//exports
module.exports = {
  'MobileStudioComponent': MobileStudioComponent
}
