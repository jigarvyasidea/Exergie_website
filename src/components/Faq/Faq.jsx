import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  {
    question: "What is EXERGIE '23 2K23?",
    answer:
      "EXERGIE '23 2k23 is the one of biggest Technical event.",
  },
  {
    question: "What are the Dates and Timings of event?",
    answer:
      "The event will start at 9AM on 11th May to  12th of may ",
  },
  {
    question: "How can I participate in the event?",
    answer:
      "Explore various events on the EXERGIE '23's website and register for the same",
  },
 
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
            <div className={classes.single} onClick={() => toggle(i)}>
              <div className={classes.question}>{ques.question}</div>
              <div
                className={`${
                  clicked === i ? classes.answer : classes.noAnswer
                }`}
              >
                {ques.answer}
              </div>
              <span className={classes.btn}>+</span>
            </div>
          );
        })}

        {/* <div className={classes.single}>
                <div className={classes.question}>How are you?</div>
                <div className={classes.answer}>I am fine</div>
                <span className={classes.btn}>+</span>
            </div> */}
      </div>
    </section>
  );
};

export default Faq;
