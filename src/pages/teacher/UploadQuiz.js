// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   TextField,
//   Button,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Select,
//   Grid,
//   Box,
//   Typography,
//   Container,
// } from "@mui/material";

// const UploadQuiz = () => {
//   const [questionType, setQuestionType] = useState("mcq");
//   const [questionText, setQuestionText] = useState("");
//   const [options, setOptions] = useState(["", "", "", ""]);
//   const [correctAnswer, setCorrectAnswer] = useState("");
//   const [quizClass, setQuizClass] = useState("");
//   const [subject, setSubject] = useState("");
//   const [quizDate, setQuizDate] = useState(""); // YYYY-MM-DD
//   const [timer, setTimer] = useState(30);
//   const [currentDateTime, setCurrentDateTime] = useState("");

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   useEffect(() => {
//     const now = new Date();
//     const formatted = now.toLocaleString();
//     setCurrentDateTime(formatted);
//   }, []);

//   const handleOptionChange = (index, value) => {
//     const newOptions = [...options];
//     newOptions[index] = value;
//     setOptions(newOptions);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         type: questionType,
//         questionText,
//         options,
//         correctAnswer,
//         classId: quizClass,
//         subject,
//         quizDate,
//         timer,
//       };

//       await axios.post("https://api-emts.onrender.com/api/quiz/create", payload);
//       alert("Quiz Question Added!");

//       setQuestionText("");
//       setOptions(["", "", "", ""]);
//       setCorrectAnswer("");
//       setQuizClass("");
//       setSubject("");
//       setQuizDate("");
//       setTimer(30);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to upload quiz");
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ padding: 4 }}>
//         <Typography variant="h5" gutterBottom>
//           Upload Quiz Question
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <FormControl fullWidth>
//                 <InputLabel>Question Type</InputLabel>
//                 <Select
//                   value={questionType}
//                   onChange={(e) => setQuestionType(e.target.value)}
//                   label="Question Type"
//                 >
//                   <MenuItem value="mcq">MCQ</MenuItem>
//                   <MenuItem value="subjective">Subjective</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Class ID"
//                 value={quizClass}
//                 onChange={(e) => setQuizClass(e.target.value)}
//                 fullWidth
//                 required
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Subject"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//                 fullWidth
//                 required
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Question"
//                 value={questionText}
//                 onChange={(e) => setQuestionText(e.target.value)}
//                 fullWidth
//                 required
//                 multiline
//                 rows={4}
//               />
//             </Grid>

//             {questionType === "mcq" &&
//               options.map((opt, index) => (
//                 <Grid item xs={12} key={index}>
//                   <TextField
//                     label={`Option ${index + 1}`}
//                     value={opt}
//                     onChange={(e) => handleOptionChange(index, e.target.value)}
//                     fullWidth
//                     required
//                   />
//                 </Grid>
//               ))}

//             {questionType === "mcq" && (
//               <Grid item xs={12}>
//                 <TextField
//                   label="Correct Answer"
//                   value={correctAnswer}
//                   onChange={(e) => setCorrectAnswer(e.target.value)}
//                   fullWidth
//                   required
//                 />
//               </Grid>
//             )}

//             <Grid item xs={12}>
//               <TextField
//                 label="Set Timer (minutes)"
//                 type="number"
//                 value={timer}
//                 onChange={(e) => setTimer(e.target.value)}
//                 fullWidth
//                 required
//                 inputProps={{ min: 1 }}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <label>Select Quiz Date</label>
//               <input
//                 type="date"
//                 value={quizDate}
//                 onChange={(e) => setQuizDate(e.target.value)}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   padding: "16.5px 14px",
//                   fontSize: "16px",
//                   border: "1px solid #c4c4c4",
//                   borderRadius: "4px",
//                   marginTop: "8px",
//                 }}
//                 required
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Typography variant="body2" color="textSecondary">
//                 Current Date and Time: {currentDateTime}
//               </Typography>
//             </Grid>

//             <Grid item xs={12}>
//               <Button type="submit" variant="contained" color="primary" fullWidth>
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default UploadQuiz;
