import React from "react";
import "./style.css";

function PortfolioBody() {
  return (
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
  )

}

export default PortfolioBody;