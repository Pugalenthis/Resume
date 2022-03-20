import "../styles/contact.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export function Contact(){
    return (
       
        <section id="contact">
          <div className="container contact-container">
          
              <div className="row contact-row" >
              
                  <div className="col-12 col-sm-11 col-md-5 col-lg-5 col-xl-5 main-contact-column mt-sm-3 mt-md-3 mt-lg-3">
                    <div className="row">
                      <div className="col-2 mr-1 inner-contact-column">
                      < MailOutlineIcon  className="contact-icon mb-2"/>
                        </div>
                        <div className="col-9 inner-contact-column">
                           <h5>Mail me</h5>
                          <p>aravindpugal505@gmail.com</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-sm-11 col-md-5 col-lg-5 col-xl-5 main-contact-column mt-3 mt-sm-3 mt-md-3 mt-lg-3">
                    <div className="row">
                      <div className="col-2 mr-1 inner-contact-column">
                      < LocalPhoneIcon  className="contact-icon"/>
                        </div>
                        <div className="col-9 inner-contact-column">
                           <h5>Feel free to call me</h5>
                          <p>+91-7094376336</p>
                        </div>
                      </div>
                    </div>
              
              </div>

              <div className="row contact-row"  >
              
               <div className="col-12 col-sm-11 col-md-5 col-lg-5 col-xl-5 main-contact-column mt-3 mt-sm-3 mt-md-3 mt-lg-3">
                 <div className="row">
                   <div className="col-2 mr-1 inner-contact-column">
                   < WhatsAppIcon  className="contact-icon"/>
                     </div>
                     <div className="col-9 inner-contact-column">
                        <h5>Whatsapp</h5>
                       <p>+91-7094376336</p>
                     </div>
                   </div>
                 </div>

                 <div className="col-12 col-sm-11 col-md-5 col-lg-5 col-xl-5 main-contact-column mt-3 mt-sm-3 mt-md-3 mt-lg-3">
                 <div className="row">
                   <div className="col-2 mr-1 d-flex align-content-center inner-contact-column">
                   < ConnectWithoutContactIcon  className="contact-icon"/>
                     </div>
                     <div className="col-9  inner-contact-column">
                        <h5>Social profiles</h5>
                       <p><a
                    target="_blank"
                    href="https://www.facebook.com/pugalenthisekaran.pugalenthisekaran.5" rel="noreferrer"
                  >
                    <i
                      class="fa fa-facebook-official home-contact-section"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/pugalenthi-sekaran-247b651b1" rel="noreferrer"
                  >
                    <i
                      class="fa fa-linkedin-square home-contact-section"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/pugalenthisekaran/" rel="noreferrer"
                  >
                    <i
                      class="fa fa-instagram home-contact-section"
                      aria-hidden="true"
                    ></i>
                  </a>
                  
                 </p>
                     </div>
                   </div>
                 </div>       
            </div>
          </div>
        </section>

    )
}

