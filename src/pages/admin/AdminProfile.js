import React, { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, updateUser } from '../../redux/userRelated/userHandle';
import { useNavigate } from 'react-router-dom';
import { authLogout } from '../../redux/userRelated/userSlice';
import { Button, Collapse } from '@mui/material';

const AdminProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);
    const address = "Admin";

    const [showTab, setShowTab] = useState(false);
    const buttonText = showTab ? 'Cancel' : 'Edit Profile';

    const [name, setName] = useState(currentUser?.name || '');
    const [email, setEmail] = useState(currentUser?.email || '');
    const [password, setPassword] = useState("");
    const [schoolName, setSchoolName] = useState(currentUser?.schoolName || '');

    const fields = password === "" 
        ? { name, email, schoolName } 
        : { name, email, password, schoolName };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(updateUser(fields, currentUser._id, address));
    };

    const deleteHandler = () => {
        try {
            dispatch(deleteUser(currentUser._id, "Students"));
            dispatch(deleteUser(currentUser._id, address));
            dispatch(authLogout());
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <p><strong>Name:</strong> {currentUser?.name}</p>
            <p><strong>Email:</strong> {currentUser?.email}</p>
            <p><strong>School:</strong> {currentUser?.schoolName}</p>

            <Button variant="contained" color="error" onClick={deleteHandler}>
                Delete
            </Button>
            <Button
                variant="contained"
                sx={styles.toggleButton}
                onClick={() => setShowTab(!showTab)}
            >
                {showTab ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                {buttonText}
            </Button>

            <Collapse in={showTab} timeout="auto" unmountOnExit>
                <div className="register">
                    <form className="registerForm" onSubmit={submitHandler}>
                        <span className="registerTitle">Edit Details</span>

                        <label>Name</label>
                        <input
                            className="registerInput"
                            type="text"
                            placeholder="Enter your name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="name"
                            required
                        />

                        <label>School</label>
                        <input
                            className="registerInput"
                            type="text"
                            placeholder="Enter your school name..."
                            value={schoolName}
                            onChange={(e) => setSchoolName(e.target.value)}
                            autoComplete="organization"
                            required
                        />

                        <label>Email</label>
                        <input
                            className="registerInput"
                            type="email"
                            placeholder="Enter your email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            required
                        />

                        <label>Password</label>
                        <input
                            className="registerInput"
                            type="password"
                            placeholder="Enter your password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="new-password"
                        />

                        <button className="registerButton" type="submit">
                            Update
                        </button>
                    </form>
                </div>
            </Collapse>
        </div>
    );
};

const styles = {
    toggleButton: {
        marginLeft: '10px',
        backgroundColor: "#270843",
        "&:hover": {
            backgroundColor: "#3f1068",
        }
    }
};

export default AdminProfile;
