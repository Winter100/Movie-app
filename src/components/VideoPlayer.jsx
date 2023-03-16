import YouTube from "react-youtube";
import style from "./VideoPlayer.module.css";

function VideoPlayer({ video, setIsVideo }) {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
    },
  };

  let key = "";

  if (video) {
    key = video.results[0].key;
  } else {
    key = false;
  }

  return (
    <div
      onClick={() => setIsVideo((is) => !is)}
      className={style.videoPlayerDiv}
    >
      <div className={style.videoPlayer}>
        {key ? (
          <YouTube videoId={key} opts={opts} origin="https://localhost:3000" />
        ) : (
          <p className={style.videoP}>해당 영상은 예고편을 제공하지 않습니다</p>
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
