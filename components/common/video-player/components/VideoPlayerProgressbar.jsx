/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import moment from "moment";

const PREVIEW_DISPLAY = {
  WIDTH: 98,
  HEIGHT: 60,
};

function VideoPlayerProgressbar(props) {
  const { state, controller, previewVideo, bookMarks } = props;

  const refProgressbar = useRef();
  const refPreview = useRef();

  const [hoveredSecond, setHoveredSecond] = useState(0);

  const [previewTitle, setPreviewTitle] = useState(null);

  const [scrubbigProgress, setScrubbingProgress] = useState(0);

  const format = (seconds) => moment.utc(seconds * 1000).format("mm:ss");

  const progress = useMemo(() => {
    return !state.duration || state.scrubbing
      ? scrubbigProgress
      : state.currentTime / state.duration;
  }, [state, scrubbigProgress]);

  /**
   * 프로그래스바 rect
   */
  const getProgressbarRect = useCallback(() => {
    return refProgressbar.current.getBoundingClientRect();
  }, []);

  /**
   * 프로그래스바 퍼센트
   */
  const getProgressbarPercent = useCallback((x, rect) => {
    return Math.min(Math.max(0, x - rect.left), rect.width) / rect.width;
  }, []);

  /**
   * 미리보기 타이틀 캡처
   */
  const getPreviewTitle = useCallback(
    (hoverTime) => {
      if (!bookMarks || bookMarks.length < 1) return;

      for (const bookMark of bookMarks) {
        if (bookMark.seconds < hoverTime) {
          setPreviewTitle(bookMark.title);
        }
      }
    },
    [bookMarks]
  );

  /**
   * 미리보기 화면 위치 조절
   */
  const displayPreview = useCallback((x, rect) => {
    let hoverPoint = x - rect.left;

    if (hoverPoint < PREVIEW_DISPLAY.WIDTH / 2) {
      refPreview.current.style.left = "0px";
    } else if (hoverPoint > rect.width - PREVIEW_DISPLAY.WIDTH / 2) {
      refPreview.current.style.left = rect.width - PREVIEW_DISPLAY.WIDTH + "px";
    } else {
      refPreview.current.style.left =
        hoverPoint - PREVIEW_DISPLAY.WIDTH / 2 + "px";
    }
  }, []);

  /**
   * 미리보기 화면 업데이트
   */
  const updatePreview = useCallback(
    (e) => {
      const rect = getProgressbarRect();

      const hoverTime = Number(
        getProgressbarPercent(e.pageX || e.changedTouches[0].pageX, rect) *
          state.duration
      ).toFixed(0);

      setHoveredSecond(hoverTime);

      previewVideo.current.currentTime = hoverTime;

      getPreviewTitle(hoverTime);

      displayPreview(e.pageX || e.changedTouches[0].pageX, rect);
    },
    [
      state,
      previewVideo,
      getProgressbarRect,
      getProgressbarPercent,
      getPreviewTitle,
      displayPreview,
    ]
  );

  useEffect(() => {
    previewVideo.current.currentTime = hoveredSecond;
  }, [hoveredSecond, previewVideo]);

  /**
   * 스크럽 시작
   */
  const handleScrubStart = useCallback(
    (e) => {
      controller.scrub();

      updatePreview(e);
    },
    [controller, updatePreview]
  );

  /**
   * 스크럽 중
   */
  const handleScrubbing = useCallback(
    (e) => {
      if (state.scrubbing && e.pressure === 0.5) {
        const rect = getProgressbarRect();
        const percent = getProgressbarPercent(e.pageX, rect);

        setScrubbingProgress(percent);

        updatePreview(e);
      }
    },
    [state, getProgressbarRect, getProgressbarPercent, updatePreview]
  );

  /**
   * 스크럽 종료
   */
  const handleScrubEnd = useCallback(
    (e) => {
      if (state.scrubbing) {
        const rect = getProgressbarRect();
        const percent = getProgressbarPercent(
          e.pageX || e.changedTouches[0].pageX,
          rect
        );
        const seekTime = state.duration * percent;

        setScrubbingProgress(percent);

        controller.seek(seekTime);
      }
    },
    [state, controller, getProgressbarRect, getProgressbarPercent]
  );

  useEffect(() => {
    document.addEventListener("pointermove", handleScrubbing);
    document.addEventListener("pointerup", handleScrubEnd);
    return () => {
      document.removeEventListener("pointermove", handleScrubbing);
      document.removeEventListener("pointerup", handleScrubEnd);
    };
  }, [handleScrubbing, handleScrubEnd]);

  return (
    <>
      <div
        className="progressHover"
        ref={refProgressbar}
        onPointerDown={handleScrubStart}
        onPointerMove={updatePreview}
        //터치 이벤트
        onTouchStart={handleScrubStart}
        onTouchMove={updatePreview}
        onTouchEnd={handleScrubEnd}
      >
        <div className="progress">
          <div
            className="progressFilled"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      <div ref={refPreview} className="snapShotContainer">
        <div className="snapShotImg">
          <video ref={previewVideo} />
          <p className="snapShotTime">{format(hoveredSecond)}</p>
        </div>
        <p className="snapShotname">
          {previewTitle?.length > 10
            ? previewTitle.substring(0, 10) + ".."
            : previewTitle}
        </p>
      </div>
    </>
  );
}

export default VideoPlayerProgressbar;
