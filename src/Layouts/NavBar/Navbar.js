import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <div className="mw-25">Menu</div>
            <div className="logo_name mw-25 text_center">Burp-Guaranteed.</div>
            <Stack className="mw-25 j-end text_right" direction="row" spacing={2}>
                <Button variant="contained">Sign Up</Button>
                <Button variant="contained">Sign In</Button>
            </Stack>
        </div>
    )
}

export default Navbar