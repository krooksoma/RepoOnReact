import React, { useState } from "react";
import Validator from "validator";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xayalzop");
  const [emailChecker, setEmailChecker] = useState("");

  if (state.succeeded) {
    return <h2>Thanks for Your Contact!</h2>;
  }

  const checkEmail = (e) => {
        if (Validator.isEmail(e.target.value)) {
          setEmailChecker("🟢 Valid Email Entered");
        } else {
          setEmailChecker("🔴 Enter Valid Email");
        }
      };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center m-4" >
        <div
          className="row form-floating justify-content-center"
          style={{minWidth: "450px"}}
          id="contact-form"
        ><h2>
          Send me an Email
        </h2>
          <div className="form-floating m-3">
            <label htmlFor="email" ></label>
            <h3>Your Email</h3>
            <input className="form-control" id="email" type="email" name="email" placeholder="Your Email" onChange={(e) => checkEmail(e)} />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              
            />
          </div>
          <span style={{ fontSize: "1.25rem" }}>{emailChecker}</span>
          <h4>Your Message</h4>
          <textarea className="form-control" style={{height: "120px"}}id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button className="btn btn-outline-danger"type="submit" disabled={state.submitting}>
            Submit
          </button>
          
        </div>
      </div>
    </form>
  );
}

