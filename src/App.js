import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";

import RestorentList from "./components/RestorentList";
import RestorentUpdate from "./components/RestorentUpdate";
import RestorentDetail from "./components/RestorentDetail";
import RestorentSearch from "./components/RestorentSearch";
import RestorentCreate from "./components/RestorentCreate";
import Hooker from "./components/Hooker";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">EDU-CARE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link exact to="/">Home</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/List">List</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/Update">Update</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/Detail">Detail</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/Create">Create</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/Search">Search</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/Hooker">Hooker</Link></Nav.Link>


            </Nav>

          </Navbar.Collapse>
        </Navbar>

        <Route path="/list">
          <RestorentList />
        </Route>
        <Route path="/Update">
          <RestorentUpdate />
        </Route>
        <Route path="/Detail">
          <RestorentDetail />
        </Route>
        <Route path="/Search">
          <RestorentSearch />
        </Route>
        <Route path="/Create">
          <RestorentCreate />
        </Route>
        <Route path="/Hooker">
          <Hooker />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
