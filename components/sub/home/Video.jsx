import VideoPlayer from "../../common/video-player/components/VideoPlayer";

export default function Video() {
  return (
    <>
      <section className="home-video">
        <div className="home-video-inner">
          <VideoPlayer
            title={"demo"}
            poster={
              "https://dela4pam71omq.cloudfront.net/svc01/2023/03/15/e594addda71f4c9a8ac6e7f54d995876/197cbbaaedf0406b97c29b8235089cc1"
            }
            src={"/img/video-player/demo.mp4"}
            indexList={[
              {
                title: "first",
                milliseconds: 0,
              },
              {
                title: "second",
                milliseconds: 30000,
              },
              {
                title: "third",
                milliseconds: 50000,
              },
            ]}
          />
        </div>
      </section>
      <style jsx>{`
        .home-video {
          width: 100%;
          background-color: #e5e0e0;
          padding: 100px 0vw;
          color: #fff;
        }
        .home-video-inner {
          width: 1180px;
          height: 100%;
          margin: 0 auto;
          position: relative;
        }

        // 반응형
        @media screen and (max-width: 1180px) {
          .home-video-inner {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
