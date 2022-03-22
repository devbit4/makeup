export default function HelpShowBox({
  helps,
  updateWriter,
  updateType,
  updateRequest,
  options,
  deletePost,
  enableUpdate,
  disableUpdate,
  updatePost,
}) {
  return (
    <>
      <div className='help-show-box'>
        {helps.map((post, index) => {
          return (
            <article key={post.request + index}>
              {post.enableUpdate ? (
                <>
                  <div className='post'>
                    <select defaultValue={post.type} ref={updateType}>
                      {options.map((option, index) => {
                        return (
                          <option value={option.name} key={option.name}>
                            {option.name}
                          </option>
                        );
                      })}
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
                    <button onClick={() => updatePost(index)}>수정완료</button>
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
                    <button onClick={() => deletePost(index)}>삭제하기</button>
                  </div>
                </>
              )}
            </article>
          );
        })}
      </div>
      <style jsx>{`
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
      `}</style>
    </>
  );
}
