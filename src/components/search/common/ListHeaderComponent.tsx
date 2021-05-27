import styled from "styled-components";
// import Link from "next/link";

const ListHeadWrapper = styled.div`
  position: relative;
  margin: 10px 20px 10px;
`;
const ListHeadTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  color: #222222;
`;
// const ListHeadDetail = styled.div`
//   position: absolute;
//   z-index: 10;
//   top: 8px;
//   right: 17px;
//   font-size: 14px;
//   color: #999999;
//   cursor: pointer;
// `;
// const DetailLink = styled.div`
//   position: absolute;
//   z-index: 10;
//   top: 7px;
//   right: 0px;
//   font-size: 14px;
//   color: #999999;
//   cursor: pointer;
// `;

export default function ListFooterComponent(props: {
  title: string;
}): JSX.Element {
  return (
    <ListHeadWrapper>
      <ListHeadTitle>{props.title}</ListHeadTitle>
      {/* <ListHeadDetail>전체보기</ListHeadDetail>
      <DetailLink>
        <Link href="/login/setNicname">
          <a>
            <img src="/assets/search/detaillink.svg" />
          </a>
        </Link>
      </DetailLink> */}
    </ListHeadWrapper>
  );
}
