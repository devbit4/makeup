export default function Alarm() {
  return (
    <>
      <span className='detail-alarm'>구매 수량이 얼마 남지 않았습니다..</span>
      <style jsx>{`
        .detail-alarm {
          display: block;
          background-color: yellow;
          padding: 20px;
          margin: 10px 0;
          border-radius: 10px;
          font: 16px/1 'roboto';
        }
      `}</style>
    </>
  );
}
