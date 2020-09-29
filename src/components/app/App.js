import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import {Navbar, NavbarText, Nav} from "reactstrap/lib";
import Home from "../../pages/home/Home";
import Settings from "../../pages/customers/Customers";
import Login from "../../pages/login/Login";
import AuthService from "../../services/auth-service";

function App() {
    return (
        <div>
            {!AuthService.isConnected() ? (
                <div>
                    <Navbar color={'dark'}>
                        <NavbarText className={'navTitle'}>
                            MapReact
                        </NavbarText>
                    </Navbar>
                    <Login/>
                </div>
            ) : (
            <Router>
                <Navbar color={'dark'}>
                    <NavbarText className={'navTitle'}>
                        MapReact
                    </NavbarText>
                    <Nav>
                        <div className="mr-3">
                            <NavLink className={'navLink mr-2'} to="/">Home</NavLink>
                            <NavLink className={'navLink mr-2'} to="/settings">Settings</NavLink>
                        </div>
                        <div>
                            <NavLink className={'navLink'} to="/" onClick={AuthService.logout()}>Log out</NavLink>
                        </div>

                    </Nav>
                </Navbar>
                    <Switch>
                        <Route path="/settings">
                            <Settings/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
            </Router>
            )}
        </div>
    );
}

export default App;
