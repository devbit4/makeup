import React, { useState, useRef, useEffect } from 'react';
import { COMMUNITY_PAGE } from '../../constants';
import Seo from '../../components/common/Seo';
import Sidebar from '../../components/layout/Sidebar';
import ContactForm from '../../components/sub/community/ContactForm';
import ContactBtn from '../../components/sub/community/ContactBtn';
import HelpRequest from '../../components/sub/community/HelpRequest';
import HelpShowBox from '../../components/sub/community/HelpShowBox';

export default function ContactPage() {
  const [isPopup, setIsPopup] = useState(false);
  const [helps, setHelps] = useState([]);
  const writer = useRef(null);
  const type = useRef(null);
  const request = useRef(null);
  const updateWriter = useRef(null);
  const updateType = useRef(null);
  const updateRequest = useRef(null);

  // 날짜
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const dateString = year + '-' + month + '-' + day;

  const handleClick = () => {
    setIsPopup(!isPopup);
  };

  const addPost = () => {
    if (!writer.current.value || !request.current.value) {
      alert('이름과 문의사항을 입력해주세요');
      return;
    }
    setHelps([
      {
        writer: writer.current.value,
        type: type.current.value,
        request: request.current.value,
        date: dateString,
      },
      ...helps,
    ]);
    writer.current.value = '';
    type.current.value = '문의사항1';
    request.current.value = '';
  };

  const deletePost = (deletedIndex) => {
    if (!window.confirm('해당 글을 지우시겠습니까?')) return;
    setHelps(helps.filter((post, postIndex) => postIndex !== deletedIndex));
  };

  const enableUpdate = (index) => {
    setHelps(
      helps.map((post, postIndex) => {
        if (postIndex === index) post.enableUpdate = true;
        return post;
      })
    );
  };

  const disableUpdate = (index) => {
    setHelps(
      helps.map((post, postIndex) => {
        if (postIndex === index) post.enableUpdate = false;
        return post;
      })
    );
  };

  const updatePost = (index) => {
    setHelps(
      helps.map((post, postIndex) => {
        if (postIndex === index) {
          post.writer = updateWriter.current.value;
          post.type = updateType.current.value;
          post.request = updateRequest.current.value;
          post.enableUpdate = false;
        }
        return post;
      })
    );
  };

  // 로컬스토리지

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let data = localStorage.getItem('helps');
      if (data) {
        setHelps(JSON.parse(data));
      } else {
        return [];
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('helps', JSON.stringify(helps));
  }, [helps]);

  return (
    <>
      <Seo title='Community'></Seo>
      <div className='community-inner'>
        <div className='sidebar'>
          <h1 className='sidebar-title'>Community</h1>
          <Sidebar menus={COMMUNITY_PAGE}></Sidebar>
        </div>
        <div className='main'>
          <h1 className='main-title'>contact</h1>
          <ContactBtn onClick={handleClick}></ContactBtn>
          {isPopup && <ContactForm onClick={handleClick}></ContactForm>}
          <div className='help'>
            <h1 className='help-title'>help</h1>
            <div className='help-boxes'>
              <HelpRequest
                helps={helps}
                setHelps={setHelps}
                writer={writer}
                type={type}
                request={request}
                addPost={addPost}
              ></HelpRequest>
              <HelpShowBox
                helps={helps}
                setHelps={setHelps}
                updateWriter={updateWriter}
                updateType={updateType}
                updateRequest={updateRequest}
                deletePost={deletePost}
                enableUpdate={enableUpdate}
                disableUpdate={disableUpdate}
                updatePost={updatePost}
              ></HelpShowBox>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .community-inner {
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
        .help-title {
          font: 500 24px 'fredoka';
          margin: 40px 0;
          padding-top: 40px;
          border-top: 1px solid #333;
        }

        // 반응형 구간
        @media screen and (max-width: 1180px) {
          .community-inner {
            width: 100%;
          }
        }
        @media screen and (max-width: 768px) {
          .community-inner {
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
