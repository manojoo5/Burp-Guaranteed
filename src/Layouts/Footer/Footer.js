import './Footer.css'

// Assests 
import Location from '../../Assets/location_icon.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="location">
                <label>Location</label>
                <div className='location_text_icon'>
                    <img src={Location} alt="loacation" />
                    <p>Road No:12,Padma Nagar,Banjara Hills,Hyd-500035</p>
                </div>
                <label className="icon_label">Burp-Guaranteed</label>
            </div>
            <div className='active_hours'>
                <label>Hours</label>
                <div>
                    <p>Monday-Friday <p className='timings'>9am to 10:30pm</p> Saturday-Sunday <p className='timings'>7am to 2am</p></p>
                </div>
            </div>
            <div>
                <label>Contact</label>
                <div>
                    +9197**78**60
                </div>
            </div>
        </div>
    )
}

export default Footer;