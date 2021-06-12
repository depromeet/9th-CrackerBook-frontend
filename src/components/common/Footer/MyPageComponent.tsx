import { ButtomWrapper, ButttomImg, Text } from "./FooterIndex";
import { useState } from "react";
import { LoginConfirm } from "../../detail/confirmStudy/ConfirmStudy";
import { loginCheck } from "../../../service/loginService";

export default function MyPageComponent(): JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <ButtomWrapper>
      <ButttomImg
        src="/assets/main/myPage.svg"
        onClick={() => loginCheck(setOpenModal, "profile?id=1")}
      />
      {openModal && <LoginConfirm setOpenModal={setOpenModal} />}
      <Text>마이페이지</Text>
    </ButtomWrapper>
  );
}
