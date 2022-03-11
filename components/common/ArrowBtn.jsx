import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

export default function ArrowBtn() {
  const btn = useRef();

  const handleClick = () => {
    const header = document.querySelector(".header");
    header.scrollIntoView();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        btn.current.classList.add("visible");
      } else {
        btn.current.classList.remove("visible");
      }
    });
  });

  return (
    <>
      <button ref={btn} className="arrow-up" onClick={handleClick}>
        <FontAwesomeIcon icon={faArrowUp} size={"xl"} />
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
        }
        .arrow-up.visible {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
