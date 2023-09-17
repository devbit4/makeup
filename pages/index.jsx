import { useEffect, useState } from "react";
import Seo from "../components/common/Seo";
import Info from "../components/sub/home/Info";
import News from "../components/sub/home/News";
import Visual from "../components/sub/home/Visual";
import Reviews from "../components/sub/home/Reviews";
import axios from "axios";
import VideoPlayer from "../components/common/video-player/components/VideoPlayer";
import Video from "../components/sub/home/Video";

export default function HomePage() {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    axios
      .get("dbs/home.json")
      .then((res) => setReviews(res.data.reviews))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Seo title="Home" />
      <div className="home-inner">
        <Visual />

        <Info />

        <News />

        <Reviews reviews={reviews} />

        <Video />
      </div>
    </>
  );
}
