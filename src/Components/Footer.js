import React from 'react';


function Footer(){
    return(
        <div className="footer">
            <ul>
                <li className="listhead">CORPORATE INFORMATION</li>
                <li><button>About Us</button></li>
                <li><button>Careers</button></li>
                <li><button>Franchise Opportunities</button></li>
            </ul>

            <ul>
                <li className="listhead">BUYING GUIDE</li>
                <li><button>FAQs</button></li>
                <li><button>How To Buy</button></li>
                <li><button>Size Guide</button></li>
                <li><button>Payment Methods</button></li>
                <li><button>Shipping And Delivery</button></li>
                <li><button>Cash On Delivery Checker</button></li>
                <li><button>Returns And Exchanges</button></li>
                <li><button>Cancellation</button></li>
                <li><button>General Information</button></li>
                <li><button>Data Privacy</button></li>
            </ul>

            <ul>
                <li className="listhead">SUPPORT</li>
                <li><button>Contact Us</button></li>
                <li><button>Bank Payment Confirmation</button></li>
                <li><button>Life Style Card</button></li>
                <li><button>BDO Bench/Mastercard</button></li>
                <li><button>Order Tracker</button></li>
            </ul>

        <div>
            <p>Keep In Touch</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>
        </div>
    )
}


export default Footer;