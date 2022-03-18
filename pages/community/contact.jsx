import { COMMUNITY_PAGE } from '../../constants';
import React, { useState, useRef } from 'react';
import Seo from '../../components/common/Seo';
import Sidebar from '../../components/common/Sidebar';
import ContactForm from '../../components/sub/ContactForm';

export default function ContactPage() {
  const [isPopup, setIsPopup] = useState(false);
  const writer = useRef(null);
  const type = useRef(null);
  const request = useRef(null);
  const updateWriter = useRef(null);
  const updateType = useRef(null);
  const updateRequest = useRef(null);
  const basic = [
    {
      writer: 'lena',
      type: 'type2',
      request: 'here comes requests',
    },
    {
      writer: 'lena2',
      type: 'type2',
      request: 'here comes requests',
    },
    {
      writer: 'lena3',
      type: 'type2',
      request: 'here comes requests',
    },
  ];
  const [helps, setHelps] = useState(basic);

  const addPost = () => {
    if (!writer.current.value || !request.current.value) {
      alert('Please Type Your Request');
      return;
    }
    setHelps([
      {
        writer: writer.current.value,
        type: type.current.value,
        request: request.current.value,
      },
      ...helps,
    ]);
    writer.current.value = '';
    type.current.value = 'Type 1';
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
            <div className='help'>
              <h1 className='help-title'>help</h1>
              <div className='help-boxes'>
                <div className='help-request'>
                  <input
                    type='text'
                    placeholder='Your Name Here'
                    ref={writer}
                  ></input>
                  <select ref={type}>
                    <option value='type1'>type1</option>
                    <option value='type2'>type2</option>
                    <option value='type3'>type3</option>
                  </select>
                  <textarea
                    placeholder='your request here'
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
                      <article>
                        {post.enableUpdate ? (
                          <>
                            <div className='post'>
                              <select defaultValue={post.type} ref={updateType}>
                                <option value='type1'>type1</option>
                                <option value='type2'>type2</option>
                                <option value='type3'>type3</option>
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
                            <div className='btns'>
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
                              <soan>{post.writer}</soan>
                            </div>
                            <div className='btns'>
                              <button onClick={() => enableUpdate(index)}>
                                edit
                              </button>
                              <button onClick={() => deletePost(index)}>
                                delete
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
