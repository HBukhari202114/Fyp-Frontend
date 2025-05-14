import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewTimetable = () => {
    const [classId, setClassId] = useState("");
    const [timetable, setTimetable] = useState(null);

    const handleFetch = async () => {
        try {
            const res = await axios.get(`https://api-emts.onrender.com/timetable/`);
            setTimetable(res.data.timetables[0].timetable);
        } catch (err) {
            alert("Error fetching timetable.");
        }
    };

    useEffect(()=>{
        handleFetch()
    },[])

    return (
        <div>
            <h2>Timetable Viewer</h2>
            {timetable && (
                <div style={{ marginTop: '20px' }}>
                    <a href={"https://api-emts.onrender.com/"+timetable} download rel="noreferrer">Download Timetable</a>
                </div>
            )}
        </div>
    );
};

export default ViewTimetable;
