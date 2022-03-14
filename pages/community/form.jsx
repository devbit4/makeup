import React, { useState } from 'react';
import Seo from '../../components/common/Seo';
import Sidebar from '../../components/common/Sidebar';
import Contact from '../../components/sub/Contact';

export default function Form() {
  const comminity = ['faq', 'qna', 'form'];
  const [popup, setPopup] = useState(false);
  // const body = document.querySelector('body');

  const handleClick = (e) => {
    setPopup(!popup);
  };

  return (
    <>
      <Seo title='Community'></Seo>
      <section className='community-contact'>
        <div className='inner'>
          <div className='sidebar'>
            <h1 className='sidebar-title'>All sections</h1>
            <Sidebar menus={comminity} title={'community'}></Sidebar>
          </div>
          <div className='main'>
            <h1 className='main-title'>contact</h1>
            <button
              className='community-contact-btn'
              onClick={() => {
                handleClick();
                document.body.style.overflow = 'hidden';
              }}
            >
              고객센터에 메일보내기
            </button>
            {popup && <Contact onClick={handleClick}></Contact>}
          </div>
        </div>
      </section>

      <style jsx>{`
        .inner {
          width: 1180px;
          margin: 0 auto;
          display: flex;
        }
        .sidebar {
          width: 20%;
          background-color: #999;
          padding: 40px 20px;
        }
        .sidebar-title {
          color: #fff;
          font: 500 24px 'fredoka';
        }
        .main {
          width: 80%;
          min-height: 1000px;
          padding: 40px;
        }
        .main-title {
          margin-bottom: 50px;
          padding-bottom: 10px;
          border-bottom: 1px solid #333;
          font: 500 24px 'fredoka';
        }
        .community-contact-btn {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
