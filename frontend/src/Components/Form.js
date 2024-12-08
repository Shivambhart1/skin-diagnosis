import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";
import { CircularProgress } from "@mui/material";
import { DISEASE_DETAILS } from "../values";

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);

  // Handles file input change
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setResponseData(null);
  };

  // Upload and process the file
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    setLoading(true);

    axios
      .post("http://localhost:5000/api/upload", formData)
      .then((response) => {
        const diseaseName = response.data.disease_name;
        setResponseData({
          diseaseName: diseaseName,
          // highlightedImage: `data:image/png;base64,${response.data.highlighted_image}`,
        });
        setLoading(false);
      })
      .catch((error) => {
        setError(`Error Uploading files: ${error}`);
        setLoading(false);
      });
  };

  // Reset the form and state
  const handleReset = () => {
    setSelectedFile(null);
    setResponseData(null);
    setLoading(false);
    setError("");
  };

  // Drag and Drop Handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
      setResponseData(null);
    }
  };

  // Get disease details
  const diseaseDetails = responseData
    ? DISEASE_DETAILS[responseData.diseaseName] || {
        cause: "Detailed cause not available",
        prevention: ["Consult a healthcare professional"],
      }
    : null;

  return (
    <div className={styles.container}>
      <section className={styles.formDiv}>
        <div
          className={`${styles.imageForm} ${dragOver ? styles.dragOver : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className={styles.dropZone}>
            {/* Hidden File Input */}
            <input
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              className={styles.fileInput}
            />

            {/* Label for File Input */}
            {selectedFile ? (
              <p style={{ color: "blue" }}>
                <b>Selected File: {selectedFile.name}</b>
              </p>
            ) : (
              <label htmlFor="fileInput" className={styles.fileLabel}>
                Drag and drop a file here, or <span>click to select</span>
              </label>
            )}

            {/* Display uploaded image */}
            {selectedFile && (
              <div className={styles.imagePreview}>
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Uploaded Preview"
                  className={styles.previewImage}
                />
              </div>
            )}
          </div>

          <div className={styles.formbutton}>
            <button onClick={handleUpload} disabled={!selectedFile}>
              Upload & Process Image
            </button>
          </div>

          {loading && <CircularProgress />}

          {responseData && (
            <div className={styles.resultContainer}>
              <h2>{responseData.diseaseName}</h2>
              {/* <img
                src={responseData.highlightedImage}
                alt="Highlighted Diagnosis"
                className={styles.highlightedImage}
              /> */}

              <div className={styles.diseaseDetails}>
                <h3>Cause</h3>
                <p>{diseaseDetails.cause}</p>

                <h3>Prevention</h3>
                <ul>
                  {diseaseDetails.prevention.map((prev, index) => (
                    <li key={index}>{prev}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Reset Button */}
          <div className={styles.formbutton}>
            <button onClick={handleReset} style={{ backgroundColor: "red" }}>
              Reset
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
