import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubjectList } from '../../redux/sclassRelated/sclassHandle';
import {
    Box,
    Button,
    Typography,
    MenuItem,
    InputLabel,
    FormControl,
    Select,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Divider,
    Alert,
    CircularProgress,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const StudentStudy = () => {
    const dispatch = useDispatch();
    const { subjectsList, error } = useSelector((state) => state.sclass);  
    const { currentUser } = useSelector(state => state.user);
    const [subject, setSubject] = useState('');
    const [studyMaterials, setStudyMaterials] = useState([]);
    const [isDownloading, setIsDownloading] = useState(false);  
    const [downloadError, setDownloadError] = useState('');  

    useEffect(() => {
        
        if (currentUser._id) {
            dispatch(getSubjectList(currentUser._id, "AllSubjects"));
        }
    }, [dispatch, currentUser._id]);

    const handleDownload = (fileUrl) => {
        
        setIsDownloading(true);
        setDownloadError('');

        
        setTimeout(() => {
            
            setIsDownloading(false);
            setDownloadError('Network error occurred while downloading the file.'); 
        }, 5000); 

        
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileUrl.split('/').pop();
        link.click();
    };

    const handleSubjectChange = (event) => {
        const selectedSubject = event.target.value;
        setSubject(selectedSubject);

        
        
        const materials = [
            { title: "Material 1", fileUrl: "https://example.com/material1.pdf" },
            { title: "Material 2", fileUrl: "https://example.com/material2.pdf" },
            { title: "Material 3", fileUrl: "https://example.com/material3.pdf" },
        ];
        setStudyMaterials(materials); 
    };

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
                Download Study Material
            </Typography>

            <FormControl fullWidth margin="normal">
                <InputLabel id="subject-select-label">Subject</InputLabel>
                <Select
                    labelId="subject-select-label"
                    value={subject}
                    label="Subject"
                    onChange={handleSubjectChange}
                >
                    {subjectsList && subjectsList.length > 0 ? (
                        subjectsList.map((subject) => (
                            <MenuItem key={subject._id} value={subject._id}>
                                {subject.subName} {/* Assuming `subName` is the name of the subject */}
                            </MenuItem>
                        ))
                    ) : (
                        <MenuItem disabled>No subjects available</MenuItem>
                    )}
                </Select>
            </FormControl>

            {studyMaterials.length > 0 ? (
                <List sx={{ mt: 2 }}>
                    {studyMaterials.map((material, index) => (
                        <div key={index}>
                            <ListItem>
                                <ListItemText primary={material.title} />
                                <IconButton
                                    edge="end"
                                    color="primary"
                                    onClick={() => handleDownload(material.fileUrl)}
                                    disabled={isDownloading}
                                >
                                    {isDownloading ? (
                                        <CircularProgress size={24} color="primary" />
                                    ) : (
                                        <DownloadIcon />
                                    )}
                                </IconButton>
                            </ListItem>
                            {index < studyMaterials.length - 1 && <Divider />}
                        </div>
                    ))}
                </List>
            ) : (
                <Typography variant="body1" sx={{ mt: 2 }}>
                    No study materials available for Listed subjects.
                </Typography>
            )}

            {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                    {error}
                </Alert>
            )}

            {downloadError && (
                <Alert severity="error" sx={{ mt: 2 }}>
                    {downloadError}
                </Alert>
            )}
        </Box>
    );
};

export default StudentStudy;
