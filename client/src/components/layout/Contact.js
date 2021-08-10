import React from "react";

export const Contact = () => {
  return (

      <div className="container-border">
          <h1>Contact Us</h1>
            <p>We would love to respond to your queries and help you succed.Fell free to get in touch with us.</p>
          <form className="row">
              <label>name</label>
              <input type="text" name="name"className="from-control"/>

              <label>Email</label>
              <input type="email" name="user_email" className="from-control"/>


              <label>Phone</label>
              <input type="text" name="phone"className="from-control"/>

              <label>company</label>
              <input type="text" name="user_company"className="from-control"/>


              <label>Message</label>
              <textarea name='message' rows='4'className="from-control" />
              <input type='sumbit' value='send' className='from-control btn btn-primary'/>
          </form>
      </div>
   
  );
};