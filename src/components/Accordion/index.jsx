import "./style/style.css";
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
