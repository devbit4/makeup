/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";

function VideoPlayerBookMarkItem(props) {
  const { bookMark, isActive, seekBookMark } = props;

  return (
    <li className={clsx(isActive && "active")}>
      <a
        className="thumbStartPoint"
        onClick={(e) => {
          e.preventDefault();
          seekBookMark(bookMark.seconds);
        }}
      >
        <div className="thumbImg">
          <img src={bookMark.thumbnailFileUrl} alt={bookMark.title} />
        </div>
        <div className="thumbDetail">
          <div className="listName">{bookMark.title}</div>
          <span className="listTime">{bookMark.formattedTime}</span>
        </div>
      </a>
    </li>
  );
}

export default VideoPlayerBookMarkItem;
