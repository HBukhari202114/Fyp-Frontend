import { useState } from 'react';
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import StudentSideBar from './StudentSideBar';
import { Navigate, Route, Routes } from 'react-router-dom';

import StudentHomePage from './StudentHomePage';
import StudentProfile from './StudentProfile';
import StudentSubjects from './StudentSubjects';
import ViewStdAttendance from './ViewStdAttendance';
import StudentComplain from './StudentComplain';
import StudentStudy from './StudyMaterial';
import FeeUpload from './FeeUpload';
import Logout from '../Logout';
import ViewTimetable from './ViewTimetable';
import ViewDiary from './ViewDiary';

import AccountMenu from '../../components/AccountMenu';
import { AppBar, Drawer } from '../../components/styles';
import RollNoSlip from './rollnoSlip';
import AttemptQuiz from './AttemptQuiz';
import Chatbot from '../ChatBot';

const StudentDashboard = () => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar open={open} position='absolute'>
                    <Toolbar sx={{ pr: '24px' }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Student Dashboard
                        </Typography>
                        <AccountMenu />
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    open={open}
                    sx={open ? styles.drawerStyled : styles.hideDrawer}
                >
                    <Toolbar sx={styles.toolBarStyled}>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <StudentSideBar />
                    </List>
                </Drawer>
                <Box component="main" sx={styles.boxStyled}>
                    <Toolbar />
                    <Routes>
                        <Route path="/" element={<StudentHomePage />} />
                         <Route path="/chat" element={<Chatbot />} />
                        <Route path="*" element={<Navigate to="/" />} />
                        <Route path="/Student/dashboard" element={<StudentHomePage />} />
                        <Route path="/Student/profile" element={<StudentProfile />} />
                        <Route path="/student/fee-upload" element={<FeeUpload />} />
                        <Route path="/Student/subjects" element={<StudentSubjects />} />
                        <Route path="/Student/attendance" element={<ViewStdAttendance />} />
                        <Route path="/Student/complain" element={<StudentComplain />} />
                        <Route path="/Student/study" element={<StudentStudy />} />
                        <Route path="/student/timetable" element={<ViewTimetable />} />
                        <Route path="/student/diary" element={<ViewDiary />} />
                        <Route path="/student/rollno-slip" element={<RollNoSlip />} />
                        <Route path="/student/attempt-quiz" element={<AttemptQuiz />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </Box>
            </Box>

            {/* WhatsApp Chat Button */}
            <a
                href="https://wa.me/9231467933547?text=Hello%20Admin%2C%20I%20need%20help%20regarding%20the%20portal"
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
            >
                <img
                    src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                    alt="Chat on WhatsApp"
                    style={{ width: '60px', height: '60px' }}
                />
            </a>
        </>
    );
};

export default StudentDashboard;

const styles = {
    boxStyled: {
        backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    toolBarStyled: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
    },
    drawerStyled: {
        display: "flex"
    },
    hideDrawer: {
        display: 'flex',
        '@media (max-width: 600px)': {
            display: 'none',
        },
    },
};
