import { React, useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [responseData, setResponseData] = useState("");

  const handleFileChange = (e) => {
    //Checking for files being uploaded or not
    console.log(e.target.files[0]);

    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("http://localhost:5000/api/upload", formData)
      .then((response) => {
        console.log("File Uploaded succesfully!", response.data);
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log("Error Uploading files : ", error);
      });
  };

  return (
    <section className={styles.formDiv}>
      <div className={styles.imageForm}>
        <input type="file" onChange={handleFileChange} />
        <div className={styles.formbutton}>
          <button onClick={handleUpload}>Upload</button>
        </div>
        {responseData && <h3>{responseData}</h3>}
      </div>
    </section>
  );
};

export default Form;
