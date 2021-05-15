import styled, {keyframes} from "styled-components";
import {useState} from "react";
import {Link} from "@material-ui/core";
import HomeComponent from "./HomeComponent";
import MyPageComponent from "./MyPageComponent";
import CreateStudyComponent from "./CreateStudyComponent";


export default function FooterComponent(): JSX.Element {
    return (
        <FooterWrapper>
            <HomeComponent/>
            <CreateStudyComponent/>
            <MyPageComponent/>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
  padding: 0 40px;
  width: 296px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 93px;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -2px 6px #e0e0e0;
  z-index: 10;
`;

const ButtomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  cursor: pointer;
`;

const ButttomImg = styled.img`
  width: 32px;
  height: 32px;
`;

const Text = styled.div`
  font-size: 12px;
`;

export {Text, ButttomImg, ButtomWrapper}


