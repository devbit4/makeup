import { useEffect, useRef } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ArrowBtn() {
  const arrowBtn = useRef();
  const scrollHeight = 200;

  const handleClick = () => {
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const btn = arrowBtn.current;
      if (
        document.documentElement.scrollTop ||
        window.pageYOffset > scrollHeight
      ) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }, []);

  return (
    <>
      <button ref={arrowBtn} className='arrow-up' onClick={handleClick}>
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
          z-index: 2;
        }
        .arrow-up.active {
          opacity: 1;
          pointer-events: auto;
        }
      `}</style>
    </>
  );
}
