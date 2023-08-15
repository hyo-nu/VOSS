import styled from "styled-components";
import WarningIcon from "/src/assets/Modal/WarningIcon.png"

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.2);
  `;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  padding: 30px 50px;
  width: 350px;
  height: 240px;
  border-radius: 10px;
  background-color: white;
  `;

const ModalImage = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 50px;
  background-color: white;
  border: solid 2px red;
  img {
    width: 50px;
    height: 50px
  }
`;

const ModalContent = styled.div`
  width: 350px;
  height: 100px;
  background-color: white;
  border: solid 2px orange;
`;

const ModalBtns = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: white;
  border: solid 2px green;
`;

const ModalNoBtn = styled.div`
  width: 70px;
  height: 40px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  background-color: white;
  border: solid 2px blue;
  `;
const ModalYesBtn = styled.div`
  width: 70px;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  background-color: white;
  border: solid 2px blue;
`;


function SmallWarningModal() {
  return (
    <BackDrop>
    <ModalContainer>

      <ModalImage>
        <img src={WarningIcon}></img>
      </ModalImage>

      <ModalContent>
      </ModalContent>

      <ModalBtns>
        <ModalNoBtn>취소</ModalNoBtn>
        <ModalYesBtn>확인</ModalYesBtn>
      </ModalBtns>

    </ModalContainer>
    </BackDrop>
  );
}

export default SmallWarningModal;
