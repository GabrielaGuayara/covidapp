import React, { Component } from 'react'
import emailjs from 'emailjs-com';//The EmailJS was previously intalled. 
import Nav from './Nav'

export default class ContactUs extends Component {
    sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'form-contact', e.target, 'user_HDGAsK2rBedrtar84PVMu')//The YOUR_USER_ID was removed to prevent it from being used by third parties.
          .then(() => {
            alert("Email sent, awesome!");
          }, () => {
            alert("Oops, something went wrong. Try again");
        })
        e.target.reset()//Cleaning input fields. 
        }
    render() {
        return (
            <div className='contact'>
                <Nav />
                <div className='div_form'>
                <h4>Do you have any question or concerns? Feel free to send us a email!</h4><br/>
                <form className="contact_form" onSubmit={this.sendEmail}>
                <label>Name</label>
                <input type="text" name="name" placeholder='Enter a name...' className='cont_inp' required/>
                <br/>
                <label>Email</label>
                <input type="email" name="from_email"  placeholder='Enter a email...' className='cont_inp' required />
                <br/>
                <label>Subject</label>
                <input name="subject"  placeholder='Write a subject...'  className='cont_inp' />
                <br/>
                <label>Message</label>
                <textarea name="message" placeholder='Write a message...' required id='mesg'/>
                <br/>

                <input type="submit" value="Send" id='sub_btn' />
                
    </form>
    </div>
            </div>
        )
    }
}


// export default Class ContactUs() {

  
//   }

//   return (
    
//   );
// }