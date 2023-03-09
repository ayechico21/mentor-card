import React from "react";
import styled from "styled-components";

const MentorInfoWrapper = styled.div`
  margin-top: 120px;
  width: 35%;
  margin-left: 50px;
`;

function MentorInfo() {
  const val = 5;
  return (
    <MentorInfoWrapper>
      <div className="rating">{val.toFixed(1)}</div>
      <div className="stars"></div>
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
