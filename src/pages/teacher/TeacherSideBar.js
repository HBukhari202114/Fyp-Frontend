import * as React from 'react';
import {
    Divider,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import NoteIcon from '@mui/icons-material/Note'; // Importing icon for Diary
import { useSelector } from 'react-redux';

const TeacherSideBar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const sclassName = currentUser.teachSclass;

    const location = useLocation();

    return (
        <>
            <React.Fragment>
                <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon color={location.pathname === "/" || location.pathname === "/Teacher/dashboard" ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton component={Link} to="/Teacher/class">
                    <ListItemIcon>
                        <ClassOutlinedIcon color={location.pathname.startsWith("/Teacher/class") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary={`Class ${sclassName?.sclassName || ''}`} />
                </ListItemButton>

                <ListItemButton component={Link} to="/Teacher/upload-material">
                    <ListItemIcon>
                        <UploadFileIcon color={location.pathname.startsWith("/Teacher/upload-material") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Upload Material" />
                </ListItemButton>

                {/* New Upload Timetable section */}
                <ListItemButton component={Link} to="/Teacher/upload-timetable">
                    <ListItemIcon>
                        <UploadFileIcon color={location.pathname.startsWith("/Teacher/upload-timetable") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Upload Timetable" />
                </ListItemButton>

                {/* New Write Diary section */}
                <ListItemButton component={Link} to="/Teacher/write-diary">
                    <ListItemIcon>
                        <NoteIcon color={location.pathname.startsWith("/Teacher/write-diary") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Write Diary" />
                </ListItemButton>

                <ListItemButton component={Link} to="/chat">
                    <ListItemIcon>
                        <NoteIcon color={location.pathname.startsWith("/chat") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Chatbot" />
                </ListItemButton>

                <ListItemButton component={Link} to="/Teacher/complain">
                    <ListItemIcon>
                        <AnnouncementOutlinedIcon color={location.pathname.startsWith("/Teacher/complain") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Complain" />
                </ListItemButton>
            </React.Fragment>

            <Divider sx={{ my: 1 }} />

            <React.Fragment>
                <ListSubheader component="div" inset>
                    User
                </ListSubheader>

                <ListItemButton component={Link} to="/Teacher/profile">
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon color={location.pathname.startsWith("/Teacher/profile") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>

                <ListItemButton component={Link} to="/logout">
                    <ListItemIcon>
                        <ExitToAppIcon color={location.pathname.startsWith("/logout") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </React.Fragment>
        </>
    );
};

export default TeacherSideBar;
