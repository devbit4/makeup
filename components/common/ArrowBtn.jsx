import { useEffect, useRef } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ArrowBtn() {
  const btn = useRef();
  const height = 200;

  const handleClick = () => {
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop || window.pageYOffset > height) {
        btn.current.classList.add('active');
      } else {
        btn.current.classList.remove('active');
      }
    });
  });

  return (
    <>
      <button ref={btn} className='arrow-up' onClick={handleClick}>
        <FontAwesomeIcon icon={faArrowUp} size={'xl'} />
      </button>
      <style jsx>{`
        .arrow-up {
          width: 40px;
          height: 40px;
          position: fixed;
          bottom: 10%;
          right: 10%;
          font-size: 15px;
          color: #fff;
          background-color: #334754;
          border-radius: 30%;
          cursor: pointer;
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
        }
        .arrow-up.active {
          opacity: 1;
          pointer-events: auto;
        }
      `}</style>
    </>
  );
}
