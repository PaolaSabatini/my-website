import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <div id="contact-component">
        <p>CONTACT</p>
        <div id="form">
          <input name="firstname" placeholder="First Name" type="text" />
          <input name="lastname" placeholder="Last Name" type="text" />
          <input name="telephone" placeholder="Phone" type="tel" />
          <input name="email" placeholder="e-mail" type="email" />
          <input name="website" placeholder="Website" type="url" />
          <textarea name="message" placeholder="Message" type="text" />
          <input name="submit" value="OK" type="submit" />
        </div>
      </div>
    );
  }
}
