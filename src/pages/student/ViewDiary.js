import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../redux/userRelated/userHandle';

const ViewDiary = () => {
    const dispatch = useDispatch();
    const [classId, setClassId] = useState("");
    const [subject, setSubject] = useState("");
    const [entries, setEntries] = useState([]);

    const { userDetails, currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        if (currentUser?._id) {
            dispatch(getUserDetails(currentUser._id, 'Student'));
        }
    }, [dispatch, currentUser]);

    useEffect(() => {
        if (userDetails) {
            setClassId(userDetails.sclassName?.sclassName || "");
            console.log("userDetails", userDetails);
        }
    }, [userDetails]);

    const handleFetch = async () => {
        try {
            const res = await axios.get(`https://api-emts.onrender.com/diary/${classId}/${subject}`);
            setEntries(res.data);
        } catch (err) {
            console.log(err);
            alert("Error fetching diary.");
        }
    };

    return (
        <>
            <style>{`
                .diary-container {
                  max-width: 700px;
                  margin: 40px auto;
                  padding: 30px;
                  background-color: #fff;
                  border-radius: 10px;
                  border: 1px solid #ddd;
                  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                  font-family: 'Segoe UI', sans-serif;
                }

                .diary-title {
                  font-size: 26px;
                  color: #1976d2;
                  text-align: center;
                  margin-bottom: 30px;
                }

                .form-group {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  gap: 10px;
                  margin-bottom: 20px;
                }

                .input-field {
                  flex: 1;
                  padding: 10px;
                  font-size: 16px;
                  border: 1px solid #ccc;
                  border-radius: 6px;
                }

                .fetch-btn {
                  background-color: #1976d2;
                  color: white;
                  padding: 10px 18px;
                  font-size: 16px;
                  border: none;
                  border-radius: 6px;
                  cursor: pointer;
                  transition: background-color 0.3s ease;
                }

                .fetch-btn:hover {
                  background-color: #1976d2;
                }

                .diary-list {
                  list-style: none;
                  padding: 0;
                }

                .diary-item {
                  padding: 12px;
                  margin-bottom: 10px;
                  border-left: 4px solid #1976d2;
                  background-color: #f9f9f9;
                  border-radius: 6px;
                  font-size: 16px;
                }

                .diary-date {
                  display: block;
                  color: #666;
                  font-size: 14px;
                  margin-top: 4px;
                }
            `}</style>

            <div className="diary-container">
                <h2 className="diary-title">Diary Viewer</h2>

                <div className="form-group">
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Enter Subject"
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <button className="fetch-btn" onClick={handleFetch}>Fetch Diary</button>
                </div>

                <ul className="diary-list">
                    {entries.map((entry) => (
                        <li key={entry._id} className="diary-item">
                            <strong>{entry.subject}</strong>: {entry.content}
                            <span className="diary-date"> — {new Date(entry.date).toLocaleDateString()}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ViewDiary;
