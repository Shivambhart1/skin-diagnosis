import { React, useEffect, useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";
import { CircularProgress } from "@mui/material";

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [responseData, setResponseData] = useState("");
  const [loading, SetLoading] = useState(false);
  const [error, SetError] = useState("");

  const handleFileChange = (e) => {
    //Checking for files being uploaded or not
    console.log(e.target.files[0]);

    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    SetLoading(true);
    axios
      .post("http://localhost:5000/api/upload", formData)
      .then((response) => {
        console.log("File Uploaded succesfully!", response.data);
        setTimeout(() => {
          setResponseData(response.data);
        }, 2000);
        SetLoading(false);
      })
      .catch((error) => {
        SetError(`Error Uploading files : ${error}`);
        console.log("Error Uploading files : ", error);
      });

    const getUserIpAndLocation = async () => {
      try {
        // Fetch IP address
        const ipResponse = await axios.get("https://api.ipify.org?format=json");
        const ip = ipResponse.data.ip;

        const locationResponse = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_XJBPf7qaVJlN6WmyBa446TewIqJ5Z&ipAddress=8.8.8.8`
        );
        const locationData = locationResponse.data;
        console.log("User location data:", locationData);

        return locationData;
      } catch (error) {
        console.error("Error fetching user location:", error);
        return null;
      }
    };
    getUserIpAndLocation();
  };

  return (
    <section className={styles.formDiv}>
      <div className={styles.imageForm}>
        <input type="file" onChange={handleFileChange} />
        <div className={styles.formbutton}>
          <button onClick={handleUpload}>Upload</button>
        </div>
        {loading ? (
          <CircularProgress style={{ alignSelf: "center" }} />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <h1 style={{ color: "black" }}>{responseData}</h1>
        )}
      </div>
    </section>
  );
};

export default Form;
