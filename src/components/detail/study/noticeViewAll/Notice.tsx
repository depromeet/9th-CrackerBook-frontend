import styled from "styled-components";

const noticeList = [
  {
    profile: "/assets/main/surprised.svg",
    name: "빈센조",
    date: "2021.05.05",
    comment:
      "안녕하세요 스터디장 빈센조입니다! 이번주는 원래 4장까지 읽어오기로 했지만, 3장 길이가 너무 많은 관계로 3장까지만 읽어오는걸로 하겠습니다 :-) 모두 다음주에 만나요! ",
  },
  {
    profile: "/assets/main/surprised.svg",
    name: "빈센조",
    date: "2021.05.06",
    comment:
      "이번주는 개인 사정으로 인하여 스터디를 한 주 쉬어가도록 하겠습니다. 죄송합니다! 다음주에 즐거운 마음으로 만나요 :-)",
  },
  {
    profile: "/assets/main/surprised.svg",
    name: "빈센조",
    date: "2021.05.05",
    comment:
      "안녕하세요 모두 만나서 반갑습니다. 이번 스터디장을 맡게된 빈센조라고 합니다.\n" +
      "저희 스터디는 매주 수요일에 이루어지는 스터디로서 모든 공지사항은 이 공지사항 탭을 통해 확인하실 수 있습니다 :-)\n" +
      "앞으로 잘 부탁드리겠습니다 ^^",
  },
];

export function Notice(): JSX.Element {
  return (
    <>
      <BoxWrapper>
        {noticeList.map((notice, index) => {
          return (
            <Box key={index}>
              <HostWrapper>
                <HostProfile src="assets/main/surprised.svg" />
                <HostContent>
                  <HostName>{notice.name}</HostName>
                  <Date>{notice.date}</Date>
                </HostContent>
              </HostWrapper>
              <NoticeComment>{notice.comment}</NoticeComment>
            </Box>
          );
        })}
      </BoxWrapper>
    </>
  );
}

const BoxWrapper = styled.div`
  padding: 36px 20px 63px 20px;
`;

const Box = styled.div`
  border-radius: 15px;
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 1px 2px 7px 5px #dfdfdf;
`;

const HostWrapper = styled.div`
  display: flex;
  justify-content: left;
  padding-bottom: 10px;
`;

const HostContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const HostName = styled.div`
  font-weight: bold;
  padding-bottom: 5px;
`;

const Date = styled.div`
  color: #999999;
  font-family: "Nunito", sans-serif;
`;

const HostProfile = styled.img`
  width: 36px;
  height: 36px;
  padding-right: 10px;
`;

const NoticeComment = styled.div`
  line-height: 22px;
  font-family: "Nunito", sans-serif;
`;
