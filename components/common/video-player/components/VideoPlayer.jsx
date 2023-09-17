import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";

import VideoPlayerMiddleController from "./VideoPlayerMiddleController";
import VideoPlayerProgressbar from "./VideoPlayerProgressbar";
import VideoPlayerUtils from "./VideoPlayerUtils.jsx";
import VideoPlayerBookMarkList from "./VideoPlayerBookMarkList";

import usePlayer from "../usePlayer";

const KEY_CODE = {
  ENTER: 13,
  SPACE: 32,
  LEFT: 37,
  RIGHT: 39,
};

function VideoPlayer(prop) {
  const { src, title, poster, indexList } = prop;

  const refPlayerWrapper = useRef();

  const { refVideo, state, controller } = usePlayer(src); //화면 비디오
  const { refVideo: previewVideo } = usePlayer(src); //미리보기용 비디오

  const { refVideo: thrid } = usePlayer(src);

  const [expandedPlaybackRate, setExpandedPlaybackRate] = useState(false);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const [bookMarks, setBookMarks] = useState([]);

  /**
   * 시간표시
   */
  const format = (seconds) => moment.utc(seconds * 1000).format("HH:mm:ss");

  const passedTime = state.currentTime;
  const totalTime = state.duration;

  /**
   * 북마크 데이터 가공
   */
  // const bookMarks = useMemo(() => {
  //   if (!indexList || indexList.length < 1) return [];

  //   return indexList.map((item) => ({
  //     ...item,
  //     seconds: item.milliseconds / 1000,
  //     formattedTime: format(item.milliseconds / 1000),
  //   }));
  // }, [indexList]);

  /**
-   * 북마크 화면 캡처
-   */
  const initBookMark = useCallback(() => {
    const video = thrid.current;

    let index = 0;

    const setCurrentTime = () => {
      if (index < indexList.length) {
        video.currentTime = indexList[index].milliseconds / 1000;
        index += 1;
      } else {
        video.oncanplay = null;
      }
    };

    const captureBookMark = (vid, cb) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = 50;
      canvas.height = 50;

      ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);

      setBookMarks((prev) => [
        ...prev,
        {
          seconds: indexList[index - 1]?.milliseconds / 1000,
          formattedTime: format(indexList[index - 1]?.milliseconds / 1000),
          thumbnailFileUrl: canvas.toDataURL("image/jpeg", 1.0),
          seekTime: video.currentTime,
          passedTime: format(video.currentTime),
          title: indexList[index - 1]?.title,
        },
      ]);

      cb();
    };

    video.onloadedmetadata = () => {
      video.currentTime = indexList[index].milliseconds / 1000;
      index += 1;
    };
    video.oncanplay = () => {
      captureBookMark(video, setCurrentTime);
    };
  }, [thrid, indexList]);

  /**
   * 재생
   */
  const handlePlay = useCallback(() => {
    if (state.paused) {
      controller.play();
    } else {
      controller.pause();
    }
  }, [state, controller]);

  /**
   * 음소거
   */
  const handleMute = useCallback(() => {
    if (state.muted) {
      controller.unMute();
    } else {
      controller.mute();
    }
  }, [state, controller]);

  /**
   * 볼륨조절
   */
  const handleVolumeChange = useCallback(
    (volume) => {
      controller.volume(volume);
    },
    [controller]
  );

  /**
   * 화면 속도 조절창 보이기
   */
  const handleRateShow = useCallback(() => {
    setExpandedPlaybackRate((prev) => !prev);
  }, []);

  /**
   * 화면 속도 조절
   */
  const handleRateChange = useCallback(
    (rate) => {
      controller.playBackRate(rate);
      setExpandedPlaybackRate((prev) => !prev);
    },
    [controller]
  );

  /**
   * 풀스크린 기능
   */
  const handleFullScreen = useCallback(() => {
    const elem = refPlayerWrapper.current;

    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    ) {
      setIsFullScreen(false);
      if (document.exitFullscreen) return document.exitFullscreen();
      /* Safari */
      if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
      /* IE/Edge */
      if (document.msExitFullscreen) return document.msExitFullscreen();
    } else {
      setIsFullScreen(true);
      if (elem.requestFullscreen) return elem.requestFullscreen();
      /* Safari */
      if (elem.webkitRequestFullscreen) return elem.webkitRequestFullscreen();
      /* IE/Edge */
      if (elem.msRequestFullscreen) return elem.msRequestFullscreen();
    }
  }, []);

  /**
   * 북마크 해당 영역 이동
   */
  const seekBookMark = useCallback(
    (time) => {
      const video = refVideo.current;
      video.currentTime = time;
    },
    [refVideo]
  );

  /**
   * 키다운 이벤트
   */
  const handleKeyDown = useCallback(
    (e) => {
      e.preventDefault();
      if (e.keyCode === KEY_CODE.ENTER || e.keyCode === KEY_CODE.SPACE) {
        handlePlay();
      }
      if (e.keyCode === KEY_CODE.LEFT) {
        controller.rwd();
      }
      if (e.keyCode === KEY_CODE.RIGHT) {
        controller.fwd();
      }
    },
    [controller, handlePlay]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (!indexList || indexList.length < 1) return;

    initBookMark();
  }, [indexList, initBookMark]);

  return (
    <div className="playerContainer">
      <div
        className={clsx(
          "playerWrapper",
          isFullScreen && "playerBigMode",
          state.paused && "active"
        )}
        ref={refPlayerWrapper}
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
        }}
      >
        <video
          ref={refVideo}
          // autoPlay
          preload="auto"
          crossOrigin="annoymous"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
          }}
        />

        <div className="controlsWrapper">
          <div className="topController">
            <h1>{title}</h1>
          </div>
          {/* 중앙 컨트롤러 */}
          {state.paused && <VideoPlayerMiddleController onPlay={handlePlay} />}

          {/* 하단 컨트롤러 */}
          <div className="bottomController">
            <VideoPlayerProgressbar
              state={state}
              controller={controller}
              previewVideo={previewVideo}
              bookMarks={bookMarks}
            />
            {/* 플레이어 유틸*/}
            <VideoPlayerUtils
              state={state}
              passedTime={format(passedTime)}
              totalTime={format(totalTime)}
              expandedPlaybackRate={expandedPlaybackRate}
              onPlay={handlePlay}
              onMute={handleMute}
              onVolumeChange={handleVolumeChange}
              onRateShow={handleRateShow}
              onRateChange={handleRateChange}
              onFullScreen={handleFullScreen}
            />
          </div>
        </div>
      </div>

      {/* 북마크리스트 */}
      <VideoPlayerBookMarkList
        passedTime={passedTime}
        bookMarks={bookMarks}
        seekBookMark={seekBookMark}
      />
      <video
        ref={thrid}
        // autoPlay
        preload="auto"
        crossOrigin="annoymous"
        style={{ display: "none" }}
      />

      <style jsx global>{`
        button {
          border: none;
          background: none;
          color: #fff;
        }
        .hidden {
          display: none;
        }
        .playerContainer {
          position: relative;
          padding-right: 272px;
          margin-bottom: 20px;
          margin-top: 20px;
          width: 100%;
        }
        .playerWrapper {
          position: relative;
        }
        .playerWrapper video {
          vertical-align: top;
          width: 100%;
        }
        .playerWrapper .controlsWrapper {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          visibility: hidden;
          z-index: 1;
          padding: 16px;
          color: #fff;
          user-select: none;
        }
        .playerWrapper .controlsWrapper::before,
        .playerWrapper .controlsWrapper:after {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          z-index: -1;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0)
          );
          width: 100%;
          height: 100px;
          content: "";
        }
        .playerWrapper .controlsWrapper::after {
          top: unset;
          bottom: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0)
          );
        }
        .playerWrapper .topController {
          font-weight: 500;
          font-size: 16px;
        }
        .playerWrapper .middleController {
          position: absolute;
          top: 50%;
          left: 50%;
        }
        .playerWrapper .middleController .middleIconButton {
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          background: url(/img/video-player/icon_play_56px.svg) no-repeat;
          width: 56px;
          height: 56px;
        }
        .playerWrapper .bottomController {
          position: absolute;
          right: 16px;
          bottom: 16px;
          left: 16px;
        }
        .playerWrapper .bottomController .progressHover {
          cursor: pointer;
          padding: 10px 0 6px;
        }
        .playerWrapper .bottomController .progressHover .progress {
          background-color: rgba(255, 255, 255, 0.3);
          width: 100%;
          height: 2px;
        }
        .playerWrapper
          .bottomController
          .progressHover
          .progress
          .progressFilled {
          position: relative;
          background-color: #fff;
          height: 100%;
        }
        .playerWrapper
          .bottomController
          .progressHover:active
          .progressFilled::before,
        .playerWrapper
          .bottomController
          .progressHover:hover
          .progressFilled::before {
          position: absolute;
          top: -4px;
          right: 0;
          border-radius: 50%;
          background-color: #fff;
          width: 10px;
          height: 10px;
          content: "";
        }
        .playerWrapper
          .bottomController
          .progressHover:active
          + .snapShotContainer,
        .playerWrapper
          .bottomController
          .progressHover:hover
          + .snapShotContainer {
          opacity: 1;
        }
        .playerWrapper .bottomController .snapShotContainer {
          -webkit-transform: translateY(-100%);
          -ms-transform: translateY(-100%);
          position: absolute;
          top: 0;
          transform: translateY(-100%);
          opacity: 0;
          transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
          font-weight: 500;
          font-size: 12px;
          text-align: center;
        }
        .playerWrapper .bottomController .snapShotContainer .snapShotImg {
          position: relative;
          margin: 0 auto;
          border: 1px solid #fff;
          width: 98px;
        }
        .playerWrapper .bottomController .snapShotContainer .snapShotImg img {
          width: 100%;
        }
        .playerWrapper
          .bottomController
          .snapShotContainer
          .snapShotImg::before {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0)
          );
          content: "";
        }
        .playerWrapper
          .bottomController
          .snapShotContainer
          .snapShotImg
          .snapShotTime {
          -webkit-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        .playerWrapper .bottomController .snapShotContainer .snapShotname {
          display: inline-block;
          vertical-align: middle;
          margin-top: 3px;
          max-width: 100%;
          max-width: 200px !important;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .playerWrapper .bottomController .settings {
          font-size: 0;
        }
        .playerWrapper
          .bottomController
          .settings
          .bottomLeftController
          > .bottomIconButton {
          display: inline-block;
          vertical-align: middle;
          border-radius: 50%;
          background: url(/img/video-player/icon_play_24px.svg) 50% 50%
            no-repeat;
          width: 24px;
          height: 24px;
        }
        .playerWrapper
          .bottomController
          .settings
          .bottomLeftController
          > .bottomIconButton.iconStop {
          background: url(/img/video-player/icon_stop_24px.svg) 50% 50%
            no-repeat;
        }
        .playerWrapper
          .bottomController
          .settings
          .bottomLeftController
          > .bottomIconButton.iconReplay {
          background: url(/img/video-player/icon_replay_24px.svg) 50% 50%
            no-repeat;
        }
        .playerWrapper
          .bottomController
          .settings
          .bottomLeftController
          > .bottomIconButton:active,
        .playerWrapper
          .bottomController
          .settings
          .bottomLeftController
          > .bottomIconButton:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
        .playerWrapper .bottomController .settings .timeArea {
          display: inline-block;
          vertical-align: middle;
          padding-left: 10px;
          color: #e6e6e6;
          font-size: 14px;
        }
        .playerWrapper .bottomController .settings .timeArea .timeCurrent {
          color: #fff;
          font-weight: 500;
        }
        .playerWrapper .bottomController .settings .volumeArea {
          display: inline-block;
          vertical-align: middle;
          padding-left: 12px;
        }
        .playerWrapper .bottomController .settings .volumeArea .iconMute {
          display: inline-block;
          vertical-align: middle;
          border-radius: 50%;
          background: url(/img/video-player/icon_volume_mute.svg) 50% 50%
            no-repeat;
          background-repeat: no-repeat;
          width: 24px;
          height: 24px;
        }
        .playerWrapper
          .bottomController
          .settings
          .volumeArea
          .iconMute.volumeLow {
          background: url(/img/video-player/icon_volume_01.svg) 50% 50%
            no-repeat;
        }
        .playerWrapper
          .bottomController
          .settings
          .volumeArea
          .iconMute.volumeHigh {
          background: url(/img/video-player/icon_volume_02.svg) 50% 50%
            no-repeat;
        }
        .playerWrapper .bottomController .settings .volumeArea .volumePanel {
          display: inline-block;
          vertical-align: middle;
          transition: margin 0.2s cubic-bezier(0.4, 0, 1, 1),
            width 0.2s cubic-bezier(0.4, 0, 1, 1);
          cursor: pointer;
          margin-left: 12px;
          outline: 0;
          width: 0;
          height: 100%;
          height: 24px;
        }
        .playerWrapper
          .bottomController
          .settings
          .volumeArea
          .volumePanel
          .volumeSlider {
          position: relative;
          height: 100%;
          overflow: hidden;
        }
        .playerWrapper
          .bottomController
          .settings
          .volumeArea
          .volumePanel
          .volumeSliderHandle {
          position: absolute;
          top: 50%;
          margin-top: -3px;
          border-radius: 50%;
          background: #fff;
          width: 6px;
          height: 6px;
        }
        .playerWrapper
          .bottomController
          .settings
          .volumeArea
          .volumePanel
          .volumeSliderHandle::after,
        .playerWrapper
          .bottomController
          .settings
          .volumeArea
          .volumePanel
          .volumeSliderHandle::before {
          display: block;
          position: absolute;
          top: 50%;
          left: 0;
          left: -58px;
          margin-top: -1px;
          background-color: #fff;
          width: 80px;
          height: 2px;
          content: "";
        }
        .playerWrapper
          .bottomController
          .settings
          .volumeArea
          .volumePanel
          .volumeSliderHandle::before {
          left: -75px;
          background-color: #fff;
        }
        .playerWrapper
          .bottomController
          .settings
          .volumeArea
          .volumePanel
          .volumeSliderHandle::after {
          left: 3px;
          background: rgba(255, 255, 255, 0.2);
        }
        .playerWrapper .bottomController .settings .volumeArea:active .iconMute,
        .playerWrapper .bottomController .settings .volumeArea:hover .iconMute {
          background-color: rgba(255, 255, 255, 0.3);
        }
        .playerWrapper
          .bottomController
          .settings
          .volumeArea:active
          .volumePanel,
        .playerWrapper
          .bottomController
          .settings
          .volumeArea:hover
          .volumePanel {
          width: 80px;
        }
        .playerWrapper .bottomController .bottomRightController {
          position: absolute;
          right: 0;
          bottom: 0;
          font-size: 0;
        }
        .playerWrapper .bottomController .bottomRightController .rate {
          display: inline-block;
          vertical-align: middle;
          font-size: 14px;
        }
        .playerWrapper
          .bottomController
          .bottomRightController
          .rate
          .rateOption {
          -webkit-transform: translateY(-100%);
          -ms-transform: translateY(-100%);
          display: none;
          position: absolute;
          top: -20px;
          left: -10px;
          transform: translateY(-100%);
          color: #fff;
        }
        .playerWrapper
          .bottomController
          .bottomRightController
          .rate
          .rateOption
          > ul {
          border-radius: 4px;
          background-color: rgba(0, 0, 0, 0.7);
          padding: 10px;
          width: 80px;
        }
        .playerWrapper
          .bottomController
          .bottomRightController
          .rate
          .rateOption
          > ul
          > li {
          cursor: pointer;
        }
        .playerWrapper
          .bottomController
          .bottomRightController
          .rate
          .rateOption
          > ul
          > li.active,
        .playerWrapper
          .bottomController
          .bottomRightController
          .rate
          .rateOption
          > ul
          > li:active,
        .playerWrapper
          .bottomController
          .bottomRightController
          .rate
          .rateOption
          > ul
          > li:hover {
          background: url(/img/video-player/Icon_rate_check.svg) 100% 50%
            no-repeat;
        }
        .playerWrapper
          .bottomController
          .bottomRightController
          .rate
          .rateOption
          > ul
          > li
          + li {
          margin-top: 10px;
        }
        .playerWrapper
          .bottomController
          .bottomRightController
          .rate
          .rateOption.active {
          display: block;
        }
        .playerWrapper .bottomController .bottomRightController .icoFullScreen {
          display: inline-block;
          vertical-align: middle;
          margin-left: 12px;
          border-radius: 50%;
          background: url(/img/video-player/icon_wide.svg) no-repeat;
          width: 24px;
          height: 24px;
        }
        .playerWrapper
          .bottomController
          .bottomRightController
          .icoFullScreen:active,
        .playerWrapper
          .bottomController
          .bottomRightController
          .icoFullScreen:hover {
          background-color: rgba(255, 255, 255, 0.3) !important;
        }
        .playerWrapper.active .controlsWrapper,
        .playerWrapper:hover .controlsWrapper {
          visibility: visible;
        }
        .playerWrapper.playerBigMode .topController {
          font-size: 18px;
        }
        .playerWrapper.playerBigMode
          .bottomController
          .settings
          .bottomLeftController
          > .bottomIconButton,
        .playerWrapper.playerBigMode
          .bottomController
          .settings
          .volumeArea
          .iconMute {
          background-size: 40px;
          width: 48px;
          height: 48px;
        }
        .playerWrapper.playerBigMode
          .bottomController
          .settings
          .bottomLeftController
          > .bottomIconButton.iconReplay,
        .playerWrapper.playerBigMode
          .bottomController
          .settings
          .volumeArea
          .iconMute.iconReplay {
          background-size: 33px;
        }
        .playerWrapper.playerBigMode
          .bottomController
          .bottomRightController
          .icoFullScreen {
          background: url(/img/video-player/icon_downsize.svg) no-repeat;
          width: 48px;
          height: 48px;
        }
        .ShortcutsArea {
          position: absolute;
          top: 0;
          right: 0;
          border: 1px solid #c7c7c7;
          background-color: #fff;
          width: 272px;
          height: 100%;
          overflow: hidden;
        }
        .ShortcutsArea .header {
          border-bottom: 1px solid #e6e6e6;
          padding: 0 10px;
          height: 40px;
          font-weight: 500;
          line-height: 40px;
        }
        .ShortcutsArea .thumbnailList {
          height: calc(100% - 40px);
          overflow-y: auto;
        }
        .ShortcutsArea .thumbnailList .thumbStartPoint {
          display: block;
          padding: 6px 12px;
          width: 100%;
          color: #000;
          font-size: 0;
        }
        .ShortcutsArea .thumbnailList .thumbStartPoint .thumbImg {
          display: inline-block;
          position: relative;
          vertical-align: top;
          background-color: #f5f5f5;
          width: 88px;
          height: 49px;
          overflow: hidden;
        }
        .ShortcutsArea .thumbnailList .thumbStartPoint .thumbImg img {
          position: unset !important;
          width: 100%;
        }
        .ShortcutsArea .thumbnailList .thumbStartPoint .thumbDetail {
          display: inline-block;
          vertical-align: top;
          padding-left: 10px;
          width: calc(100% - 88px);
          font-size: 14px;
        }
        .ShortcutsArea .thumbnailList .thumbStartPoint .thumbDetail .listTime {
          display: inline-block;
          vertical-align: middle;
          border-radius: 4px;
          background-color: rgba(228, 228, 228, 0.8);
          padding: 0 6px;
          height: 18px;
          color: #616161;
          font-size: 12px;
          line-height: 18px;
        }
        .ShortcutsArea .thumbnailList > ol > li + li {
          margin-top: 2px;
        }
        .ShortcutsArea .thumbnailList > ol > li.active,
        .ShortcutsArea .thumbnailList > ol > li:active,
        .ShortcutsArea .thumbnailList > ol > li:hover {
          background-color: #f4faf9;
        }
        .ShortcutsArea .thumbnailList > ol > li.active .thumbImg::before,
        .ShortcutsArea .thumbnailList > ol > li:active .thumbImg::before,
        .ShortcutsArea .thumbnailList > ol > li:hover .thumbImg::before {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          // z-index: 9;
          border: 2px solid #16b294;
          content: "";
        }
        .videoTitle {
          margin-bottom: 12px;
          font-weight: 700;
          font-size: 16px;
        }

        // 반응형
        @media screen and (max-width: 1180px) {
          .ShortcutsArea {
            display: none;
          }
          .playerContainer {
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  );
}
export default VideoPlayer;
