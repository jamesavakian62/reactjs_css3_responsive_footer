import "./Footer.css";
//import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div>
        {/* FOOTER START */}
        <div className="footer">
          <div className="contain">
            <div className="col">
              <div className="footer-title">
                <h1>MyOneUniverse</h1>
                <ul>
                  <li>AmericanaPlace</li>
                  <li>ShopperLady</li>
                  <li>MyPersonalOrganizer</li>
                  <li>MyBusinessOrganizer</li>
                  <li>MyTechnologyHouse</li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-title">
                <h1>Products</h1>
                <ul>
                  <li>About</li>
                  <li>MyOneUniverse</li>
                  <li>DesignServices</li>
                  <li>More</li>
                  <li>Get in touch</li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-title">
                <h1>Accounts</h1>
                <ul>
                  <li>About</li>
                  <li>Dashboard</li>
                  <li>Access</li>
                  <li>Social</li>
                  <li>Get in touch</li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-title">
                <h1>Resources</h1>
                <ul>
                  <li>Tedchnologies</li>
                  <li>ReactJS</li>
                  <li>CSS3</li>
                  <li>Deployment</li>
                  <li>Githubs</li>
                  <li>Email</li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-title">
                <h1>Support</h1>
                <ul>
                  <li>Contact us</li>
                  <li>Web chat</li>
                  <li>Open ticket</li>
                </ul>
              </div>
            </div>
            <div className="col"></div>

            <h1>Social</h1>
            <ul>
              <li>
                {/*              // <NavLink to="https://www.facebook.com/OpticalAutomation/">
              //   <i className="fa fa-facebook"></i>
              //   <img
              //     src="../fb.png"
              //     width={32}
              //     style={{ width: 32 }}
              //     alt="1234"
              //   />
              // </NavLink>}
*/}
              </li>
              <li>
                <img
                  src="../twitter.png"
                  width={32}
                  style={{ width: 32 }}
                  alt="1234"
                />
              </li>
              <li>
                <img
                  src="../insta.png"
                  width={32}
                  style={{ width: 32 }}
                  alt="1234"
                />
              </li>
              <li>
                <img
                  src="../youtube.png"
                  width={32}
                  style={{ width: 32 }}
                  alt="1234"
                />
                <img
                  src="../linkedin.png"
                  width={32}
                  style={{ width: 32 }}
                  alt="1234"
                />
              </li>
            </ul>
          </div>
          <div className="clearfix" />
        </div>
      </div>

      <div className="footer_logo">
        <img src="oa.png" alt="logo" />
      </div>
      <div className="footer-center">
        <p>(c) 2022 MyOneUniverse. All rights reserved.</p>
      </div>
      {/* END OF FOOTER */}
    </>
  );
}
export default Footer;
