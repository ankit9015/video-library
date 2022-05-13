import { useEffect, useState } from "react";
import { VideoCard } from "../../components";
import { useHistory } from "../../context";
function History() {
  const { historyState, historyDispatch } = useHistory();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWindowWidth]);

  return (
    <div className="history flex-column gap-5 flex-align-center">
      <div className="history-header flex-row">
        <button
          className="button button-primary text-md"
          onClick={() => historyDispatch({ type: "DELETE_ALL" })}
        >
          DELETE ALL
        </button>
      </div>
      {historyState &&
        historyState.map((item) => (
          <VideoCard
            key={item._id}
            variant={windowWidth < 450 ? "vertical" : "horizontal"}
            video={item}
          />
        ))}
    </div>
  );
}

export default History;
