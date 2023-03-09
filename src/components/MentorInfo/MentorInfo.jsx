import React from "react";
import styled from "styled-components";
import { range } from "../../utils";
import Star from "../Star/Star";

const MentorInfoWrapper = styled.div`
  margin-top: 120px;
  width: 35%;
  margin-left: 80px;
`;

function MentorInfo() {
  const rating = 5;
  return (
    <MentorInfoWrapper>
      <div className="rating">{rating.toFixed(1)}</div>
      {range(Math.floor(rating)).map((_, index) => {
        return <Star key={index} />;
      })}
      <h1>Mentor Name</h1>
      <h2>Mentor Company</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ad dolores
        autem mollitia! Mollitia, ipsam! Odit, eos blanditiis. Dolorem optio hic
        totam voluptatum distinctio quibusdam voluptatibus officia laudantium
        quis aut.
      </p>
    </MentorInfoWrapper>
  );
}

export default MentorInfo;
