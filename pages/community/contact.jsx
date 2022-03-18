import { COMMUNITY_PAGE } from '../../constants';
import React, { useState, useRef } from 'react';
import Seo from '../../components/common/Seo';
import Sidebar from '../../layout/components/Sidebar';
import ContactForm from '../../components/sub/community/ContactForm';
import ContactBtn from '../../components/sub/community/ContactBtn';

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
            <ContactBtn onClick={handleClick}></ContactBtn>
            {isPopup && <ContactForm onClick={handleClick}></ContactForm>}
            <div className='help'>
              <h1 className='help-title'>help</h1>
              <div className='help-boxes'>
                <div className='help-request'>
                  <input
                    type='text'
                    placeholder='이름을 입력해주세요'
                    ref={writer}
                  ></input>
                  <select ref={type} defaultValue='문의사항1'>
                    <option value='문의사항1'>문의사항1</option>
                    <option value='문의사항2'>문의사항2</option>
                    <option value='문의사항3'>문의사항3</option>
                  </select>
                  <textarea
                    placeholder='문의사항을 입력해주세요'
                    cols='30'
                    rows='10'
                    ref={request}
                  ></textarea>
                  <div className='help-request-btns'>
                    <button>CANCEL</button>
                    <button onClick={addPost}>SEND</button>
                  </div>
                </div>
                <div className='help-show-box'>
                  {helps.map((post, index) => {
                    return (
                      <article key={post.request}>
                        {post.enableUpdate ? (
                          <>
                            <div className='post'>
                              <select defaultValue={post.type} ref={updateType}>
                                <option value='문의사항1'>문의사항1</option>
                                <option value='문의사항2'>문의사항2</option>
                                <option value='문의사항3'>문의사항3</option>
                              </select>
                              <input
                                type='text'
                                defaultValue={post.request}
                                ref={updateRequest}
                              ></input>
                              <input
                                defaultValue={post.writer}
                                ref={updateWriter}
                              ></input>
                            </div>
                            <div className='post-btns'>
                              <button onClick={() => updatePost(index)}>
                                수정완료
                              </button>
                              <button onClick={() => disableUpdate(index)}>
                                수정취소
                              </button>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className='post'>
                              <strong>{post.type}</strong>
                              <p>{post.request}</p>
                              <span>{post.writer}</span>
                              <span className='date'>{post.date}</span>
                            </div>
                            <div className='post-btns'>
                              <button onClick={() => enableUpdate(index)}>
                                수정하기
                              </button>
                              <button onClick={() => deletePost(index)}>
                                삭제하기
                              </button>
                            </div>
                          </>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>

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
        .help-title {
          font: 500 24px 'fredoka';
          margin: 40px 0;
          padding-top: 40px;
          border-top: 1px solid #333;
        }
        .help-request {
          width: 100%;
          display: flex;
          flex-direction: column;
          margin-bottom: 40px;
        }
        .help-request input,
        .help-request select,
        .help-request textarea {
          margin-bottom: 20px;
          padding: 5px;
        }
        .help-request-btns button {
          width: 200px;
          margin-right: 10px;
          padding: 10px;
          cursor: pointer;
          border: none;
          border-radius: 10px;
        }
        .help-request-btns button:hover {
          background-color: #333;
          color: #fff;
        }
        .help-show-box {
          border-top: 1px dashed #333;
          padding-top: 20px;
        }
        .post {
          width: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid #333;
          padding: 20px;
          background-color: #efefef;
        }
        .post input,
        .post select {
          margin-bottom: 20px;
          padding: 10px 5px;
        }
        .post input {
          padding-bottom: 40px;
        }
        .post strong,
        .post span,
        .post p {
          padding-bottom: 30px;
          margin-bottom: 40px;
          border-bottom: 1px solid #333;
        }
        .post .date {
          padding: 0;
          margin: 0;
          border: none;
          text-align: right;
          font: 400 14px/1 'roboto';
          color: red;
        }

        .post-btns {
          display: flex;
          justify-content: end;
          margin: 20px 0;
        }
        .post-btns button {
          width: 200px;
          border: 1px solid #777;
          background-color: #fff;
          border-radius: 10px;
          margin-right: 10px;
          padding: 5px;
          cursor: pointer;
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
          .help-request-btns button {
            margin-bottom: 5px;
          }
        }
      `}</style>
    </>
  );
}
