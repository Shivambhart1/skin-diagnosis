import React from "react";
import styles from "./DescriptionContent.module.css";
import Form from "./Form";

const description = {
  description:
    "This is a website for getting a preliminary diagnosis. This has been made completely on ReactJS with HTML and CSS too. You can just upload the image of your skin and get the detected disease within seconds.Apart from the diagnosis, there are other options such as SkinCare Routine, Nearby Dermatologists and Donate to Charity etc.",
};

const DescriptionContent = () => {
  return (
    <>
      <section className={styles.descriptioncontentdiv}>
        <div className={styles.twodivs}>
          <div className={styles.title}>
            <h1
              style={{
                fontSize: "40px",
                position: "relative",
                top: "14px",
                flexFlow: "column",
              }}
            >
              Welcome!
            </h1>
            <div style={{ maxWidth: "400px" }}>
              <p
                style={{
                  fontSize: "21px",
                  lineBreak: "normal",
                  lineHeight: "30px",
                  overflow: "hidden",
                  wordWrap: "break-word",
                }}
              >
                {description.description}
              </p>
            </div>
          </div>
          <div className={styles.diagnosissection}>
            <div
              style={{
                display: "flex",
              }}
            >
              <h2
                style={{
                  lineHeight: "2rem",
                  fontSize: "1.5rem",
                  textAlign: "center",
                }}
              >
                Our Goal
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <p>idsfofjieiofjsfoijeij</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DescriptionContent;
