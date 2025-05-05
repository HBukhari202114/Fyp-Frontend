import React, { useState } from 'react';
import { Typography, TextField, Button, Paper, Alert } from '@mui/material';
import axios from 'axios';

const WriteDiary = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');  // State for error message
  const [success, setSuccess] = useState('');  // State for success message

  const handleDiarySubmit = async () => {
    if (!subject || !message) return alert("All fields are required!");

    try {
      const res = await axios.post('http://localhost:5000/create-diary', {
        subject,
        message,
      });
      setSuccess("✅ Diary entry created successfully!");  // Success message
      setError('');  // Clear any previous error
      console.log(res.data);
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error(error);
      setError("❌ Failed to submit diary");  // Error message
      setSuccess('');  // Clear any previous success message
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        📝 Write Diary Entry
      </Typography>
      <TextField
        fullWidth
        label="Subject Name"
        variant="outlined"
        sx={{ my: 2 }}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <TextField
        fullWidth
        label="Diary Message"
        multiline
        rows={6}
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {/* Conditionally render success alert */}
      {success && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {success}
        </Alert>
      )}
      {/* Conditionally render error alert */}
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
      <Button
        variant="contained"
        color="success"
        sx={{ mt: 3 }}
        onClick={handleDiarySubmit}
      >
        Submit Diary
      </Button>
    </Paper>
  );
};

export default WriteDiary;
