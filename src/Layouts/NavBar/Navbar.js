import "./Navbar.css"

function Navbar(){
    return(
        <div className="navbar">
            <div>Menu</div>
            <div className="logo_name">Burp-Guaranteed.</div>
            <div className="user-action-btn">
                <button className="pr-2">
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