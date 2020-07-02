import React from "react";
// import Hero from "../components/Hero";

const styles = {
  headerB: {
    fontFamily: "'Architects Daughter', cursive" 
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive" 
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
    marginTop: '160px'
  }
}

function Home() {
  return (
    <div id="intro-section" style={styles.view}>
        
      <video className="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" style={styles.viddeo} playsInline
        autoPlay muted loop>
        <source src="https://static.videezy.com/system/resources/previews/000/009/156/original/fvbhd0229.mp4" type="video/mp4"/>
      </video>


      <div className="mask rgba-gradient d-flex justify-content-center align-items-center">


        <div className="container px-md-3 px-sm-0 animated fadeInRight">


          <div className="row wow fadeIn">


            <div className="col-md-12 mb-4 white-text text-center wow fadeIn" style={styles.sec}>

              <h3 style={styles.headerC} className="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">Diego Lehyt</h3>
              <hr className="hr-light my-4 w-75 style-two"/>
              <h4 style={styles.headerB} className="subtext-header mt-2 mb-4">Creative Full-Stack web developer, ready to work with you.</h4>
              <a href="portfolio.html" className="btn btn-rounded btn-outline-white">
                <i className="fas fa-briefcase"></i> My work
              </a>

            </div>
        

          </div>


        </div>


      </div>


    </div>
  );
}

export default Home;
