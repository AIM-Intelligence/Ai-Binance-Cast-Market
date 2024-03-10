import logo from '../../images/logo.png';
import './footer.css';

const HomeFooter = () => (
  <div className="abc_market__footer section__padding w-screen translate-y-24 ">
    <div className="abc_market__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <a
      href="https://ai-binance-cast.vercel.app"
      target="_blank"
      className="abc_market__footer-btn"
    >
      <p>Upload Your Value with ABC</p>
    </a>

    <div className="abc_market__footer-links">
      <div className="abc_market__footer-links_logo">
        <img
          src={logo}
          alt="abc_market_logo"
          style={{ width: '100px', height: '100px' }}
          className="object-contain"
        />
        <p>
          Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
        </p>
      </div>
      <div className="abc_market__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="abc_market__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="abc_market__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>
  </div>
);

export default HomeFooter;
