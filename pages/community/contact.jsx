import { COMMUNITY_PAGE } from '../../constants';
import React, { useState } from 'react';
import Seo from '../../components/common/Seo';
import Sidebar from '../../components/common/Sidebar';
import ContactForm from '../../components/sub/ContactForm';

export default function ContactPage() {
  const [isPopup, setIsPopup] = useState(false);

  const handleClick = () => {
    setIsPopup(!isPopup);
  };

  return (
    <>
      <Seo title='Community'></Seo>
      <section className='community-contact'>
        <div className='inner'>
          <div className='sidebar'>
            <h1 className='sidebar-title'>Community</h1>
            <Sidebar menus={COMMUNITY_PAGE}></Sidebar>
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
              고객센터에 메일보내기 +
            </button>
            {isPopup && <ContactForm onClick={handleClick}></ContactForm>}
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
          width: 200px;
          height: 40px;
          outline: none;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          background-color: #efefef;
          font: 400 16px/1 'roboto';
        }
        .community-contact-btn:hover {
          background-color: #333;
          color: #fff;
        }
        // 반응형 구간
        @media screen and (max-width: 1180px) {
          .inner {
            width: 100%;
          }
        }
        @media screen and (max-width: 768px) {
          .inner {
            flex-direction: column;
          }
          .sidebar {
            width: 100%;
            padding: 20px;
          }
          .main {
            width: 100%;
            border-left: 1px solid #999;
            border-right: 1px solid #999;
          }
        }
      `}</style>
    </>
  );
}
