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
      <div className="stars">Stars</div>
      <h1>Mentor Name</h1>
      <h2>Mentor Company</h2>
      <p>
        A curious learner, on a way to become a kickass developer who writes
        Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software
        Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer
        | Coding Instructor
      </p>
    </MentorInfoWrapper>
  );
}

export default MentorInfo;
