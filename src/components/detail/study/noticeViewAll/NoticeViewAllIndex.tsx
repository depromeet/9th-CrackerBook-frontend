import styled from "styled-components";
import {NoticeHeader} from "./NoticeHeader";
import {Notice} from "./Notice";

export function NoticeViewAllIndex(): JSX.Element {

    return (
        <Wrapper>
            <NoticeHeader/>
            <Notice />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: #F1F1F3;
  min-height: 100vh;
`;
