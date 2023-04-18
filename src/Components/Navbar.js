import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">CV_ID_Maker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link className={`nav-link ${props.loginAccount === '' ? 'disabled' : ''}`} to="/cv">
                                <button disabled={props.loginAccount === ''} className="btn btn-outline-dark btn-sm mx-2" type="button" style={{ color: "white" }}>CV/Resume</button>
                            </Link>
                            <Link className={`nav-link ${props.loginAccount === '' ? 'disabled' : ''}`} to="/id">
                                <button disabled={props.loginAccount === ''} className="btn btn-outline-dark btn-sm mx-2" type="button" style={{ color: "white" }}>ID_Card</button>
                            </Link>
                            <Link className={`nav-link ${props.loginAccount === '' ? 'disabled' : ''}`} to="/">
                                <button disabled={props.loginAccount === ''} className="btn btn-outline-dark btn-sm mx-2" type="button" style={{ color: "white" }} onClick={props.logout}>Logout</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar
