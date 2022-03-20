import "../styles/about.css";

export function About(){
    return(
         
         <section id="about">
         <div class="container" id="about-container">
           <div class="row" id="about-row">
             <div class="col-12" id="about-heading">
               
               <h1>ABOUT ME</h1>
             </div>
             <div 
               class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 photo-column"
               id="myimage"
             >
               <img
                 src="https://i.pinimg.com/originals/a3/fb/5d/a3fb5def518705c9cc739299234c2779.jpg"
                 alt="profile"
               ></img>
             </div>
             <div
               class="col-12 col-sm-12 col-md-8 col-lg-8 "
               id="about-column"
             >
               <h3 class="pt-3 pb-3 pt-sm-3  pb-sm-3 pt-md-0 pt-lg-0 pt-xl-0 ">
                 Full Stack Developer
               </h3>
               <div class="row">
                 <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 about-column">
                   <ul>
                     <li>
                       <i class="fa fa-chevron-right"></i>
                       <strong>Date Of Birth :</strong>24/06/1999
                     </li>
                     <li>
                       <i class="fa fa-chevron-right"></i>
                       <strong>Age : </strong>22
                     </li>
                     <li>
                       <i class="fa fa-chevron-right"></i>
                       <strong>Phone : </strong>+91 7094376336
                     </li>
                     <li>
                       <i class="fa fa-chevron-right"></i>
                       <strong>City : </strong>Krishnagiri
                     </li>
                   </ul>
                 </div>
                 <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  about-column">
                   <ul>
                     <li>
                       <i class="fa fa-chevron-right "></i>
                       <strong>Education :</strong>Mechnaical Engineering
                     </li>
                     <li>
                       <i class="fa fa-chevron-right"></i>
                       <strong>Mail : </strong>aravindpugal505@gmail.com
                     </li>
                     <li>
                       <i class="fa fa-chevron-right"></i>
                       <strong>Address :193,velavalli,Krishnagiri. </strong>
                     </li>
                     <li>
                       <i class="fa fa-chevron-right"></i>
                       <strong>Pincode : </strong>635306
                     </li>
                   </ul>
                 </div>
                 <div class="col-12">
                   <p style={{letterSpacing: "1px"}}>
                     I learned full stack development in guvi Edu-tech online
                     learning platform.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
    )
}

