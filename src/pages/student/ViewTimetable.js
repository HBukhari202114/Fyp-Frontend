import React, { useState } from "react";
import axios from "axios";

const ViewTimetable = () => {
    const [classId, setClassId] = useState("");
    const [timetable, setTimetable] = useState(null);

    const handleFetch = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/timetable/${classId}`);
            setTimetable(res.data);
        } catch (err) {
            alert("Error fetching timetable.");
        }
    };

    return (
        <div>
            <h2>Timetable Viewer</h2>
            <input type="text" placeholder="Enter Class ID" onChange={(e) => setClassId(e.target.value)} />
            <button onClick={handleFetch}>Fetch Timetable</button>
            {timetable && (
                <div style={{ marginTop: '20px' }}>
                    <a href={timetable.fileUrl} target="_blank" rel="noreferrer">Download Timetable</a>
                </div>
            )}
        </div>
    );
};

export default ViewTimetable;
