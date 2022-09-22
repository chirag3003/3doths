import React from 'react';

function Navbar(props) {
    return (
        <nav>
            <div className="logo"><h1>3doths</h1></div>
            <div className="items">
                <a className={"nav-item"} href="">Discover</a>
                <a className={"nav-item"} href="">Features</a>
                <a className={"nav-item"} href="">About us</a>
                <a className={"nav-item"} href="">Pricing</a>
            </div>
            <div className="button"><button>Sign up</button></div>
        </nav>
    );
}

export default Navbar;