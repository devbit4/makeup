import { useCallback } from 'react';

import VideoPlayerBookMarkItem from './VideoPlayerBookMarkItem';

function VideoPlayerBookMarkList(props) {
  const { passedTime, bookMarks, seekBookMark } = props;

  const isActive = useCallback(
    (index) => {
      return bookMarks[index + 1]
        ? bookMarks[index]?.seconds <= passedTime &&
            passedTime < bookMarks[index + 1]?.seconds
        : bookMarks[index]?.seconds <= passedTime;
    },
    [passedTime, bookMarks]
  );

  return (
    <div className="ShortcutsArea">
      <div className="header">구간 바로가기</div>
      <div className="thumbnailList">
        <ol>
          {bookMarks.map((bookMark, index) => (
            <VideoPlayerBookMarkItem
              key={index}
              bookMark={bookMark}
              isActive={isActive(index)}
              seekBookMark={seekBookMark}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default VideoPlayerBookMarkList;
