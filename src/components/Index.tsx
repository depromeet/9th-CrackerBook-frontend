import {MainContainer, MobileTitle, NextDiv, KakaoLoginBtn, GoMainBtn} from '../styles/indexStyle';

export default function Component(): JSX.Element {
    return (
        <MainContainer>
            <MobileTitle>
                CRACKER BOOK
            </MobileTitle>
            <NextDiv>
                <div>
                    <KakaoLoginBtn>
                        카카오로 로그인
                    </KakaoLoginBtn>
                </div>
                <GoMainBtn>
                    서비스 둘러보기 &gt;
                </GoMainBtn>
            </NextDiv>
        </MainContainer>
    );
}
