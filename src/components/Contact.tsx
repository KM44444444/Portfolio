import { MdArrowOutward, MdCopyright, MdPublic } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3 className="title">Let's Build Something Great Together</h3>
        <div className="contact-quote-row">
          <svg className="contact-quote-icon" width="52" height="52" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="circleGrad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#f0f0f0" />
                <stop offset="30%" stopColor="#a0a0a0" />
                <stop offset="50%" stopColor="#d0d0d0" />
                <stop offset="70%" stopColor="#808080" />
                <stop offset="100%" stopColor="#c0c0c0" />
              </linearGradient>
              <linearGradient id="kmGrad" x1="18" y1="15" x2="54" y2="80">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="25%" stopColor="#e0e0e0" />
                <stop offset="50%" stopColor="#b8b8b8" />
                <stop offset="75%" stopColor="#d8d8d8" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
              <linearGradient id="kmGrad2" x1="56" y1="15" x2="90" y2="80">
                <stop offset="0%" stopColor="#e8e8e8" />
                <stop offset="25%" stopColor="#c0c0c0" />
                <stop offset="50%" stopColor="#e0e0e0" />
                <stop offset="75%" stopColor="#a8a8a8" />
                <stop offset="100%" stopColor="#f0f0f0" />
              </linearGradient>
              <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle cx="50" cy="50" r="44" stroke="url(#circleGrad)" strokeWidth="2.5" fill="none" filter="url(#logoGlow)" />
            <circle cx="50" cy="50" r="40" stroke="url(#circleGrad)" strokeWidth="0.5" fill="none" opacity="0.4" />
            <path d="M20 22 L27 22 L27 48 L44 22 L53 22 L35 47 L53 78 L44 78 L27 54 L27 78 L20 78 Z" fill="url(#kmGrad)" filter="url(#logoGlow)" />
            <path d="M57 78 L57 22 L64 22 L71 48 L78 22 L85 22 L85 78 L78 78 L78 54 L71 66 L64 54 L64 78 Z" fill="url(#kmGrad2)" filter="url(#logoGlow)" />
          </svg>
          <p className="contact-subtitle para">
            "Build with Purpose, Learn with Curiosity, and Grow with every Line of Code"
          </p>
        </div>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:hemlatatiz32@gmail.com" data-cursor="disable">
                hemlatatiz32@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+918273819319" data-cursor="disable">
                +91 8273819319
              </a>
            </p>
          </div>
          <div className="contact-box contact-social-box">
            <h4>Social</h4>
            <a
              href="https://www.facebook.com/share/1ChoBEFV9j/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <FaFacebookF /> <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/kshitiz_mandola?stkn=enNlMmdtMWR0MnQ3"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <FaInstagram /> <MdArrowOutward />
            </a>
            <a
              href="https://youtube.com/@k.m-edits_88?si=2FUaWAm1rSGPLFZ_"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <FaYoutube /> <MdArrowOutward />
            </a>
            <a
              href="https://explurger.com/pf/tpm8m5zisn3qdxcu9"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <MdPublic /> <MdArrowOutward />
            </a>
            <a
              href="https://x.com/Kshitiz_Mandola"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <FaXTwitter /> <MdArrowOutward />
            </a>

          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Kshitiz Mandola</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
