import React from "react";
import styles from "./DescriptionContent.module.css";
import Form from "./Form";

const DescriptionContent = () => {
  return (
    <>
      <section className={styles.descriptioncontentdiv}>
        <div className="form">
          <Form />
        </div>
      </section>
    </>
  );
};

export default DescriptionContent;
