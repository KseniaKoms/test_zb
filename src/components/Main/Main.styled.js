import styled from "styled-components";
import TopLeft from '../../images/png/yellow-top.png';
import CenterYellow from '../../images/png/yellow-ellips.png';
import CenterPink from '../../images/png/pink-ellips.png';
import Ellips from '../../images/png/ellips.png';


export const Body = styled.main`
padding-bottom: 180px;
`

export const SmileTopLeft = styled.div`
  background-image: url(${TopLeft});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  top: 23px;
  left: 29px;
  width: 88px;
  height: 86px;

  @media screen and (min-width: 480px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const SmileCenterYellow = styled.div`
  background-image: url(${CenterYellow});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 127px;
  width: 127px;
  left: 763px;
  top: 516px;
  border-radius: 0px;
  z-index: 2;

`

export const SmileCenterPink = styled.div`
  background-image: url(${CenterPink});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 258px;
  width: 264px;
  left: 762px;
  top: 558px;
  border-radius: 0px;
  z-index: 1;
`

export const Moon = styled.div`
  background-image: url(${Ellips});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 104px;
  width: 138px;
  left: 714px;
  top: 21px;
  border-radius: 0px;
  z-index: -1;

`
