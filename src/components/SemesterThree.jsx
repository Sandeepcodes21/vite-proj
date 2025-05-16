import React, { useState, useEffect } from "react";
import axios from "axios";
import syllabusFormat from '../components/template.xlsx';

const VALID_COURSES = ['C++','WEB_DESIGN','JAVA','SOFTWARE ENGINEERING'];

const SemesterTwo = () => {
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);
  const [vsq, setVsq] = useState(10);
  const [sq, setSq] = useState(5);
  const [longQ, setLongQ] = useState(4);
  const [caseQ, setCaseQ] = useState(2);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [isGenerateButtonActive, setIsGenerateButtonActive] = useState(false);

  useEffect(() => {
      document.title = "Semester 3"; // Set the tab name to "Semester 3"
    }, []);
  

  const handleFormatDownload = () => {
    const link = document.createElement('a');
    link.href = syllabusFormat;
    link.download = 'syllabus_format.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubjectChange = (event) => {
    const selectedSubject = event.target.value;
    setSubject(selectedSubject);
    setErrorMessage("");
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    const fileNameWithoutExtension = selectedFile.name.split('.').slice(0, -1).join('.').toUpperCase();
    setFile(selectedFile);
    setFileName(selectedFile.name);

    if (subject && fileNameWithoutExtension !== subject.toUpperCase()) {
      setErrorMessage(`Please upload the relevant file for ${subject}`);
      setIsGenerateButtonActive(false);
    } else {
      setErrorMessage("");
      setIsGenerateButtonActive(true);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFileName("");
    setErrorMessage("");
    setIsGenerateButtonActive(false);
  };

  useEffect(() => {
    if (subject && fileName) {
      const fileNameWithoutExtension = fileName.split('.').slice(0, -1).join('.');
      setIsGenerateButtonActive(fileNameWithoutExtension.toUpperCase() === subject.toUpperCase());
    } else {
      setIsGenerateButtonActive(false);
    }
  }, [subject, fileName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!subject || !file) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("syllabus", file);
    formData.append("vsq_num", vsq);
    formData.append("sq_num", sq);
    formData.append("long_num", longQ);
    formData.append("case_num", caseQ);

    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/generate`, formData, {
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "generated_questions.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating questions:", error);
      alert("Error generating the document. Please try again.");
    }

    setLoading(false);
  };

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      maxWidth: "800px",
      margin: "20px auto",
      backgroundColor: "#f8f9fa",
      borderRadius: "15px",
      boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
    },
    heading: {
      fontSize: "24px",
      marginBottom: "15px",
      color: "#333",
      fontWeight: "bold",
    },
    fileAndButtonContainer: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "15px",
    },
    fileLabel: {
      padding: "8px 12px",
      backgroundColor: "#007bff",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer",
      marginRight: "10px",
      marginBottom: "5px",
    },
    fileInput: {
      display: "none",
    },
    generateButton: {
      padding: "8px 16px",
      fontSize: "16px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "0.3s",
      marginBottom: "5px",
    },
    removeButton: {
      marginTop: "10px",
      padding: "6px 12px",
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    formGroup: {
      marginBottom: "10px",
    },
    input: {
      width: "100%",
      padding: "6px",
      fontSize: "14px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    errorMessage: {
      color: "red",
      marginTop: "10px",
      fontSize: "14px",
    },
    fileNameDisplay: {
      marginLeft: '10px',
      fontSize: '12px',
      color: '#555',
      marginBottom: "5px",
    },
    select: {
      width: "100%",
      padding: "8px",
      fontSize: "14px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    downloadButton: {
      marginTop: "20px",
      padding: "15px 25px",
      backgroundColor:"#e65d82",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
      fontSize: "16px",
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Upload Course Syllabus</h2>

      {errorMessage && <div style={styles.errorMessage}>{errorMessage}</div>}

      <div style={styles.formGroup}>
        <label>Select Subject:</label>
        <select
          value={subject}
          onChange={handleSubjectChange}
          style={styles.select}
        >
          <option value="">Select a subject</option>
          {VALID_COURSES.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.formGroup}>
        <label>Very Short Questions:</label>
        <input
          type="number"
          min="0"
          max="100"
          value={vsq}
          onChange={(e) => setVsq(Math.max(0, Number(e.target.value)))}
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label>Short Questions:</label>
        <input
          type="number"
          min="0"
          max="100"
          value={sq}
          onChange={(e) => setSq(Math.max(0, Number(e.target.value)))}
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label>Long Questions:</label>
        <input
          type="number"
          min="0"
          max="100"
          value={longQ}
          onChange={(e) => setLongQ(Math.max(0, Number(e.target.value)))}
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label>Case Study Questions:</label>
        <input
          type="number"
          min="0"
          max="50"
          value={caseQ}
          onChange={(e) => setCaseQ(Math.max(0, Number(e.target.value)))}
          style={styles.input}
        />
      </div>

      <div style={styles.fileAndButtonContainer}>
        <label htmlFor="file-upload" style={styles.fileLabel}>
          Upload File
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".xlsx"
          onChange={handleFileChange}
          style={styles.fileInput}
        />
        {fileName && <span style={styles.fileNameDisplay}>Selected: {fileName}</span>}
        <button
          onClick={handleSubmit}
          className="btn btn-primary"
          style={styles.generateButton}
          disabled={loading || errorMessage || !file || !subject || !isGenerateButtonActive}
        >
          {loading ? "Generating..." : "Generate Questions"}
        </button>
      </div>

      {file && (
        <button onClick={handleRemoveFile} style={styles.removeButton}>
          Remove File
        </button>
      )}

      <div className="d-inline-block text-center wow fadeIn" data-wow-delay="0.1s">
        <button
          onClick={handleFormatDownload}
          className="btn btn-primary px-5 py-5 text-white btn-border-radius"
          style={styles.downloadButton}
        >
          Download Format
        </button>
      </div>
    </div>
  );
};

export default SemesterTwo;