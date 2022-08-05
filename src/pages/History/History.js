import { useEffect, useState } from "react";
import { VideoCard } from "../../components";
import { DELETE_ALL_HISTORY } from "../../constants/actionType";
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
          onClick={() => historyDispatch({ type: DELETE_ALL_HISTORY })}
        >
          DELETE ALL
        </button>
      </div>
      {historyState.length > 0 ? (
        historyState.map((item) => (
          <VideoCard
            key={item._id}
            variant={windowWidth < 450 ? "vertical" : "horizontal"}
            video={item}
          />
        ))
      ) : (
        <p className="text-lg page-center text-center">
          Watch videos to add them to your history.
        </p>
      )}
    </div>
  );
}

export default History;
