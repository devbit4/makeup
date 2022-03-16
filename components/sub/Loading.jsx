export default function Loading() {
  return (
    <>
      <div className='loading'>
        <img src='/img/loading.png' alt='loading' className='loading-img'></img>
      </div>
      <style jsx>{`
        .loading-img {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
}
