import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact({ onClick }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_r3glcwm',
        'template_lsskia6',
        form.current,
        'user_EH89UmAd8uqdrMfsp4nbA'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('전송이 완료되었습니다.');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className='form'>
        <div className='form-container'>
          <form ref={form} onSubmit={sendEmail} className='form-content'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' className='name' />
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' className='email' />
            <label htmlFor='message'>Message</label>
            <textarea name='message' className='message' />
            <input type='submit' value='Send' className='submit' />
          </form>
        </div>
        <span
          onClick={() => {
            onClick();
            document.body.style.overflow = 'auto';
          }}
          className='close'
        >
          CLOSE
        </span>
      </div>
      <style jsx>{`
        .form {
          width: 100%;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          background-color: #999;
          opacity: 0.9;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 3;
          overflow: hidden;
        }
        .form-container {
          width: 300px;
          height: 400px;
          background-color: #fff;
          border-radius: 10px;
        }
        .form-content {
          display: flex;
          flex-direction: column;
          padding: 20px;
        }
        .close {
          position: absolute;
          top: 10%;
          right: 10%;
          font: 700 16px/1 'roboto';
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
