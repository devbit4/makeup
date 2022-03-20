import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm({ onClick }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!window.confirm('해당 글을 전송하시겠습니까?')) return;
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

  const handleClick = () => {
    onClick();
    document.body.style.overflow = 'auto';
  };
  return (
    <>
      <div className='contact-form'>
        <div className='form-container'>
          <form ref={form} onSubmit={sendEmail} className='form-content'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              className='name'
              placeholder='이름을 입력하세요'
            />
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              className='email'
              placeholder='이메일을 입력하세요'
            />
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              className='message'
              placeholder='문의내용을 입력하세요'
            />
            <input type='submit' value='Send' className='submit-btn' />
          </form>
        </div>
        <span onClick={handleClick} className='close'>
          CLOSE
        </span>
      </div>
      <style jsx>{`
        .contact-form {
          width: 100%;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          background-color: #333;
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
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px;
        }
        .form-content input {
          margin-top: 10px;
          margin-bottom: 30px;
          padding: 5px;
        }
        .form-content textarea {
          height: 100px;
          resize: none;
          margin-top: 10px;
          margin-bottom: 30px;
          padding: 5px;
        }
        .submit-btn {
          padding: 5px;
          cursor: pointer;
        }
        .close {
          position: absolute;
          top: 10%;
          right: 10%;
          font: 700 16px/1 'roboto';
          cursor: pointer;
          color: #fff;
        }
      `}</style>
    </>
  );
}
