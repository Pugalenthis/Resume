import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import "../styles/homeappbar.css";
import { useHistory, Route, Switch } from "react-router-dom";
import Button from "@mui/material/Button";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export function HideAppBar(props) {
  const history = useHistory();
  return (
     
            <nav class="navbar navbar-expand-lg bg-dark ">
              <a className="navbar-brand navbar-heading"> Pugalenthi</a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="bi bi-list navbar-icon "></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto nav-list-align" >
                  <li class="nav-item ">
                    <Button class="nav-link" onClick={() => history.push("/")}>Home</Button>
                  </li>
                  <li class="nav-item">
                    <Button class="nav-link" onClick={() => history.push("/about")}>About</Button>
                  </li>
                  <li class="nav-item">
                    <Button class="nav-link" onClick={() => history.push("/skills")}>Skills</Button>
                  </li>
                  <li class="nav-item">
                    <Button class="nav-link" onClick={() => history.push("/projects")}>
                      Projects
                    </Button>
                  </li>
                  <li class="nav-item">
                    <Button class="nav-link" onClick={() => history.push("/contact")}>
                      Contact
                    </Button>
                  </li>
                </ul>
              </div>
            </nav>
   
  );
}
