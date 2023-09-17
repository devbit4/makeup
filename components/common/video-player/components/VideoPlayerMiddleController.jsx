function VideoPlayerMiddleController(props) {
  const { onPlay } = props;

  return (
    <div className="middleController">
      <button
        type="button"
        className="middleIconButton iconPlay"
        onClick={onPlay}
      >
        <span className="hidden">재생</span>
      </button>
    </div>
  );
}

export default VideoPlayerMiddleController;
