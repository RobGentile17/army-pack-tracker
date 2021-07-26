import React, { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Pack from "./components/Pack"
import MyRucksack from "./components/MyRucksack"
import './App.css';

function App() {
    const [page, setPage] = useState("/")

  return (
    <div>
        <NavBar onChangePage={setPage} />
        <Switch>
            <Route path="/Pack">
                <Pack />
            </Route>
            <Route path="/MyRucksack">
                <MyRucksack />
            </Route>
            <Route exact path="/Home">
                <Home />
            </Route>
            <Route path="*">
                    <h1>404 not found</h1>
                </Route>
        </Switch>
    </div>
  )
}

export default App;