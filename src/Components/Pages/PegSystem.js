import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import React from "react";
export const PegSystem = () => {
  return (
    <div className="container peg-system">
      <div className="img-container">
        <img
          src="https://i.ytimg.com/vi/PK-wOZghJjg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAyD8BNgIRg-jezW59r5jCcAM71eQ"
          alt="youTube_thumbnail"
        />
      </div>
      <div className="btn-container">
        <a href="https://www.youtube.com/watch?v=PK-wOZghJjg" className="button">
          Watch Video <PlayArrowRoundedIcon/>
        </a>
      </div>
    </div>
  );
};
