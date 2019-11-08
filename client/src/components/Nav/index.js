import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
           
            <div id="navbarNav">
                <div className="navbar-nav">
                    <div className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-info text-white">Search Books</button></a>
                   
                        <a className="nav-link" href="/saved"><button type="button" className="btn btn-warning text-white">Saved Books</button></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;