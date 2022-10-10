import styled from 'styled-components';
import GreenEllips from '../../images/png/green-ellips.png';
import PinkDown from '../../images/png/pink-ellips.png';


export const FooterBox = styled.footer`
position: relative;
width: auto;
height: 200px;
background: #e4e4e4;
background-repeat: no-repeat;
background-size: contain;
border-top: 1px solid #D8D8D8;
`

export const SmileGreen = styled.div`
  background-image: url(${GreenEllips});
  position: absolute;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
  width: 78px;
  height: 97px;
  top: 0px;
  right: 124px;
  border-radius: 0px;
`

export const PinkEllips = styled.div`
  background-image: url(${PinkDown});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 208px;
  width: 214px;
  left: -31px;
  bottom: 1px;
  z-index: 1;

`
