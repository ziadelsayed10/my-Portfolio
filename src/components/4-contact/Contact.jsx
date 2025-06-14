import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import DoneAnimation from '../../animation/done.json'
import ContactAnimation from '../../animation/contact.json'
import './contact.css'
function Contact() {
  const [state, handleSubmit] = useForm("mqkrvpbj");


  

  return (
    <>
<section id='contact' className='contact-us'>
<h1 className='title'>
<span className='icon-email'></span>
Contact Us
</h1>
<p>contact us for more information and get
   notifications when we publish something</p>


   <div style={{justifyContent:"space-between"}} className='flex'>
<form className='' onSubmit={handleSubmit}>

<div className='flex'>
<label className='email-address' htmlFor="email">Email Address</label>
<input required type="email" name='email' id='email' />
<ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
</div>


<div className='flex' style={{marginTop: "24px"}}>
<label htmlFor="message">your message</label>
<textarea required name="message" id="message"></textarea>
<ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
</div>

<button className='submit' type="submit" disabled={state.submitting}>
  {state.submitting ? "submitting..." : "submit"}
  </button>

{state.succeeded && ( <p className='flex' style= {{color : "var(--blue)" , fontSize: "16px" , marginTop:"1.7rem"}}>your message has been sent successfully .
<Lottie loop ={false} style={{height:55}}
 animationData={DoneAnimation} />
</p>)}

</form>
<div className=" animation"><Lottie className='contactAnimation' loop ={true} style={{height:255}}
 animationData={ContactAnimation} /></div>

   </div>
</section>
    </>
  )
}

export default Contact