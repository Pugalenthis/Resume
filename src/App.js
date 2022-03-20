import { useHistory, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { HideAppBar } from "./components/homeappbar";
import {About} from "./components/about"

function App() {

  const history = useHistory();   

  return (
    <div className="App">
      <div className="container-fluid">
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
          <HideAppBar />
          <About />
          </Route>

          <Route path="/skills">
          <HideAppBar />
            <Skills />
           
          </Route>

          <Route path="/projects">
          <HideAppBar />
            <Projects />
          </Route>

          <Route path="/contact">
           <HideAppBar />
            <Contact />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
