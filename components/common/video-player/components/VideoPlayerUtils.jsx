import clsx from 'clsx';

import PlayerVolumeSlider from './VideoPlayerVolumeSlider';

function VideoPlayerUtils(props) {
  const {
    state,
    passedTime,
    totalTime,
    expandedPlaybackRate,
    onPlay,
    onMute,
    onVolumeChange,
    onRateShow,
    onRateChange,
    onFullScreen,
  } = props;

  return (
    <div className="settings">
      <div className="bottomLeftController">
        {/* 재생/정지 */}
        <button
          type="button"
          className={clsx(
            'bottomIconButton',
            state.ended ? 'iconReplay' : state.paused ? 'iconPlay' : 'iconStop'
          )}
          onClick={onPlay}
        >
          <span className="hidden">재생</span>
        </button>

        {/* 시간 */}
        <div className="timeArea">
          <span className="timeCurrent">{passedTime}</span> / {totalTime}
        </div>

        {/* 볼륨 */}
        <div className="volumeArea">
          <button
            type="button"
            className={clsx(
              'iconMute',
              state.volume === 0
                ? ''
                : state.volume <= 0.5
                ? 'volumeLow'
                : 'volumeHigh'
            )}
            onClick={onMute}
          >
            <span className="hidden">음소거</span>
          </button>
          <div className="volumePanel">
            <PlayerVolumeSlider state={state} onVolumeChange={onVolumeChange} />
          </div>
        </div>
      </div>

      <div className="bottomRightController">
        {/* 재생속도 */}
        <div className="rate">
          <button type="button" onClick={onRateShow}>
            <span>
              X {state.rate % 1 === 0 ? state.rate + '.0' : state.rate}
            </span>
          </button>
          <div
            className={clsx('rateOption', expandedPlaybackRate && 'active')}
            style={{ maxHeight: '172px', overflow: 'auto' }}
          >
            <ul>
              {['0.8', '1.0', '1.2', '1.3', '1.4', '1.6', '1.8', '2.0'].map(
                (rate) => {
                  return (
                    <li key={rate} onClick={() => onRateChange(rate)}>
                      X {rate}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>

        {/* 풀스크린 */}
        <button type="button" className="icoFullScreen" onClick={onFullScreen}>
          <span className="hidden">전체화면</span>
        </button>
      </div>
    </div>
  );
}

export default VideoPlayerUtils;
