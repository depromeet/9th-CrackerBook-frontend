import styled from "styled-components";

export function NoticeHeader(): JSX.Element {

    return (
        <>
            <Header>
                <BackIcon src='assets/detail/back.svg'/>
                <Title>
                    스터디 공지
                </Title>
            </Header>
        </>
    )
}

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding-top: 10px;
`;

const BackIcon = styled.img`
  width: 10px;
  height:18px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Title = styled.div`
  text-align: center;
  width: 100%;
  font-size: 16px;
`;
