import React from "react";
import styled from "styled";

const SCInput = styled.input`
  margin-top: 30px;
  background-color: #ddd;
  padding: 5px;
  font-size: 15px;
`;

export default function date(props) {
  const { onChange } = props;
  return (
    <SCInput
      type="date"
      onChange={(event) => onChange(event.target.value)}
    ></SCInput>
  );
}
