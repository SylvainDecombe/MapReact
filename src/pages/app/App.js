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
import Customers from "../../pages/customers/Customers";
import Login from "../../pages/login/Login";
import AuthService from "../../services/auth-service";
import Manufacturers from "../../pages/manufacturers/Manufacturers";
import Admin from "../../pages/admin/Admin";

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
                            <NavLink className={'navLink mr-3'} to="/">
                                <i className="pi pi-home mr-1"/>
                                Home</NavLink>
                            <NavLink className={'navLink mr-3'} to="/customers">
                                <i className="pi pi-users mr-1"></i>
                                Clients</NavLink>
                            <NavLink className={'navLink mr-3'} to="/manufacturers">
                                <i className="pi pi-money-bill mr-1"></i>
                                Fabricants</NavLink>
                            <NavLink className={'navLink mr-3'} to="/admin">
                                <i className="pi pi-cog mr-1"></i>
                                Administration</NavLink>
                        </div>
                        <div>
                            <NavLink className={'navLink'} to="/" onClick={AuthService.logout()}>
                                <i  className="pi pi-sign-out mr-1"></i>Log out</NavLink>
                        </div>

                    </Nav>
                </Navbar>
                    <Switch>
                        <Route path="/customers">
                            <Customers/>
                        </Route>
                        <Route path="/manufacturers">
                            <Manufacturers/>
                        </Route>
                        <Route path="/admin">
                            <Admin/>
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
