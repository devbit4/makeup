import { useRef, useState } from 'react';

export default function Comments() {
  const input = useRef();
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (input.current.value === '') return;
    setComments([
      { content: input.current.value, id: Date.now() },
      ...comments,
    ]);
    input.current.value = '';
  };
  const deleteComment = (deletedIndex) => {
    setComments(comments.filter((comment, index) => index !== deletedIndex));
  };

  return (
    <>
      <ul>
        {comments &&
          comments.map((comment, commentIndex) => {
            return (
              <li key={comment.id} className='comment'>
                <strong> {comment.content}</strong>
                <button onClick={() => deleteComment(commentIndex)}>
                  삭제
                </button>
              </li>
            );
          })}
      </ul>
      <div className='comment-input-box'>
        <input type='text' ref={input} />
        <button onClick={addComment}>댓글달기</button>
      </div>
      <style jsx>{`
        .comment {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
          border-bottom: 1px dashed #ccc;
        }
        .comment strong {
          font: 12px/1 'roboto';
        }
        .comment button {
          border: none;
          color: blue;
          font: 12px/1 'roboto';
          cursor: pointer;
        }

        .comment-input-box {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
        .comment-input-box input {
          flex: 0.8;
          outline: none;
        }
        .comment-input-box button {
          flex: 0.2;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
