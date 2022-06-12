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
                   <a href="https://www.google.co.in/maps/place/Road+No.+5,+Devera+Konda+Basti,+Green+Valley,+Banjara+Hills,+Hyderabad,+Telangana+500034/@17.4240855,78.440173,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb9732aa33efd1:0xd61f7aa1b60e4149!8m2!3d17.4240804!4d78.4423617" target="_blank"> <p className='address'>Road No. 5,Devera Konda Basti, Green Valley, Banjara Hills,Hyderabad, Telangana 500034</p></a>
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
                <div >
                    <p className='cinfo cinfo1'>Pranitha(+91-7285944887)</p>
                    <p className='cinfo'>Akshara(+91-9491345046)</p>
                    <p className='cinfo'>Sathvik(+91-9866659465)</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;