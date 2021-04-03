import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function ItemList() {
  const [dataList, setDataList] = useState([]);
  const apiUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  const ImgDiv = styled.div`
    width: 100%;
  `;

  async function getData() {
    // tslint:disable-next-line:no-shadowed-variable
    const getData = await axios.get(apiUrl);
    setDataList(getData.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ImgDiv>
      {dataList.map((data) => {
        return (
          <>
            <img src={data.image_link} alt="이미지 없음" />;
          </>
        );
      })}
    </ImgDiv>
  );
}
