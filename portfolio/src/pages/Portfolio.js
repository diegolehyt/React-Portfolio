import React from "react";
// import Hero from "../components/Hero";
import "./portfolio.css";

const styles = {
  headerB: {
    fontFamily: "'Architects Daughter', cursive" 
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive" 
  },
  htmlS: {
    fontSize:'36px', 
    color: 'rgb(141, 62, 62)'
  },
  nodeS: {
    fontSize:'36px', 
    color: 'rgb(65, 109, 71)'
  },
  jsS: {
    fontSize:'36px', 
    color: 'rgb(189, 176, 1)'
  },
  cssS: {
    fontSize:'36px', 
    color: 'rgb(62, 87, 141)'
  },
  bootS: {
    fontSize:'36px', 
    color: 'rgb(62, 63, 141)'
  },
  dbS: {
    fontSize:'36px'
  },
  gitS: {
    fontSize:'24px', 
    color: 'rgb(110, 94, 136)'
  },
  githS: {
    fontSize:'24px', 
    color: 'rgb(66, 66, 66)'
  },
  ytS: {
    fontSize:'24px', 
    color: 'lightcoral'
  },
  mhS: {
    maxHeight: '800px'
  },
  mWork: {
    color: '#52a4db'
  },
  H: {
    height: '100%'
  },
  W: {
    width: '100%'
  },
  view: {
    position: 'relative',
    overflow: 'hidden'
  },
  viddeo: {
    position: 'fixed',
    minHeight: '100%',
    minWidth: '100%'
  },
  sec: {
    marginTop: '75px'
  }
}

