import React from "react";
import { range } from "../../utils";
import Star from "../Star/Star";

function MentorInfo({ mentor }) {
  return (
    <div className="mentor-info">
      <div className="rating">{mentor.rating.toFixed(1)}</div>
      {range(Math.floor(mentor.rating)).map((_, index) => {
        return <Star key={index} />;
      })}
      <h1>{mentor.name}</h1>
      <h2>{mentor.company}</h2>
      <p>{mentor.bio}</p>
    </div>
  );
}

export default MentorInfo;
