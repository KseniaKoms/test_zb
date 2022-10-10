import styled from 'styled-components';

export const FormBox = styled.form`
margin-left: 50px;
position: relative;
`

export const Input = styled.input.attrs((props) => ({
    type: 'text',
    size: props.size || '18px',
  }))`
margin-bottom: 8px;
padding-top: 30px;
padding-bottom: 30px;
padding-left: 45px;
width: 557px;
height: auto;
border: 1px solid #DCDCDC;
border-radius: 10px;
outline: none;

font-size: 18px;
font-family: 'Apercu Arabic Pro';
font-weight: 400;
font-size: 18px;
line-height: 1.8;
color: #2D2D2D;
`

export const Textarea = styled.textarea.attrs((props) => ({
    type: 'text',
    size: props.size || '18px',
  }))`
margin-bottom: 23px;
padding-top: 30px;
padding-left: 45px;
width: 557px;
height: 190px;
border: 1px solid #DCDCDC;
border-radius: 10px;
outline: none;

font-size: 18px;
font-family: 'Apercu Arabic Pro';
font-weight: 400;
font-size: 18px;
line-height: 1.8;
color: #2D2D2D;
`

export const Button = styled.button`
display: block;
width: auto;
height: auto;
padding: 27px 52px;
background-color: #FAD34F;
border-radius: 500px;
border-color: transparent;
cursor: pointer;

font-family: 'Apercu Arabic Pro';
font-weight: 400;
font-size: 18px;
line-height: 1;
color: #FFFFFF;

&:hover {
  animation: pulse 1s infinite;
  transition: .3s;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(.9);
  }
    100% {
    transform: scale(1);
  }
  }

`
