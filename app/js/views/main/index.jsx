import React from "react";

import axios from 'axios';

import queryString from 'query-string'

import '../../../assets/css/material-kit.css?v=2.0.3';
import '../../../assets/assets-for-demo/demo.css';
import '../../../assets/assets-for-demo/vertical-nav.css';

import header_logo from '../../../assets/img/header_logo_02.png';
import background from '../../../assets/img/guatape_02948_.jpg';

class Main extends React.Component {


    constructor() {
        super();
    
        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            experience: {
                "title": "",
                "summary": "",
                "description": "",
                "pictures": [
                    "",
                    "",
                    ""
                ],
                "activityDescription": "",
                "tags": [
                    {
  
                        "name": ""
                    }
                ],
                "whatIncludes": [
                    "Nemo enim ipsam voluptatem.",
                    "Ut enim ad minima veniam.",
                    "Quis autem vel eum iure reprehenderit."
                ]
            }
         
        };
      }
    
     
      

    componentDidMount() {
        console.log("--componentDidMount");

        
        console.log("--" +  window.location.search);
        const id =  window.location.search.split("=")[1];
        console.log(id) // "top"
        const url = "http://35.202.20.44:8080/experience/page/" + id;
        axios.get(url)
        .then(res => {
          const dataResp = res.data;
          console.log("--OK ");
        
          this.setState({ experience: dataResp});
          
        }).catch(error => {
          console.log("--Error: " + error);
        }).then(() => {
          // always executed
          console.log("--End request: ");
          
        });
    }



    render() {
        return (

        <div className="product-page ">

        <nav className="navbar navbar-color-on-scroll navbar-transparent   bg-rose  fixed-top  navbar-expand-lg " color-on-scroll="100" id="sectionsNav">
        <div className="container">
            <div className="navbar-translate">
                <a className="navbar-brand" href="../index.html">
                <img src={header_logo} style={{width:140}}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            


        </div>
    </nav>

    <div className="page-header header-filter" data-parallax="true" filter-color="rose" style={{backgroundImage: `url(${background})`}}>
        <div className="container">
            <div className="row title-row">
                <div className="col-md-4 ml-auto">
                   
                </div>
            </div>
        </div>
    </div>

    <div className="section section-gray">
        <div className="container">
            <div className="main main-raised main-product">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="tab-content">
                            <div className="tab-pane" id="product-page1">
                                <img src={this.state.experience.pictures[0]}/>
                            </div>
                            <div className="tab-pane active" id="product-page2">
                                <img src={this.state.experience.pictures[2]}/>
                            </div>
                            <div className="tab-pane" id="product-page3">
                                <img src={this.state.experience.pictures[3]}/>
                            </div>
                        </div>
                        <ul className="nav flexi-nav" data-tabs="tabs" id="flexiselDemo1">
                            <li className="nav-item">
                                <a href="#product-page1" className="nav-link" data-toggle="tab">
                                    <img src={this.state.experience.pictures[0]}/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#product-page2" className="nav-link" data-toggle="tab">
                                    <img src={this.state.experience.pictures[1]}/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#product-page3" className="nav-link" data-toggle="tab">
                                    <img src={this.state.experience.pictures[2]}/>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <h2 className="title">  {this.state.experience.title}</h2>
                        <h3 className="main-price"> {this.state.experience.tags[0].name}</h3>
                        <div id="accordion" role="tablist">
                            <div className="card card-collapse">
                                <div className="card-header" role="tab" id="headingOne">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Descripción
                                            <i className="material-icons">keyboard_arrow_down</i>
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>{this.state.experience.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-collapse">
                                <div className="card-header" role="tab" id="headingTwo">
                                    <h5 className="mb-0">
                                        <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Más información
                                            <i className="material-icons">keyboard_arrow_down</i>
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        {this.state.experience.activityDescription}
                                    </div>
                                </div>
                            </div>
                            <div className="card card-collapse">
                                <div className="card-header" role="tab" id="headingThree">
                                    <h5 className="mb-0">
                                        <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Actividades
                                            <i className="material-icons">keyboard_arrow_down</i>
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        <ul>
                                            {this.state.experience.whatIncludes.map(item => <li>{item}</li>)}
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row pull-right">
                            <button className="btn btn-rose btn-round">Me apunto</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    </div>
    );
    }
}

export default Main