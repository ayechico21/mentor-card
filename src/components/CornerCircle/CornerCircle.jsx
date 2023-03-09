import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  background-color: #7abd87;
  width: 1600px;
  height: 1600px;
  right: -200px;
  top: -1100px;
  position: fixed;
  border-radius: 50%;
`;

function CornerCircle() {
  return <Circle></Circle>;
}

export default CornerCircle;
