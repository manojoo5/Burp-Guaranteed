import "./Navbar.css"

function Navbar(){
    return(
        <div className="navbar">
            <div className="mw-25">Menu</div>
            <div className="logo_name mw-25 text_center">Burp-Guaranteed.</div>
            <div className="user-action-btn mw-25 text_right">
                <button className="signup-btn">
                    Sign Up
                </button>
                <button>
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default Navbar