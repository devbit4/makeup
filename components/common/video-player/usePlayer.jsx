import { useEffect, useRef } from "react";

import Hls from "hls.js";
import useSetState from "../../../hooks/useSetState";

const DEFAULT_VOLUME = 1;

export default function usePlayer(src) {
  const refVideo = useRef();

  const [state, setState] = useSetState({
    paused: true,
    playing: false,
    muted: false,
    volume: DEFAULT_VOLUME,
    rate: 1,
    currentTime: 0,
    duration: 0,
    ended: false,
    scrubbing: false,
  });

  let lockPlay = false;

  /**
   * 컨트롤러
   */
  const controller = {
    // 재생
    play: () => {
      const video = refVideo.current;
      if (!video) return;
      if (!lockPlay) {
        const promise = video.play();
        const isPromise = typeof promise === "object";
        if (isPromise) {
          lockPlay = true;
          const resetLock = () => {
            lockPlay = false;
          };
          promise.then(resetLock, resetLock);
        }
      }
    },

    // 일시정지
    pause: () => {
      const video = refVideo.current;
      if (video && !lockPlay) {
        return video.pause();
      }
    },

    // 정지
    stop: () => {
      const video = refVideo.current;
      if (!video) return;
      refVideo.current.pause();
      refVideo.current.currentTime = 0;
    },

    // 음소거
    mute: () => {
      const video = refVideo.current;
      if (!video) return;
      video.muted = true;
    },

    // 음소거해제
    unMute: () => {
      const video = refVideo.current;
      if (!video) return;
      video.muted = false;
    },

    // 볼륨조절
    volume: (volume) => {
      const video = refVideo.current;
      if (!video) return;
      volume = Math.min(1, Math.max(0, volume));
      video.volume = volume;
      if (volume === 0) {
        video.muted = true;
      } else {
        video.muted = false;
      }
    },

    //프로그래스바 해당 시간 이동
    seek: (seekTime) => {
      const video = refVideo.current;
      if (!isNaN(seekTime)) {
        video.currentTime = seekTime;
      }
    },

    //재생 속도
    playBackRate: (rate) => {
      const video = refVideo.current;
      video.playbackRate = rate;
    },

    //앞으로감기
    rwd: (num = 10) => {
      const video = refVideo.current;
      video.currentTime = video.currentTime - num;
    },

    //뒤로감기
    fwd: (num = 10) => {
      const video = refVideo.current;
      video.currentTime = video.currentTime + num;
    },

    //프로그래스바, 볼륨슬라이더 스크럽
    scrub: () => {
      setState({ scrubbing: true });
    },
  };

  useEffect(() => {
    const video = refVideo.current;
    video.volume = DEFAULT_VOLUME;

    if (!video) return;
    // video.src = src;
    // video.load();
    if (Hls.isSupported()) {
      // var hls = new Hls();
      // hls.loadSource(src);
      // // hls.attachMedia(video);
      video.src = src;
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }

    const onPlay = () => {
      setState({ paused: false, playing: true, ended: false });
    };

    const onPause = () => {
      setState({ paused: true, playing: false });
    };

    const onVolumeChange = () => {
      if (video.muted) {
        setState({
          volume: 0,
          muted: video.muted,
        });
      } else {
        setState({
          volume: video.volume,
          muted: video.muted,
        });
      }
    };

    const onTimeUpdate = () => {
      setState({
        currentTime: video.currentTime,
        duration: video.duration,
      });
    };

    const onRateChange = () => {
      setState({ rate: video.playbackRate });
    };

    const onLoadedMetaData = () => {
      // console.log('metadata');
      setState({ duration: video.duration });
    };

    const onCanPlay = () => {
      // console.log('canplay');
    };

    const onCanPlayThrough = () => {
      // console.log('canplaythrough');
    };

    const onSeeked = () => {
      // console.log('seeking');
      setState({ scrubbing: false });
    };

    const onSeeking = () => {
      // console.log('seeking');
    };

    const onWaiting = () => {
      // console.log('waiting');
    };

    const onEnded = () => {
      setState({ ended: true });
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("volumechange", onVolumeChange);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ratechange", onRateChange);
    video.addEventListener("loadedmetadata", onLoadedMetaData);
    video.addEventListener("ended", onEnded);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("canplaythrough", onCanPlayThrough);
    video.addEventListener("seeking", onSeeking);
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("waiting", onWaiting);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("volumechange", onVolumeChange);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ratechange", onRateChange);
      video.removeEventListener("loadedmetadata", onLoadedMetaData);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("canplaythrough", onCanPlayThrough);
      video.removeEventListener("seeking", onSeeking);
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("waiting", onWaiting);
      video.removeEventListener("ended", onEnded);
    };
  }, [src, setState]);

  return {
    refVideo,
    controller,
    state,
  };
}
