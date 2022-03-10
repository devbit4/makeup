import { useRouter } from "next/router";
import { useRef } from "react";

export default function SearchBox() {
  const router = useRouter();
  const input = useRef();

  const handleClick = () => {
    if (input.current.value === "") return;
    router.push(`/search/${input.current.value}`);
  };
  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      if (input.current.value === "") return;
      router.push(`/search/${input.current.value}`);
      input.current.value = "";
    }
  };

  return (
    <>
      <div className="search-box">
        <div className="search-inner">
          <input
            ref={input}
            type="text"
            className="search-box-input"
            placeholder="화장품을 입력하세요"
            onKeyPress={handleKeyPress}
          ></input>
          <button className="search-box-button" onClick={handleClick}>
            Search!
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .search-box {
            background-color: #f5f2ee;
          }
          .search-inner {
            width: 1180px;
            margin: 0 auto;
            display: flex;
            justify-content: end;
            padding: 0 20px 20px 20px;
          }
          .search-box-input {
            width: 250ox;
            outline: none;
            border: none;
          }
          .search-box-button {
            width: 80px;
            height: 20px;
            margin-left: 10px;
            border: none;
            cursor: pointer;
            background-color: #aaa;
            font: 400 12px/1 "fredoka";
            color: #fff;
          }
          @media screen and (max-width: 1180px) {
            .search-inner {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
}
