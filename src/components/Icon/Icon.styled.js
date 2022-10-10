import styled from "styled-components";

export const Social = styled.svg`
fill: #696969;
&:hover {
  animation: pulse 1s infinite;
  transition: .3s;
}
@keyframes pulse {
  0% {
    transform: scale(1.1);
  }
  70% {
    transform: scale(1);
  }
    100% {
    transform: scale(1.1);
  }
  }
`