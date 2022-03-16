import { useEffect, useRef } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ArrowUpBtn() {
  const arrowUpBtn = useRef();
  const scrollHeight = 400;

  const handleBtnClick = () => {
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    const showArrowUpBtn = window.addEventListener('scroll', () => {
      const btn = arrowUpBtn.current;
      if ((btn && document.documentElement.scrollTop) > scrollHeight) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    return () => {
      window.removeEventListener('scroll', showArrowUpBtn);
    };
  }, []);

  return (
    <>
      <button
        ref={arrowUpBtn}
        className='arrow-up-btn'
        onClick={handleBtnClick}
      >
        <FontAwesomeIcon icon={faArrowUp} size={'xl'} />
      </button>
      <style jsx>{`
        .arrow-up-btn {
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
        .arrow-up-btn.active {
          opacity: 1;
          pointer-events: auto;
        }
      `}</style>
    </>
  );
}
