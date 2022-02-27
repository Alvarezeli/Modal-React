import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  position: relative; 
  padding: 20px;
`;

export const TopFold = styled.div`
display: flex;
aling-items: center;
justify-content: space-between;
margin-bottom: 20px;
padding-bottom: 20px;
`

export const CloseBtn = styled.button`
position: absolute;
top: 20px;
right: 20px;
font-size: 25px;
background: none;
border: none;
cursor: pointer;
border-radius: 5px;
color: 'black';

&:hover {
  color: red;
}
`
// .modalBackground {
//
//   }

//   .modalContainer {
//
//   }

//   .modalContainer .title {
//     display: inline-block;
//     text-align: center;
//     margin-top: 10px;
//   }

//   .titleCloseBtn {
//     display: flex;
//     justify-content: flex-end;
//   }

//   .titleCloseBtn button {
//     background-color: transparent;
//     border: none;
//     font-size: 25px;
//     cursor: pointer;
//   }

//   .modalContainer .body {
//     flex: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 1.7rem;
//     text-align: center;
//   }

//   .modalContainer .footer {
//     flex: 20%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .modalContainer .footer button {
//     width: 150px;
//     height: 45px;
//     margin: 10px;
//     border: none;
//     background-color: cornflowerblue;
//     color: white;
//     border-radius: 8px;
//     font-size: 20px;
//     cursor: pointer;
//   }

//   #cancelButton {
//     background-color: crimson;
//   }
