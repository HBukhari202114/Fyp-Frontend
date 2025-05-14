import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useDispatch, useSelector } from 'react-redux';
import { getSubjectList } from '../../redux/sclassRelated/sclassHandle';
import { getUserDetails } from '../../redux/userRelated/userHandle';

const RollNoSlip = () => {
  const [slip, setSlip] = useState([]);
  const dispatch = useDispatch();
  const { subjectsList } = useSelector((state) => state.sclass);
  const { userDetails, currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser?._id) {
      dispatch(getUserDetails(currentUser._id, 'Student'));
    }
  }, [dispatch, currentUser]);

  useEffect(() => {
    if (userDetails) {
      setSlip(userDetails.examResult || []);
    }
  }, [userDetails]);

  useEffect(() => {
    if (currentUser?.sclassName?._id && subjectsList.length === 0) {
      dispatch(getSubjectList(currentUser.sclassName._id, 'ClassSubjects'));
    }
  }, [slip, dispatch, currentUser, subjectsList]);

  const generatePDF = () => {
    if (!userDetails || !slip.length) return;

    const doc = new jsPDF();
    doc.text('EMTS', 20, 20);
    doc.text(`Name: ${userDetails.name}`, 20, 30);
    doc.text(`Roll No: ${userDetails.rollNum}`, 20, 40);
    doc.text(`Class: ${userDetails.sclassName?.sclassName || ''}`, 20, 50);

    const rows = slip.map((sub, i) => [i + 1, sub.subName?.subName || '']);

    autoTable(doc, {
      startY: 60,
      head: [['#', 'Subject']],
      body: rows,
    });

    doc.save('RollNoSlip.pdf');
  };

  if (!slip.length) return <div className="loading">Loading...</div>;

  return (
    <>
      <div className="slip-container">
        <h1 className="title">Examination Roll No Slip</h1>

        <div className="info">
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Roll No:</strong> {userDetails.rollNum}</p>
          <p><strong>Class:</strong> {userDetails.sclassName?.sclassName}</p>
        </div>

        <table className="slip-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {slip.map((sub, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{sub.subName?.subName}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="download-btn" onClick={generatePDF}>
          Download PDF
        </button>
      </div>

      <style>{`
        .slip-container {
          max-width: 800px;
          margin: 50px auto;
          padding: 30px;
          border-radius: 12px;
          background-color: #ffffff;
          border: 1px solid #ddd;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
        }

        .title {
          text-align: center;
          color: #1976d2;
          font-size: 28px;
          margin-bottom: 30px;
        }

        .info p {
          font-size: 18px;
          margin: 5px 0;
        }

        .slip-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          font-size: 16px;
        }

        .slip-table th,
        .slip-table td {
          border: 1px solid #ccc;
          padding: 10px;
          text-align: center;
        }

        .slip-table th {
          background-color: #f0f0f0;
          color: #333;
        }

        .slip-table tr:hover {
          background-color: #f9f9f9;
        }

        .download-btn {
          margin-top: 30px;
          background-color: #1976d2;
          color: white;
          padding: 12px 24px;
          border: none;
          font-size: 16px;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .download-btn:hover {
          background-color: #e36204;
        }

        .loading {
          text-align: center;
          font-size: 18px;
          color: #666;
          margin-top: 50px;
        }
      `}</style>
    </>
  );
};

export default RollNoSlip;
