import React from "react";
// import Hero from "../components/Hero";

const styles = {
  headerB: {
    color: "#04375a" 
  },
  headerC: {
    fontFamily: "'Trade Winds', cursive",
    color: '#04375a' 
  },
  headerD: {
    textAlign: "center",
    marginTop: '100px' 
  },
  view: {
    position: 'relative',
    overflow: 'hidden'
  },
  viddeo: {
    position: 'fixed',
    minHeight: '100%',
    minWidth: '0%'
  },
  sec: {
    marginTop: '75px'
  }
}

function About() {
  return (
    <div id="intro-section" style={styles.view}>
        
      <video className="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" style={styles.viddeo} playsInline
        autoPlay muted loop>
        <source src="https://static.videezy.com/system/resources/previews/000/009/156/original/fvbhd0229.mp4" type="video/mp4"/>
      </video>


      <div className="mask rgba-gradient d-flex justify-content-center align-items-center">


        <div className="container px-md-3 px-sm-0 animated fadeInRight">


          <div className="row wow fadeIn">

            <div className="col-12 col-sm-12 col-ms-12 col-lg-12 col-xl-12 testimonial animated fadeInRight" id="Dabout2" style={styles.headerD}>


              <div className="avatar mx-auto mb-4">
                <img src="https://raw.githubusercontent.com/diegolehyt/Portfolio-v2.0/master/images/github3.jpg" className="rounded-circle img-fluid center2"
                  alt="First sample avatar"/>
              </div>
      
              <p className="white-text">
                <i className="fas fa-quote-left"></i>  Hi I'm Diego, I'm from Chile, i moved to Canada about 4 years ago, 
                I'm an engineer and I genuinely enjoy coding. On my free time I like to play the piano, estrategy games
                to keep my brain active and sports like tennis which is one of my passions. 
                I'm a competitive person in terms of mastering new skills to eventually become the best,  
                I have a good balance between logic and creativity, 
                which help me in my career as a web developer and my philosopy is to never stop learning.
              </p>
              <h4 className="font-weight-bold" style={styles.headerC}>Diego Lehyt</h4>
              <h6 className="font-weight-bold my-3" style={styles.headerB}>Full-Stack web developer</h6>
    
            </div>
        

          </div>


        </div>


      </div>


    </div>
  );
}

export default About;
