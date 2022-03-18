export default function ContactBtn({ onClick }) {
  return (
    <>
      <button
        className='community-contact-btn'
        onClick={() => {
          onClick();
          document.body.style.overflow = 'hidden';
        }}
      >
        고객센터에 메일보내기 +
      </button>
      <style jsx>{`
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
      `}</style>
    </>
  );
}
