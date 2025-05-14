// import React, { useState, useEffect } from 'react';
// import { Box, Button, Typography, TextField, Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// const AttemptQuiz = () => {
//     const [quizData, setQuizData] = useState([]); // State to store quiz questions and answers
//     const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes in seconds
//     const [videoRecording, setVideoRecording] = useState(false);
//     const [answers, setAnswers] = useState([]);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);
//     const [comments, setComments] = useState('');
//     const navigate = useNavigate();

//     // Sample quiz questions (to simulate backend response)
//     const sampleQuizData = [
//         {
//             id: 1,
//             question: 'What is 2 + 2?',
//             options: ['3', '4', '5', '6'],
//             correctAnswer: '4',
//         },
//         {
//             id: 2,
//             question: 'Which color is the sky?',
//             options: ['Blue', 'Red', 'Green', 'Yellow'],
//             correctAnswer: 'Blue',
//         },
//         {
//             id: 3,
//             question: 'What is the capital of France?',
//             options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
//             correctAnswer: 'Paris',
//         },
//     ];

//     // Commented out to avoid eslint warning
//     // useEffect(() => {
//     //     const fetchQuizData = async () => {
//     //         try {
//     //             // Simulate API call (replace with actual endpoint)
//     //             setQuizData(sampleQuizData);
//     //             setIsLoading(false);
//     //         } catch (err) {
//     //             console.error("Error fetching quiz data", err);
//     //             setIsLoading(false);
//     //         }
//     //     };

//     //     fetchQuizData();
//     // }, []); // Empty array because sampleQuizData is constant

//     // Timer countdown logic
//     useEffect(() => {
//         if (timeRemaining === 0 || isSubmitting) return;

//         const timer = setInterval(() => {
//             setTimeRemaining((prevTime) => prevTime - 1);
//         }, 1000);

//         return () => clearInterval(timer);
//     }, [timeRemaining, isSubmitting]);

//     // Handle answer change
//     const handleAnswerChange = (index, selectedOption) => {
//         const newAnswers = [...answers];
//         newAnswers[index] = selectedOption;
//         setAnswers(newAnswers);
//     };

//     // Handle video recording start/stop
//     const handleVideoRecording = () => {
//         setVideoRecording(!videoRecording);
//     };

//     // Request camera permission
//     const requestCameraPermission = async () => {
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//             // Handle successful camera permission (e.g., display video stream)
//             console.log('Camera permission granted:', stream);
//         } catch (error) {
//             console.error('Camera permission denied:', error);
//             alert('Camera permission is required for video recording.');
//         }
//     };

//     // Handle comment change
//     const handleCommentChange = (e) => {
//         setComments(e.target.value);
//     };

//     // Handle quiz submission
//     const handleSubmit = async () => {
//         setIsSubmitting(true);

//         const payload = {
//             answers,
//             comments,
//         };

//         try {
//             // Simulate API call (replace with actual backend endpoint for quiz submission)
//             // await axios.post('https://api-emts.onrender.com/api/quiz/submit', payload);
//             alert('Quiz submitted successfully!');
//             navigate('/quiz-result'); // Redirect to results page
//         } catch (err) {
//             console.error('Error submitting quiz', err);
//             alert('Failed to submit quiz');
//         }
//     };

//     // If quiz is loading, display a loading message
//     if (isLoading) {
//         return <Typography>Loading quiz...</Typography>;
//     }

//     return (
//         <Box sx={{ p: 4 }}>
//             <Typography variant="h4" gutterBottom>Attempt Quiz</Typography>

//             {/* Timer */}
//             <Box sx={{ mb: 4 }}>
//                 <Typography variant="h6">
//                     Time Remaining: {Math.floor(timeRemaining / 60)}:{timeRemaining % 60}
//                 </Typography>
//             </Box>

//             {/* Quiz Questions */}
//             <Box sx={{ mb: 4 }}>
//                 {quizData.map((question, index) => (
//                     <Box key={index} sx={{ mb: 2 }}>
//                         <Typography variant="body1">{question.question}</Typography>
//                         <Grid container spacing={2}>
//                             {question.options.map((option, i) => (
//                                 <Grid item xs={6} key={i}>
//                                     <Button
//                                         variant={answers[index] === option ? 'contained' : 'outlined'}
//                                         fullWidth
//                                         onClick={() => handleAnswerChange(index, option)}
//                                     >
//                                         {option}
//                                     </Button>
//                                 </Grid>
//                             ))}
//                         </Grid>
//                     </Box>
//                 ))}
//             </Box>

//             {/* Video Recording */}
//             <Box sx={{ mb: 4 }}>
//                 <Button
//                     variant="contained"
//                     color={videoRecording ? "error" : "primary"}
//                     onClick={handleVideoRecording}
//                     fullWidth
//                 >
//                     {videoRecording ? "Stop Video" : "Start Video"}
//                 </Button>

//                 {/* Request camera permission */}
//                 <Button
//                     variant="contained"
//                     onClick={requestCameraPermission}
//                     fullWidth
//                     sx={{ mt: 2 }}
//                 >
//                     Request Camera Permission
//                 </Button>

//                 {/* Simulated video preview (you can integrate actual video recording here) */}
//                 {videoRecording && (
//                     <Box sx={{ mt: 2, border: '1px solid #ccc', padding: 2 }}>
//                         <Typography>Video Recording in Progress...</Typography>
//                     </Box>
//                 )}
//             </Box>

//             {/* Comments Section */}
//             <Box sx={{ mb: 4 }}>
//                 <TextField
//                     label="Your Comments (Optional)"
//                     variant="outlined"
//                     fullWidth
//                     multiline
//                     rows={4}
//                     value={comments}
//                     onChange={handleCommentChange}
//                 />
//             </Box>

//             {/* Submit Button */}
//             <Box>
//                 <Button
//                     variant="contained"
//                     color="secondary"
//                     onClick={handleSubmit}
//                     fullWidth
//                     disabled={isSubmitting || timeRemaining === 0}
//                 >
//                     Submit Quiz
//                 </Button>
//             </Box>
//         </Box>
//     );
// };

// export default AttemptQuiz;
