import React from "react";
import styled from "styled-components";

//image import
import work_1 from "../Img/work-1.jpg";
import work_2 from "../Img/work-2.jpg";
import work_4 from "../Img/work-3.jpg";
import work_5 from "../Img/work-4.jpg";
import work_6 from "../Img/work-5.jpg";
import work_7 from "../Img/work-6.jpg";
import work_8 from "../Img/work-7.jpg";
import work_9 from "../Img/work-8.jpg";
import work_10 from "../Img/work-9.jpg";
import work_11 from "../Img/work-10.jpg";
import work_12 from "../Img/work-11.jpg";
import work_13 from "../Img/work-12.jpg";
import work_3 from "../Img/work-13.jpg";
import scroll_1 from "../Img/scroll-1.jpg";
import scroll_2 from "../Img/scroll-2.jpg";
import scroll_3 from "../Img/scroll-3.jpg";
import scroll_4 from "../Img/scroll-4.jpg";
import scroll_5 from "../Img/scroll-5.jpg";
import scroll_6 from "../Img/scroll-6.jpg";

function WorksGallery({ works }) {
  return (
    <GalleryBox>
      <GalleryImages>
        <ImageList>
          <li>
            <img src={work_1} alt="works" />
          </li>
          <li>
            <img src={work_2} alt="works" />
          </li>
          <li>
            <img src={work_3} alt="works" />
          </li>
          <li>
            <img src={work_4} alt="works" />
          </li>
          <li>
            <img src={work_5} alt="works" />
          </li>
          <li>
            <img src={work_6} alt="works" />
          </li>
          <li>
            <img src={scroll_1} alt="works" />
          </li>
        </ImageList>
        <ImageList>
          <li>
            <img src={work_7} alt="works" />
          </li>
          <li>
            <img src={work_8} alt="works" />
          </li>
          <li>
            <img src={work_9} alt="works" />
          </li>
          <li>
            <img src={work_10} alt="works" />
          </li>
          <li>
            <img src={work_11} alt="works" />
          </li>
          <li>
            <img src={work_12} alt="works" />
          </li>
        </ImageList>
        <ImageList>
          <li>
            <img src={scroll_2} alt="works" />
          </li>
          <li>
            <img src={scroll_3} alt="works" />
          </li>
          <li>
            <img src={scroll_4} alt="works" />
          </li>
          <li>
            <img src={scroll_5} alt="works" />
          </li>
          <li>
            <img src={scroll_6} alt="works" />
          </li>
        </ImageList>
      </GalleryImages>
    </GalleryBox>
  );
}
const GalleryBox = styled.div`
  display: flex;
  justify-content: center;
`;
const GalleryImages = styled.div`
  padding-top: 3rem;
  @media (min-width: 992px) {
    display: flex;
  }
`;
const ImageList = styled.ul`
  width: 100%;

  li {
    width: 90%;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
`;
export default WorksGallery;
