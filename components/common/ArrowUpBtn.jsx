import { useCallback, useEffect, useRef, useState } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

export default function ArrowUpBtn() {
  const scrollHeight = 400;
  const [btnActive, setBtnActive] = useState(false);

  const handleBtnClick = useCallback(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  useEffect(() => {
    const showArrowUpBtn = window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > scrollHeight) {
        setBtnActive(true);
      } else {
        setBtnActive(false);
      }
    });
    return () => window.removeEventListener('scroll', showArrowUpBtn);
  }, []);

  return (
    <>
      <button
        className={clsx('arrow-up-btn', btnActive && 'active')}
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
