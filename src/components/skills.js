import "../styles/skills.css";

export function Skills() {
  return (
    <section id="skills">
      <div class="container skills-container">
       
        <div class="row" id="skills-row">
          <div class="col-12">
          <h1 class="skills_heading">SKILLS</h1>
          </div>

          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 progress-bar-column-1">
            <div className="m-2">
              <span>HTML</span>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="m-2">
              <span>CSS</span>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="m-2">
              <span>JAVASCRIPT</span>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="m-2">
              <span>BOOTSTRAP</span>
              <div class="progress">
                <div
                  class="progress-bar"
                  style={{ width: "85%" }}
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="m-2">
              <span>REACT JS</span>
              <div class="progress">
                <div
                  class="progress-bar"
                  style={{ width: "85%" }}
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              </div>
            </div>
         

         <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 progress-bar-column-2">
            <div className="m-2">
              <span>NODE JS</span>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="m-2">
              <span>EXPRESS</span>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="m-2">
              <span>MONGO DB</span>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="m-2">
              <span>MYSQL</span>
              <div class="progress">
                <div
                  class="progress-bar"
                  style={{ width: "85%" }}
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="m-2">
              <span>MATERIAL UI</span>
              <div class="progress">
                <div
                  class="progress-bar"
                  style={{ width: "75%" }}
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
