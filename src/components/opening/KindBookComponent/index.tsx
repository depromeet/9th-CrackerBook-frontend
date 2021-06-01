import SearchBoxComponent from "./SearchBoxComponent";
import FavoriteBookComponent from "./FavoriteBookComponent";
import SearchResultComponent from "./SearchResultComponent";
import { useRecoilState, useSetRecoilState } from "recoil";
import { categoryState, nextStepState } from "../../states/opening";
import { studyFormState } from "../../states/studyForm";
import { useEffect } from "react";

export default function KindBookComponent(): JSX.Element {
  const [category] = useRecoilState(categoryState);
  const [studyForm] = useRecoilState(studyFormState);
  const setNextStep = useSetRecoilState(nextStepState);

  useEffect(() => {
    studyForm.book.name === "" ? setNextStep(1) : setNextStep(2);
  });

  return (
    <>
      <SearchBoxComponent />
      {category !== 2 ? <SearchResultComponent /> : <FavoriteBookComponent />}
    </>
  );
}
