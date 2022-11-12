import React from "react";
import { BigTextBox, Btn, Container } from "../style";

function BannerText() {
  return (
    <Container>
      <BigTextBox>
        <div className="text-box">
          <h1>My Story</h1>
          <p>
            I create visual concepts, using computer software or by hand, to
            communicate ideas that inspire, inform, and captivate consumers. And
            also visual communication in the form of logos, business cards,
            fliers, promotional materials, and so on.
          </p>
          <Btn>
            <a href="#">View CV</a>
          </Btn>
        </div>
      </BigTextBox>
    </Container>
  );
}

export default BannerText;
