import React from "react";
import "./Comment.scss";
import Star from "../../../../assets/star.svg";
import EmptyStar from "../../../../assets/emptStar.svg";

const Comment = () => {
  return (
    <div className="comments">
      <div className="comment-star">
        <span>4</span>
        <div className="stars">
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={EmptyStar} alt="star" />
        </div>
      </div>

      <div className="comment-content">
        <div className="from">
          <span className="name">Gunel Mammadova</span>
          <span className="day">5 gün əvvəl</span>
        </div>
        <span className="detail"> Yaddaş - 64, Rəng - Qara</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis
          viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit nibh tortor
          sit. Consectetur sit auctor odio quis suspendisse tincidunt quis. Et
          tristique amet aenean nibh porttitor quis aliquam integer. Consectetur
          lacus, volutpat malesuada libero. Sollicitudin libero pharetra a.
        </p>
      </div>
    </div>
  );
};

export default Comment;
