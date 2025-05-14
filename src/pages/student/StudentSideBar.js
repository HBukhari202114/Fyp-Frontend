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
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DownloadIcon from '@mui/icons-material/Download';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import EventNoteIcon from '@mui/icons-material/EventNote'; // Timetable icon
import DescriptionIcon from '@mui/icons-material/Description'; // Diary icon
import NoteIcon from '@mui/icons-material/Note';

const StudentSideBar = () => {
  const location = useLocation();

  return (
    <>
      <React.Fragment>
        <ListItemButton component={Link} to="/">
          <ListItemIcon>
            <HomeIcon color={location.pathname === '/' || location.pathname === '/Student/dashboard' ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton component={Link} to="/Student/subjects">
          <ListItemIcon>
            <AssignmentIcon color={location.pathname.startsWith('/Student/subjects') ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Subjects" />
        </ListItemButton>

        <ListItemButton component={Link} to="/Student/attendance">
          <ListItemIcon>
            <ClassOutlinedIcon color={location.pathname.startsWith('/Student/attendance') ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Attendance" />
        </ListItemButton>

        <ListItemButton component={Link} to="/Student/complain">
          <ListItemIcon>
            <AnnouncementOutlinedIcon color={location.pathname.startsWith('/Student/complain') ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Complain" />
        </ListItemButton>

        <ListItemButton component={Link} to="/Student/study">
          <ListItemIcon>
            <DownloadIcon color={location.pathname.startsWith('/Student/study') ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Download Study Material" />
        </ListItemButton>

        {/* <ListItemButton component={Link} to="/Student/attempt-quiz">
          <ListItemIcon>
            <DownloadIcon color={location.pathname.startsWith('/Student/attempt-quiz') ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Attempt Quiz" />
        </ListItemButton> */}

        <ListItemButton component={Link} to="/Student/fee-upload">
          <ListItemIcon>
            <ReceiptLongIcon color={location.pathname.startsWith('/Student/fee-upload') ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Fee Upload" />
        </ListItemButton>

         <ListItemButton component={Link} to="/chat">
                            <ListItemIcon>
                                <NoteIcon color={location.pathname.startsWith("/chat") ? 'primary' : 'inherit'} />
                            </ListItemIcon>
                            <ListItemText primary="Chatbot" />
                        </ListItemButton>

         <ListItemButton component={Link} to="/Student/rollno-slip">
          <ListItemIcon>
            <ReceiptLongIcon color={location.pathname.startsWith('/Student/rollno-slip') ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Rollno Slip" />
        </ListItemButton>

        {/* ✅ New: View Timetable */}
        <ListItemButton component={Link} to="/student/timetable">
          <ListItemIcon>
            <EventNoteIcon color={location.pathname.startsWith('/student/timetable') ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="View Timetable" />
        </ListItemButton>

        {/* ✅ New: View Diary */}
        <ListItemButton component={Link} to="/student/diary">
          <ListItemIcon>
            <DescriptionIcon color={location.pathname.startsWith('/student/diary') ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="View Diary" />
        </ListItemButton>
      </React.Fragment>

      <Divider sx={{ my: 1 }} />

      <React.Fragment>
        <ListSubheader component="div" inset>
          User
        </ListSubheader>

        <ListItemButton component={Link} to="/Student/profile">
          <ListItemIcon>
            <AccountCircleOutlinedIcon color={location.pathname.startsWith('/Student/profile') ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>

        <ListItemButton component={Link} to="/logout">
          <ListItemIcon>
            <ExitToAppIcon color={location.pathname.startsWith('/logout') ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </React.Fragment>
    </>
  );
};

export default StudentSideBar;
