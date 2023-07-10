import React, { useState } from "react";
import Plus from "../../../assets/plus.svg";

import "./Question.scss";

const Question = ({ question, answers }) => {
  const [answer, setAnswer] = useState(false);

  return (
    <div className="items">
      <div className="item">
        {question}
        <img style={answer ? { transform: "rotate(45deg)" } : null} onClick={() => setAnswer((prev) => !prev)} src={Plus} alt="plus" />
        
      </div>
      {answer && <div className="answer">{answers}</div>}
    </div>
  );
};

export default Question;
