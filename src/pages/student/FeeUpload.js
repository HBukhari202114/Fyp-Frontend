import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Paper
} from '@mui/material';

const FeeUpload = () => {
  const [voucher, setVoucher] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (e) => {
    setVoucher(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!voucher) {
      setUploadMessage('Please select a fee voucher file.');
      return;
    }

    // Prepare form data for API
    const formData = new FormData();
    formData.append('voucher', voucher);
    formData.append('amount', '23000');

    // TODO: Replace with actual backend endpoint
    fetch('https://api-emts.onrender.com/api/student/upload-fee', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setUploadMessage(data.message || 'Uploaded successfully.');
      })
      .catch(() => {
        setUploadMessage('Error uploading. Please try again.');
      });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Fee Voucher Upload
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Total Fee: Rs. 23,000</Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            💳 <b>Bank Transfer (UBL)</b><br />
            Account Title: <b>EMTS SCHOOL</b><br />
            Account #: <b>12345678901234</b><br />
            IBAN: <b>PK65UNIL0100000000001234</b>
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            📲 <b>JazzCash</b><br />
            Number: <b>0300-1234567</b><br />
            CNIC: <b>35202-1234567-8</b>
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              type="file"
              inputProps={{ accept: 'image/*,.pdf' }}
              onChange={handleFileChange}
            />

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Upload Voucher
            </Button>
          </Box>

          {uploadMessage && (
            <Typography color="primary" sx={{ mt: 2 }}>
              {uploadMessage}
            </Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default FeeUpload;
