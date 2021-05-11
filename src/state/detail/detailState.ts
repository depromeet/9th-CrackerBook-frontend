import { atom } from "recoil";

const ConfirmBoxState = atom<boolean>({
  key: "confirmBoxState",
  default: false,
});

const EnrollConfirmBoxState = atom<boolean>({
  key: "EnrollConfirmBoxState",
  default: false,
});

const LoginBoxState = atom<boolean>({
  key: "LoginBoxState",
  default: false,
});

const CompleteBoxState = atom<boolean>({
  key: "CompleteBoxState",
  default: false,
});

export {
  ConfirmBoxState,
  EnrollConfirmBoxState,
  LoginBoxState,
  CompleteBoxState,
};
