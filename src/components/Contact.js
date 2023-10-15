import React ,{ useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popName, setPopName] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //maill integration
    emailjs
      .send(
        // service ID
        "service_dbekq14",
        // template ID
        "template_ap0kylg",
        {
          from_name: form.name,
          to_name: "Anwesh",
          from_email: form.email,
          to_email: "anweshdigajerla@gmail.com",
          from_message: form.message,
        },
        // public key
        "ivdwcabUnxXBXS7kQ"
      )
      .then(
        () => {
          setLoading(false);
          setShowPopup(true);
          setPopName(form.name);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Somting went wrong!!");
        }
      );
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="container contact">
      <h2 className="main-title text-center">CONTACT</h2>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4 mb-1">
            <input required
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange} placeholder="Name" className="contact-input" />
          </div>

          <div className="col-md-4 mb-1">
            <input required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange} placeholder="Email" className="contact-input" />
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-12">
      <textarea
      required
      rows="7"
      type="text"
      name="message"
      value={form.message}
      onChange={handleChange}
            placeholder="Message"
            className="contact-textarea"
          />
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-12">
          <button className="form-btn" type="submit" >{loading ? "Sending..." : "Send"}</button>
        </div>
      </div>
      {showPopup && (
        <div class="modal-bg">
        <div class="modal-container">
            <p class="modal-title">Message Sent!</p>
            <p class="modal-message">
                Thank you <span class="name">{popName}</span>. I will get back to you as soon as possible.
            </p>
            <button class="modal-button" onClick={() => setShowPopup(false)}>Ok</button>
        </div>
    </div>
      )}
    </form>
    
  );
}
export default Contact;
