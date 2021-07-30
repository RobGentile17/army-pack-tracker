import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App"

// import "playbook-ui/dist/fonts/fontawesome-min"
// import "playbook-ui/dist/fonts/regular-min"
// import "playbook-ui/dist/playbook.css"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)
