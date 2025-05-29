import { useState } from "react";
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

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setResponseData(null);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    setLoading(true);

    setTimeout(() => {
      axios
        .post("http://localhost:5000/api/upload", formData)
        .then((response) => {
          setResponseData({
            diseaseName: response.data.disease_name,
            predictions: response.data.predictions,
          });
        })
        .catch((error) => {
          setError(`Error Uploading files: ${error}`);
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        })
    }, 5000)
  };

  const handleReset = () => {
    setSelectedFile(null);
    setResponseData(null);
    setLoading(false);
    setError("");
  };

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
            <input
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              className={styles.fileInput}
            />

            {selectedFile ? (
              <p style={{ color: "blue" }}>
                <b>Selected File: {selectedFile.name}</b>
              </p>
            ) : (
              <label htmlFor="fileInput" className={styles.fileLabel}>
                Drag and drop a file here, or <span>click to select</span>
              </label>
            )}

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
            <button onClick={handleUpload} disabled={!selectedFile || loading}>
              {loading ? (
                <>
                  <CircularProgress style={{ width: "16px", height: "16px", color: "white" }} />
                  Uploading
                </>
              ) : (
                "Upload & process image"
              )}
            </button>
          </div>

          {responseData && (
            <div className={styles.resultContainer}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{
                    color: "green",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  (Predicted Disease) :
                </h1>
                <h2> {error || responseData.diseaseName}</h2>
              </div>
              <div className={styles.predictions}>
                <h3>Prediction array: [{responseData.predictions.join(", ")}]</h3>
              </div>

              <div className={styles.diseaseDetails}>
                <h3>Cause</h3>
                <p>{diseaseDetails.cause}</p>

                <h3>Management</h3>
                <ul>
                  {diseaseDetails?.management.map((prev, index) => (
                    <li key={index}>{prev}</li>
                  ))}
                </ul>

                <h3>Symptoms</h3>
                <ul>
                  {diseaseDetails?.symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                  ))}
                </ul>

                <h3>Treatment</h3>
                <ul>
                  {diseaseDetails?.treatment.map((treatment, index) => (
                    <li key={index}>{treatment}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className={styles.formbutton}>
            <button onClick={handleReset} style={{ backgroundColor: "red" }} disabled={!responseData}>
              Reset
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
