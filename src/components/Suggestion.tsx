import { useState } from "react";
import "./styles/Suggestion.css";

const Suggestion = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="suggestion-section section-container" id="suggestion">
      <h2>
        Suggestion <span>&</span> Feedback
      </h2>
      <p className="suggestion-subtitle">
        Have a suggestion or feedback? Drop it below!
      </p>
      <div className="suggestion-container">
        {submitted ? (
          <div className="suggestion-success">
            <span className="success-icon">✓</span>
            <h3>Thank you!</h3>
            <p>Your suggestion has been submitted successfully.</p>
          </div>
        ) : (
          <form
            className="suggestion-form"
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            onSubmit={() => setSubmitted(true)}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="suggestion">Your Suggestion</label>
              <textarea
                id="suggestion"
                name="suggestion"
                placeholder="Write your suggestion or feedback here..."
                rows={5}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit Suggestion
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Suggestion;
