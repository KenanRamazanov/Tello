import React, { useState } from "react";
import "./Specifications.scss";
import Comment from "./Comment/Comment";

const Specifications = () => {
  const [comment, setComment] = useState(true);

  const handleComment = () => {
    setComment((prev) => !prev);
  };

  // console.log(comment);

  return (
    <div className="spef">
      <div className="title">
        <span onClick={handleComment}>Texniki Xüsusiyyətləri</span>
        <span onClick={handleComment}>Rəylər</span>
      </div>

      {comment ? (
        <div className="all-info">
          <div className="left">
            <div className="indicators">
              <h2>Əsas göstəricilər</h2>
              <ul>
                <li>
                  <span>İstehsalçı</span>

                  <span>Apple</span>
                </li>
                <li>
                  <span>İstehsalçı</span>

                  <span>Apple</span>
                </li>
                <li>
                  <span>İstehsalçı</span>

                  <span>Apple</span>
                </li>
                <li>
                  <span>İstehsalçı</span>

                  <span>Apple</span>
                </li>
              </ul>
            </div>
            <div className="indicators">
              <h2>Əlavə göstəricilər</h2>
              <ul>
                <li>
                  <span>İstehsalçı</span>

                  <span>Apple</span>
                </li>
                <li>
                  <span>İstehsalçı</span>

                  <span>Apple</span>
                </li>
                <li>
                  <span>İstehsalçı</span>

                  <span>Apple</span>
                </li>
                <li>
                  <span>İstehsalçı</span>

                  <span>Apple</span>
                </li>
              </ul>
            </div>
            <div className="indicators">
              <h2>Üstünlüklər</h2>
              <ul>
                <li>
                  <span>İstehsalçı</span>

                  <span>Apple</span>
                </li>
                <li>
                  <span>İstehsalçı</span>

                  <span>Apple</span>
                </li>
                <li>
                  <span>İstehsalçı</span>
                  <span>Apple</span>
                </li>
                <li>
                  <span>İstehsalçı</span>

                  <span>Apple</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <h1>Məhsul haqqında</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              lobortis mi blandit aliquet sed placerat. Gravida nunc adipiscing
              donec aliquet sit. Arcu diam eget sit nunc ac quisque morbi.
              Bibendum commodo eget ac nunc ut. Justo venenatis vitae,
              pellentesque accumsan. Maecenas sed rhoncus amet cursus venenatis,
              ipsum sollicitudin eget risus. Blandit vitae turpis eget arcu leo
              malesuada diam. At semper nunc orci, accumsan, fringilla aliquam.
              Turpis quam tortor nunc, est, sem nunc, lacus. Scelerisque
              adipiscing libero, cras eu, donec nibh. Lacus aliquet pellentesque
              morbi ullamcorper. Cursus tristique viverra et sed semper.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <Comment />
          <Comment />
        </div>
      )}
    </div>
  );
};

export default Specifications;
