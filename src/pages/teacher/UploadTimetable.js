import React, { useState } from 'react';
import {  Typography, Button,  Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';

const UploadTimetable = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!pdfFile) return alert("Please select a PDF file");

    const formData = new FormData();
    formData.append('pdf', pdfFile);

    try {
      const res = await axios.post('http://localhost:5000/upload-timetable', formData);
      alert("✅ Timetable uploaded successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to upload timetable");
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        📅 Upload Class Timetable
      </Typography>
      <input type="file" accept="application/pdf" onChange={handleFileChange} style={{ margin: '20px 0' }} />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        startIcon={<CloudUploadIcon />}
      >
        Upload PDF
      </Button>
    </Paper>
  );
};

export default UploadTimetable;
