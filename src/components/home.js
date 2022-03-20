import "../App.css";
import Button from '@mui/material/Button';
import { useHistory,Route,Switch} from "react-router-dom";
import "../styles/home.css";


export function Home(){

    const history = useHistory();
    return(
        <section id="home">
        <div className="container text-center" id="home-container">
          <div className="row">
            <div className="col-12">
              <div className="home d-flex  flex-column">
                <div className="heading ">
                  <h1>PUGALENTHI S</h1>
                  <h2>Full Stack Developer by Profession</h2>
                </div>

                <nav className="navbar ">
                  {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                  >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </button> */}
                  <div>
                    <ul >
                      <li >
                        <Button  onClick={()=>history.push("/")}>
                          Home
                        </Button>

                      </li>
                      <li >
                        <Button  onClick={()=>history.push("/about")}>
                          About
                        </Button>
                      </li>
                      <li >
                        <Button  onClick={()=>history.push("/skills")}>
                          Skills
                        </Button>
                      </li>
                      <li >
                        <Button  onClick={()=>history.push("/projects")}>
                          Projects
                        </Button>
                      </li>
                      <li >
                        <Button  onClick={()=>history.push("/contact")}>
                          Contact
                        </Button>
                      </li>
                    </ul>
                  </div>
                </nav>

                <div class="social-medias ">
                  <a target="_blank" href="https://github.com/Pugalenthis">
                    <i
                      class="fa fa-github-square home-contact-section"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a target="_blank" href="https://wa.me/+917094376336">
                    <i
                      class="fa fa-whatsapp home-contact-section"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/pugalenthisekaran.pugalenthisekaran.5"
                  >
                    <i
                      class="fa fa-facebook-official home-contact-section"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/pugalenthi-sekaran-247b651b1"
                  >
                    <i
                      class="fa fa-linkedin-square home-contact-section"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/pugalenthisekaran/"
                  >
                    <i
                      class="fa fa-instagram home-contact-section"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a target="_blank" href="">
                    <i
                      class="fa fa-twitter home-contact-section"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}