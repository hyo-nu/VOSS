import { BackGroundImg } from "../../components/BackGroundImg";
import { styled } from "styled-components";
import Messenger from "../../components/Message/Messenger";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { BottomBar, BottomSection, CloseSectionBtn, ClosedBottomSection, Container, UnderBack } from "./Meeting.style";
import MeetJoin from "../../components/Meeting/OpenVidu/MeetJoin";
import { MeetingProps } from "../../api/meeting";
import CloseSection from "../../assets/Meeting/CloseSection.png";
import Vector from "../../assets/Meeting/Vector.png";
import DubbingRoom from "/src/components/Meeting/MeetDub/DubbingRoom/DubbingRoom";

//리코일 사용
import { useRecoilState } from "recoil";
import { sendMsg, recieveMsg } from "/src/recoil/MeetDub";
import { meetDubSelectState } from "/src/recoil/HW_Atom";
import DubbingList from "/src/components/Meeting/MeetDub/DubbingList/DubbingList";
/*
리코일 기본 값 = "none"
버튼 클릭 시 send 변경 후 chat에서 등록
각 값은 보내고 받을 때마다 none으로 초기화
*/


function Meeting() {

  const navigate = useNavigate()
  const { state } = useLocation(); // 2번 라인
  const [bottomOn, setBottomOn] = useState(false);

  //send는 컴포넌트에서 보내는 이벤트
  //recieve는 chat으로 받는 이벤트
  const [send, setSend] = useRecoilState(sendMsg);
  const [recieve, setRecieve] = useRecoilState(recieveMsg);
  const [meetDubSelect, setMeetDubSelect] = useRecoilState<number>(meetDubSelectState)

  // 뒤로가기 새로고침
  // useEffect(() => {
  //   (() => {
  //     window.addEventListener("beforeunload", onbeforeunload);
  //     window.addEventListener("popstate", popstateHandler);
  //   })();

  //   // return () => {
  //   //   window.removeEventListener("beforeunload", onbeforeunload);
  //   //   window.removeEventListener("popstate", popstateHandler);
  //   // };
  // }, []);

  //이벤트 수신 감지
  useEffect(() => {
    if (recieve == "/open") {
      console.log("bottomOn");
      setBottomOn(true);
      setRecieve("/none");
    }
    else if (recieve == "/close") {
      console.log("bottomOff");
      setBottomOn(false);
      setRecieve("/none");
    }
  }, [recieve])

  //뒤로가기 새로고침
  const onbeforeunload = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    alert("onbeforeunload");
    navigate("/meeting");
  };
  //뒤로가기 새로고침
  const popstateHandler = () => {
    alert("popstateHandler");
    navigate("/meeting");
  };

  const isBottomOn = (order: string) => {
    console.log("isBottomOn : " + order)
    setMeetDubSelect(0)
    // setSend("open");
    setSend(order);
  }

  const props: MeetingProps = {
    password: state.password,
    meetRoomId: state.meetRoomId,
    bottomOn: bottomOn,
  };

  return (
    <UnderBack>
      <Container $isClicked={bottomOn}>
        <MeetJoin props={props} />
      </Container>
      {bottomOn ? (
        <BottomSection>
          <CloseSectionBtn src={CloseSection} onClick={() => { isBottomOn("/close") }} />
          {meetDubSelect ? <DubbingRoom /> : <DubbingList />}
        </BottomSection>
      ) : (
        <ClosedBottomSection>
          <BottomBar onClick={() => { isBottomOn("/open") }}><img src={Vector} />더빙연습</BottomBar>
        </ClosedBottomSection>
      )}

      <Messenger />
    </UnderBack>
  );
}
export default Meeting;
