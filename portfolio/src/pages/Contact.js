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
    marginTop: '10px' 
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
    marginTop: '120px',
    marginBottom: '80px'
  }
}

// const mql = window.matchMedia('(max-width: 400px)');
// const listenerFunc = () => {
  
//   if (mql.matches) {
//     document.body.style.height = "150%";
//   }
// };

// mql.addListener(listenerFunc);


// document.body.style.height = "150%";


function Contact() {
  return (
    <div id="intro-section" style={styles.view}>
        
      <video className="video-intro" style={styles.viddeo} poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline
        autoPlay muted loop>
        <source src="https://static.videezy.com/system/resources/previews/000/009/156/original/fvbhd0229.mp4" type="video/mp4"/>
      </video>


      <div className="mask rgba-gradient d-flex justify-content-center align-items-center">


        <div className="container px-md-3 px-sm-0 animated fadeInRight">


          <div className="row wow fadeIn">

            <div className="col-12 forma animated fadeInRight">
              <section className="text-center px-md-5 mx-md-5 white-text" style={styles.sec}>
            
                
                <h3 className="font-weight-bold mb-4">Contact Me</h3>
            
               
                <div className="row">
            
                
                  <div className="col-md-9 mb-md-0 mb-5">
            
                    <form>
            
                      <div className="row">
                
                        
                        <div className="col-md-6">
                          <div className="md-form mb-0">
                            <input type="text" id="contact-name" className="form-control white-text"/>
                            <label for="contact-name" className="white-text">Your name</label>
                          </div>
                        </div>
                        

                        
                        <div className="col-md-6">
                          <div className="md-form mb-0">
                            <input type="text" id="contact-email" className="form-control white-text"/>
                            <label for="contact-email" className="white-text">Your email</label>
                          </div>
                        </div>
                        

                      </div>
                      
                      <div className="row">

                        
                        <div className="col-md-12">
                          <div className="md-form mb-0">
                            <input type="text" id="contact-Subject" className="form-control white-text"/>
                            <label for="contact-Subject" className="white-text">Subject</label>
                          </div>
                        </div>
                        

                      </div>
      
                      <div className="row">

                        
                        <div className="col-md-12">
                          <div className="md-form">
                            <textarea id="contact-message" className="form-control md-textarea white-text" rows="3"></textarea>
                            <label for="contact-message" className="white-text">Your message</label>
                          </div>
                        </div>
                        

                      </div>
            
                    </form>
            
                    <div className="text-center text-md-left">
                      <a className="btn btn-primary btn-md btn-rounded btn-outline-white" href='/contact'>Send</a>
                    </div>
            
                  </div>
                
            
                
                  <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <i className="fas fa-map-marker-alt fa-2x blue-text"></i>
                        <p>754 Saint Andre Drive, Orleans ON, CANADA</p>
                      </li>
                      <li>
                        <i className="fas fa-phone fa-2x mt-4 blue-text"></i>
                        <p>+ 1 613 263 2192</p>
                      </li>
                      <li>
                        <i className="fas fa-envelope fa-2x mt-4 blue-text"></i>
                        <p className="mb-0">diegolehy00@gmail.com</p>
                      </li>
                    </ul>
                  </div>
                
            
                </div>
               
            
              </section>
            </div>                    
        

          </div>


        </div>


      </div>


    </div>
  );
}

export default Contact;
