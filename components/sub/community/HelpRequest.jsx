export default function HelpRequest({ writer, type, request, addPost }) {
  const options = [
    { name: '문의사항1' },
    { name: '문의사항2' },
    { name: '문의사항3' },
  ];
  return (
    <>
      <div className='help-request'>
        <input
          type='text'
          placeholder='이름을 입력해주세요'
          ref={writer}
        ></input>
        <select ref={type} defaultValue={options[0].name}>
          {options.map((option, index) => {
            return (
              <option value={option.name} key={option.name}>
                {option.name}
              </option>
            );
          })}
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
      <style jsx>{`
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
        @media screen and (max-width: 768px) {
          .help-request-btns button {
            margin-bottom: 5px;
          }
        }
      `}</style>
    </>
  );
}
