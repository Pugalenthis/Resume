import "../styles/projects.css"
import contact_manager from "../images/contact_manager.png"
import dashboard from "../images/dashboard.png"
import games from "../images/games.png"
import student_app from "../images/student_app.png"
import to_do_list from "../images/to_do_list.png"
import library from "../images/library.png"


export function Projects(){
    return(
        <div className= "container projects-contianer">
           <div className="row  projects-row">
               <div className="col-12 col-sm-12 col-md-6 col-lg-4 project-column">
                   <img src={contact_manager} alt="" />
                   <div className="projects-button my-3 d-flex justify-content-around">
                      <a className="projects-github-button btn bg-success"  href="https://github.com/Pugalenthis/contact-manager">Git hub</a>
                    <a className="projects-read-button btn bg-primary" href="https://determined-archimedes-79fd6c.netlify.app">Project</a>
                   </div>   
               </div>
               <div className="col-12 col-sm-12 col-md-6 col-lg-4 project-column">
                   <img src={student_app} alt="" />
                   <div className="projects-button my-3 d-flex justify-content-around">
                      <a className="projects-github-button btn bg-success" href="https://github.com/Pugalenthis/student-app">Git hub</a>
                       <a className="projects-read-button btn bg-primary" href="https://elated-boyd-708cc8.netlify.app/">Project</a>
                   </div> 
               
               </div>
               <div className="col-12 col-sm-12 col-md-6 col-lg-4 project-column">
                   <img src={library} alt="" />
                   <div className="projects-button my-3 d-flex justify-content-around">
                    <a  className="projects-github-button btn bg-success" href="https://github.com/Pugalenthis/library">Git hub</a>
                      <a className="projects-read-button btn bg-primary" href="https://welcome-to-library.netlify.app/">Project</a>
                   </div> 
               </div>
               <div className="col-12 col-sm-12 col-md-6 col-lg-4 project-column">
                   <img src={to_do_list} alt="" />
                   <div className="projects-button my-3 d-flex justify-content-around">
                       <a className="projects-github-button btn bg-success" href="https://github.com/Pugalenthis/TO-DO-LIST-APP">Git hub</a>
                       <a className="projects-read-button btn bg-primary" href="https://gifted-bell-6bffd5.netlify.app/">Project</a>
                   </div> 
               </div>

               <div className="col-12 col-sm-12 col-md-6 col-lg-4 project-column">
                   <img src={dashboard} alt="" />
                   <div className="projects-button my-3 d-flex justify-content-around">
                       <a className="projects-github-button btn bg-success" href="https://github.com/Pugalenthis/dashboard">Git hub</a>
                      <a  className="projects-read-button btn bg-primary" href="https://jolly-goodall-b9ad6e.netlify.app/">Project</a>
                   </div> 
               </div>


               <div className="col-12 col-sm-12 col-md-6 col-lg-4 project-column">
                   <img src={games} alt="" />
                   <div className="projects-button my-3 d-flex justify-content-around">
                        <a className="projects-github-button btn bg-success" href="https://github.com/Pugalenthis/react-class-task">Git hub</a>
                      <a className="projects-read-button btn bg-primary" href="https://mystifying-shirley-0fff7d.netlify.app/">Project</a>
                   </div> 
               </div>
           </div>
        </div>
        
    )
}