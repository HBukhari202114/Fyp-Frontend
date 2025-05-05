import React, { useState } from "react";
import axios from "axios";

const ViewDiary = () => {
    const [classId, setClassId] = useState("");
    const [subject, setSubject] = useState("");
    const [entries, setEntries] = useState([]);

    const handleFetch = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/diary/${classId}/${subject}`);
            setEntries(res.data);
        } catch (err) {
            alert("Error fetching diary.");
        }
    };

    return (
        <div>
            <h2>Diary Viewer</h2>
            <input type="text" placeholder="Enter Class ID" onChange={(e) => setClassId(e.target.value)} />
            <input type="text" placeholder="Enter Subject" onChange={(e) => setSubject(e.target.value)} />
            <button onClick={handleFetch}>Fetch Diary</button>
            <ul>
                {entries.map((entry) => (
                    <li key={entry._id}>
                        <strong>{entry.subject}</strong>: {entry.content} — <em>{new Date(entry.date).toLocaleDateString()}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewDiary;
