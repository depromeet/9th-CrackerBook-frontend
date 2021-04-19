import styled from "styled-components";

const MainContainer = styled.div`
  padding: 0 10px;
`;

const StudyTypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StudyTypeDiv = styled.div`
  border-radius: 20px;
  margin: 10px;
  background-color: #F4F4F4;
  text-align: center;
`;

const StudyTypeImg = styled.img`
  width: 52px;
  height: 52px;
`;

const Hr = styled.hr`
  width: 100%;
  color: #EEEEEE;
  border: thin solid #EEEEEE; 
`
export {
  MainContainer,
  StudyTypeWrapper,
  StudyTypeDiv,
  StudyTypeImg,
  Hr
};
