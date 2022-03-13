export default function Loading() {
  return (
    <>
      <img src='/img/loading.png' alt='loading' className='loading'></img>
      <style jsx>{`
        .loading {
          position: fixed;
          top: 50%;
          left: 50%;
        }
      `}</style>
    </>
  );
}
