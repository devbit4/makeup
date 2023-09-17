import { useRef, useState, useEffect, useCallback } from 'react';

const SLIDER_WIDTH = 80;
const HANDLE_WIDTH = 6;

function PlayerVolumeSlider(props) {
  const { state, onVolumeChange } = props;

  const refSlider = useRef();

  const [isScrubbing, setIsScrubbing] = useState(false);

  /**
   * 슬라이더 rect 구하기
   */
  const getSliderRect = useCallback(() => {
    return refSlider.current.getBoundingClientRect();
  }, []);

  /**
   * 슬라이더 퍼센트
   */
  const getSliderPercent = useCallback((x, rect) => {
    return Math.min(Math.max(0, x - rect.left), SLIDER_WIDTH) / SLIDER_WIDTH;
  }, []);

  /**
   * 퍼센트값 바꾸기
   */
  const changePercent = useCallback(
    (percent) => {
      onVolumeChange(percent);
    },
    [onVolumeChange]
  );

  /**
   * 스크럽 시작
   */
  const handleScrubStart = useCallback(() => {
    setIsScrubbing(true);
  }, []);

  /**
   * 스크럽 중
   */
  const handleScrubbing = useCallback(
    (e) => {
      if (!isScrubbing) return;

      const rect = getSliderRect();
      const percent = getSliderPercent(e.pageX, rect);

      changePercent(percent);
    },
    [isScrubbing, getSliderRect, getSliderPercent, changePercent]
  );

  /**
   * 스크럽 종료
   */
  const handleScrubEnd = useCallback(
    (e) => {
      if (!isScrubbing) return;

      const rect = getSliderRect();
      const percent = getSliderPercent(e.pageX, rect);

      changePercent(percent);

      setIsScrubbing(false);
    },
    [isScrubbing, getSliderRect, getSliderPercent, changePercent]
  );

  useEffect(() => {
    document.addEventListener('pointermove', handleScrubbing);
    document.addEventListener('pointerup', handleScrubEnd);

    return () => {
      document.removeEventListener('pointermove', handleScrubbing);
      document.removeEventListener('pointerup', handleScrubEnd);
    };
  }, [handleScrubbing, handleScrubEnd]);

  return (
    <div
      ref={refSlider}
      className="volumeSlider"
      onPointerDown={handleScrubStart}
    >
      <div
        className="volumeSliderHandle"
        style={{ left: `${state.volume * (SLIDER_WIDTH - HANDLE_WIDTH)}px` }}
      ></div>
    </div>
  );
}

export default PlayerVolumeSlider;
