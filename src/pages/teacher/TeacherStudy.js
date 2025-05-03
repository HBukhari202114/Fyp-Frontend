import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    MenuItem,
    InputLabel,
    FormControl,
    Select
} from '@mui/material';

const TeacherStudy = () => {
    const [subject, setSubject] = useState('');
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');

    const handleUpload = () => {
        // Placeholder: handle uploading logic
        console.log({ title, subject, file });
        alert("Study material uploaded successfully!");
    };

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
                Upload Study Material
            </Typography>

            <TextField
                label="Title"
                fullWidth
                margin="normal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <FormControl fullWidth margin="normal">
                <InputLabel id="subject-select-label">Subject</InputLabel>
                <Select
                    labelId="subject-select-label"
                    value={subject}
                    label="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                >
                    <MenuItem value="Math">FYP</MenuItem>
                    <MenuItem value="Science">Routing</MenuItem>
                    {/* <MenuItem value="English">English</MenuItem> */}
                    {/* Add more subjects as needed */}
                </Select>
            </FormControl>

            <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{ mt: 2 }}
            >
                Upload File
                <input
                    type="file"
                    hidden
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </Button>

            <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
                onClick={handleUpload}
                disabled={!title || !subject || !file}
            >
                Submit
            </Button>
        </Box>
    );
};

export default TeacherStudy;

// /* import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getSubjectList } from '../../../redux/sclassRelated/sclassHandle';
// import {
//     Box,
//     Button,
//     TextField,
//     Typography,
//     MenuItem,
//     InputLabel,
//     FormControl,
//     Select
// } from '@mui/material';

// const TeacherStudy = () => {
//     const dispatch = useDispatch();
//     const { subjectsList } = useSelector((state) => state.sclass);  // Access subjectsList from the Redux store
//     const { currentUser } = useSelector(state => state.user);

//     const [subject, setSubject] = useState('');
//     const [file, setFile] = useState(null);
//     const [title, setTitle] = useState('');

//     useEffect(() => {
//         // Fetch the subjects when the component mounts
//         dispatch(getSubjectList(currentUser._id, "AllSubjects"));
//     }, [dispatch, currentUser._id]);

//     const handleUpload = () => {
//         // Placeholder: handle uploading logic
//         console.log({ title, subject, file });
//         alert("Study material uploaded successfully!");
//     };

//     return (
//         <Box sx={{ p: 4 }}>
//             <Typography variant="h5" gutterBottom>
//                 Upload Study Material
//             </Typography>

//             <TextField
//                 label="Title"
//                 fullWidth
//                 margin="normal"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//             />

//             <FormControl fullWidth margin="normal">
//                 <InputLabel id="subject-select-label">Subject</InputLabel>
//                 <Select
//                     labelId="subject-select-label"
//                     value={subject}
//                     label="Subject"
//                     onChange={(e) => setSubject(e.target.value)}
//                 >
//                     {subjectsList && subjectsList.length > 0 ? (
//                         subjectsList.map((subject) => (
//                             <MenuItem key={subject._id} value={subject._id}>
//                                 {subject.subName} {/* Assuming `subName` is the name of the subject */}
//                                 </MenuItem>
//                             ))
//                         ) : (
//                             <MenuItem disabled>No subjects available</MenuItem>
//                         )}
//                     </Select>
//                 </FormControl>
    
//                 <Button
//                     variant="outlined"
//                     component="label"
//                     fullWidth
//                     sx={{ mt: 2 }}
//                 >
//                     Upload File
//                     <input
//                         type="file"
//                         hidden
//                         onChange={(e) => setFile(e.target.files[0])}
//                     />
//                 </Button>
    
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     sx={{ mt: 3 }}
//                     onClick={handleUpload}
//                     disabled={!title || !subject || !file}
//                 >
//                     Submit
//                 </Button>
//             </Box>
//         );
//     };
    
//     export default TeacherStudy;
// */    