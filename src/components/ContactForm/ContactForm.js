import React from "react";

export default function ContactForm() {
  return (
    <div className="container">
      <form>
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write something.."
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