function Portfolio() {
  return (
    <div id="intro-section" style={styles.view}>
        
      <video className="video-intro" style={styles.viddeo} poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline
        autoPlay muted loop>
        <source src="https://static.videezy.com/system/resources/previews/000/009/156/original/fvbhd0229.mp4" type="video/mp4"/>
      </video>
      <div className="mask rgba-gradient d-flex justify-content-center align-items-center">
  

        <div className="container my-5">

          
          <section style={styles.sec}>
            
            <style>
              
            </style>
            
            
            <div className="modal fade" id="revisa" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body p-0" style={styles.mhS}>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    
                    
                    <div className="row">
                    
          
                      <div className="col-md-6 py-5 pl-5">
                        
                        <h5 className="font-weight-normal mb-3">Revisa</h5>
        
                        <p className="text-muted">Restaurant quality reviewing app, that contains recent relevant information and reviews on a restaurant, affordability, atmosphere/location, food and if it is clean.</p>
        
                        <ul className="list-unstyled font-small mt-5">
                          <li>
                            <p className="text-uppercase mb-2"><strong>Date</strong></p>
                            <p className="text-muted mb-4">June 1, 2020</p>
                          </li>
        
                          <li>
                            <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                            <p className="text-muted mb-4">
                              <i className="fab fa-node" style={styles.nodeS}></i>
                              <i className="fab fa-css3-alt" style={styles.cssS}></i>
                              <i className="fab fa-html5" style={styles.htmlS}></i>
                              <i className="fab fa-js-square" style={styles.jsS}></i>
                              <i className="fab fa-bootstrap" style={styles.bootS}></i>
                              <i className="fas fa-database" style={styles.dbS}></i>
                            </p>
                          </li>
        
                          <li>
                            <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                            <a href="https://revisaproject2.herokuapp.com/">- <i className="fab fa-github-square" style={styles.gitS}></i> Deployment</a>
                            <br/>
                            <a href="https://github.com/diegolehyt/Project2.git">- <i className="fab fa-git-square" style={styles.githS}></i> Repository</a>
                            <br/>
                            <a href="https://youtu.be/DWZUl9LlSak">- <i className="fab fa-youtube" style={styles.ytS}></i> Demo</a>
                          </li>
                        </ul>
                        
                      </div>

                      <div className="col-md-6">
                        
                        <div className="view rounded-right" style={styles.H}>
                          <img className="img-fluid"  style={styles.W} src="https://image.freepik.com/foto-gratis/copas-vino-mesa-bokeh-fondo-bac_23-2148261695.jpg" alt="Sample"/>
                        </div>
                        
                      </div>
                    
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="burger" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body p-0" style={styles.mhS}>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    
                    
                    <div className="row">
                    
                      
                      <div className="col-md-6 py-5 pl-5">
                        
                        <h5 className="font-weight-normal mb-3">Eat Da Burger!</h5>
        
                        <p className="text-muted">Web application that can help you keep your Burgers orders more organize. Powered by MySQL and javascript you can see the served and devoured Burgers (from the database).</p>
        
                        <ul className="list-unstyled font-small mt-5">
                          <li>
                            <p className="text-uppercase mb-2"><strong>Date</strong></p>
                            <p className="text-muted mb-4">May 17, 2020</p>
                          </li>
        
                          <li>
                            <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                            <p className="text-muted mb-4">
                              <i className="fab fa-node" style={styles.nodeS}></i>
                              <i className="fab fa-css3-alt" style={styles.cssS}></i>
                              <i className="fab fa-html5" style={styles.htmlS}></i>
                              <i className="fab fa-js-square" style={styles.jsS}></i>
                              <i className="fab fa-bootstrap" style={styles.bootS}></i>
                              <i className="fas fa-database" style={styles.dbS}></i>
                            </p>
                          </li>
        
                          <li>
                            <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                            <a href="https://secret-garden-39364.herokuapp.com/">- <i className="fab fa-github-square" style={styles.gitS}></i> Deployment</a>
                            <br/>
                            <a href="https://github.com/diegolehyt/homework13.git">- <i className="fab fa-git-square" style={styles.githS}></i> Repository</a>
                          </li>
                        </ul>
                        
                      </div>
 
                      <div className="col-md-6">
                        
                        <div className="view rounded-right" style={styles.H}>
                          <img className="img-fluid" style={styles.W} src="https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Sample"/>
                        </div>
                        
                      </div>
              
                    
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="fly" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body p-0" style={styles.mhS}>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    
                    
                    <div className="row">
                    
                      
                      <div className="col-md-6 py-5 pl-5">
                        
                        <h5 className="font-weight-normal mb-3">Flydable</h5>
        
                        <p className="text-muted">"Flydable" (Cheap EconomyFlight Finder) is an app that will help you find the cheapest flight tickets which will provide results in the currency of your choice.</p>
        
                        <ul className="list-unstyled font-small mt-5">
                          <li>
                            <p className="text-uppercase mb-2"><strong>Date</strong></p>
                            <p className="text-muted mb-4">April 28, 2020</p>
                          </li>
        
                          <li>
                            <li>
                              <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                              <p className="text-muted mb-4">
                                <i className="fab fa-css3-alt" style={styles.cssS}></i>
                                <i className="fab fa-html5" style={styles.htmlS}></i>
                                <i className="fab fa-js-square" style={styles.jsS}></i>
                              </p>
                            </li>
          
                            <li>
                              <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                              <a href="https://diegolehyt.github.io/project1/">- <i className="fab fa-github-square" style={styles.gitS}></i> Deployment</a>
                              <br/>
                              <a href="https://github.com/diegolehyt/project1.git">- <i className="fab fa-git-square" style={styles.githS}></i> Repository</a>
                            </li>
                          </li>  
                        </ul>
                        
                      </div>
                      
                    
                      
                      <div className="col-md-6">
                        
                        <div className="view rounded-right" style={styles.H}>
                          <img className="img-fluid" style={styles.W} src="https://c0.wallpaperflare.com/preview/927/474/546/orange-plane-rose-blue.jpg" alt="Sample"/>
                        </div>
                        
                      </div>
                      
                    
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="notes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body p-0" style={styles.mhS}>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    
                    
                    <div className="row">
                    
                      
                      <div className="col-md-6 py-5 pl-5">
                        
                        <h5 className="font-weight-normal mb-3">Note Taker</h5>
        
                        <p className="text-muted">Server side application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.</p>
        
                        <ul className="list-unstyled font-small mt-5">
        
                          <li>
                            <p className="text-uppercase mb-2"><strong>Date</strong></p>
                            <p className="text-muted mb-4">may 9, 2020</p>
                          </li>
        
                          <li>
                            <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                            <p className="text-muted mb-4">
                              <i className="fab fa-node" style={styles.nodeS}></i>
                              <i className="fab fa-css3-alt" style={styles.cssS}></i>
                              <i className="fab fa-html5" style={styles.htmlS}></i>
                              <i className="fab fa-js-square" style={styles.jsS}></i>
                              <i className="fab fa-bootstrap" style={styles.bootS}></i>
                        
                            </p>
                          </li>
        
                          <li>
                            <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                            <a href="https://mighty-eyrie-28086.herokuapp.com/">- <i className="fab fa-github-square" style={styles.gitS}></i> Deployment</a>
                            <br/>
                            <a href="https://github.com/diegolehyt/homework11.git">- <i className="fab fa-git-square" style={styles.githS}></i> Repository</a>
                          </li>
                        </ul>
                        
                      </div>
                      
                    
                      
                      <div className="col-md-6">
                        
                        <div className="view rounded-right" style={styles.H}>
                          <img className="img-fluid" style={styles.W} src="https://images.squarespace-cdn.com/content/v1/59a8b767d55b41693d47e565/1517889408792-ABQJAX3XBCDT1VL7436T/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/vertical.jpg" alt="Sample"/>
                        </div>
                        
                      </div>
                      
                    
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="myteam" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body p-0" style={styles.mhS}>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    
                    
                    <div className="row">
                    
                      
                      <div className="col-md-6 py-5 pl-5">
                        
                        <h5 className="font-weight-normal mb-3">Myteam.HTML Generator</h5>
        
                        <p className="text-muted">"Team Generator" is an app that will help you to create HTML pages with the info of your Team members. This app will run in the command line powered by JavaScript, using npm plus the data from the API "Github".</p>
        
                        <ul className="list-unstyled font-small mt-5">
                          <li>
                            <p className="text-uppercase mb-2"><strong>Date</strong></p>
                            <p className="text-muted mb-4">April 14, 2020</p>
                          </li>
        
                          <li>
                            <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                            <p className="text-muted mb-4">
                              <i className="fab fa-node" style={styles.nodeS}></i>
                              <i className="fab fa-css3-alt" style={styles.cssS}></i>
                              <i className="fab fa-html5" style={styles.htmlS}></i>
                              <i className="fab fa-js-square" style={styles.jsS}></i>
                              <i className="fab fa-bootstrap" style={styles.bootS}></i>

                            </p>
                          </li>
        
                          <li>
                            <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                            <a href="https://github.com/diegolehyt/homework10.git">- <i className="fab fa-git-square" style={styles.githS}></i> Repository</a>
                            <br/>
                            <a href="https://youtu.be/go7Hk2zJe04">- <i className="fab fa-youtube" style={styles.ytS}></i> Demo</a>
                          </li>
                        </ul>
                        
                      </div>
                      
                    
                      
                      <div className="col-md-6">
                        
                        <div className="view rounded-right" style={styles.H}>
                          <img className="img-fluid" style={styles.W} src="https://raw.githubusercontent.com/diegolehyt/Portfolio-v2.0/master/images/vMyteam.jpg" alt="Sample"/>
                        </div>
                        
                      </div>
                      
                    
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="weather" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body p-0" style={styles.mhS}>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    
                    
                    <div className="row">
                    
                      
                      <div className="col-md-6 py-5 pl-5">
                        
                        <h5 className="font-weight-normal mb-3">Weather Dashboard</h5>
        
                        <p className="text-muted">This repository content the html files: index "main page", the CSS styles "style.css", the JavaScript "script.js" and an "image" folder with the captures for this Readme File.</p>
        
                        <ul className="list-unstyled font-small mt-5">
        
                          <li>
                            <p className="text-uppercase mb-2"><strong>Date</strong></p>
                            <p className="text-muted mb-4">March 27, 2020</p>
                          </li>
        
                          <li>
                            <p className="text-uppercase mb-2"><strong>Skills</strong></p>
                            <p className="text-muted mb-4">

                              <i className="fab fa-css3-alt" style={styles.cssS}></i>
                              <i className="fab fa-html5" style={styles.htmlS}></i>
                              <i className="fab fa-js-square" style={styles.jsS}></i>
                              <i className="fab fa-bootstrap" style={styles.bootS}></i>
                  
                            </p>
                          </li>
        
                          <li>
                            <p className="text-uppercase mb-2"><strong>URLs</strong></p>
                            <a href="https://diegolehyt.github.io/homework6/">- <i className="fab fa-github-square" style={styles.gitS}></i> Deployment</a>
                            <br/>
                            <a href="https://github.com/diegolehyt/homework6.git">- <i className="fab fa-git-square" style={styles.githS}></i> Repository</a>
                          </li>
                        </ul>
                        
                      </div>
                      
                    
                      
                      <div className="col-md-6">
                        
                        <div className="view rounded-right" style={styles.H}>
                          <img className="img-fluid" style={styles.W} src="https://i.pinimg.com/736x/4d/16/6b/4d166b4e8a6dd11af1ee5d5764138ac6--lightning-storms-lightning-strikes.jpg" alt="Sample"/>
                        </div>
                        
                      </div>
                      
                    
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
        
            <h6 className="font-weight-bold text-center white-text text-uppercase small mb-4 animated fadeInRight">Portfolio</h6>
            <h3 className="font-weight-bold text-center pb-2 animated fadeInRight" style={styles.mWork}>My Work</h3>
            <hr className="w-header my-4 animated fadeInRight"/>
            <p className="lead text-center text-muted pt-2 mb-5 animated fadeInRight white-text">You can find several projects in this section. In order to see more info "CLICK" on a specific card (Deploy URL, Description, Demo, Repository)</p>
            
        
            <div className="row">

        
            </div>
        
        
           
            <div className="tab-content mb-5  animated fadeInRight">
        
              
              <div className="tab-pane fade show in active" id="panel31" role="tabpanel">
        
                
                <div className="row">
        
                  
                  <div className="col-md-12 col-lg-4">
        
                    
                    <a className="card hoverable mb-4" data-toggle="modal" data-target="#revisa" href>
        
                      
                      <img className="card-img-top" src="https://raw.githubusercontent.com/diegolehyt/Portfolio-v2.0/master/images/revisa.png" alt="Card cap"/>
        
                
                      <div className="card-body">
        
                        <h5 className="my-3">Revisa</h5>
                        <p className="card-text text-uppercase mb-3">Restaurants reviews</p>
        
                      </div>
        
                    </a>
 
                    <a className="card hoverable mb-4" data-toggle="modal" data-target="#burger" href>
        
                      
                      <img className="card-img-top" src="https://raw.githubusercontent.com/diegolehyt/Portfolio-v2.0/master/images/burger.png" alt="Card cap"/>
        
                     
                      <div className="card-body">
        
                        <h5 className="my-3">Eat Da Burger</h5>
                        <p className="card-text text-uppercase mb-3">Devour burgers app</p>
        
                      </div>
        
                    </a>
                    
        
                  </div>
                  
        
                  
                  <div className="col-md-6 col-lg-4">
        
                    
                    <a className="card hoverable mb-4" data-toggle="modal" data-target="#fly" href>
        
                      
                      <img className="card-img-top" src="https://raw.githubusercontent.com/diegolehyt/Portfolio-v2.0/master/images/fly.png" alt="Card cap"/>
        
                     
                      <div className="card-body">
        
                        <h5 className="my-3">Flydable</h5>
                        <p className="card-text text-uppercase mb-3">Cheap Flight finder</p>
        
                      </div>
        
                    </a>
                    
        
                    
                    <a className="card hoverable mb-4" data-toggle="modal" data-target="#notes" href>
        
                      
                      <img className="card-img-top" src="https://raw.githubusercontent.com/diegolehyt/Portfolio-v2.0/master/images/notes.png" alt="Card cap"/>
        
                     
                      <div className="card-body">
        
                        <h5 className="my-3">Note Taker</h5>
                        <p className="card-text text-uppercase mb-3">Save your daily notes</p>
        
                      </div>
        
                    </a>
                    
        
                  </div>
                  
        
                  
                  <div className="col-md-6 col-lg-4">
        
                    
                    <a className="card hoverable mb-4" data-toggle="modal" data-target="#myteam" href>
        
                      
                      <img className="card-img-top" src="https://raw.githubusercontent.com/diegolehyt/Portfolio-v2.0/master/images/myteam.png" alt="Card cap"/>
        
                     
                      <div className="card-body">
        
                        <h5 className="my-3">HTML Generator</h5>
                        <p className="card-text text-uppercase mb-3">Generate MyTeam.html</p>
        
                      </div>
        
                    </a>
                    
        
                    
                    <a className="card hoverable mb-4" data-toggle="modal" data-target="#weather" href>
        
                      
                      <img className="card-img-top" src="https://raw.githubusercontent.com/diegolehyt/Portfolio-v2.0/master/images/weather.png" alt="Card cap"/>
        
                     
                      <div className="card-body">
        
                        <h5 className="my-3">Weather app</h5>
                        <p className="card-text text-uppercase mb-3">Weather Dashboard</p>
        
                      </div>
        
                    </a>
                    
        
                  </div>
                  
        
                </div>
                
        
              </div>
            
        
            </div>
         
        
          </section>
 
        
        </div>


      </div>

    </div>
  );
}

export default Portfolio;
