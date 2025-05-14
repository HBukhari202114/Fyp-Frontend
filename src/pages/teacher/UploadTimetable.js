import React, { useState } from 'react';
import { Typography, Button, Paper, Alert } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';

const UploadTimetable = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!pdfFile) {
      setError("❌ Please select a PDF file");
      setSuccess('');
      return;
    }

    const formData = new FormData();
    formData.append('timetable', pdfFile);

    try {
      const res = await axios.post('https://api-emts.onrender.com/timetable/upload', formData);
      setSuccess("✅ Timetable uploaded successfully!");
      setError('');
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setError("❌ Failed to upload timetable");
      setSuccess('');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        📅 Upload Class Timetable
      </Typography>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        style={{ margin: '20px 0' }}
      />

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

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
