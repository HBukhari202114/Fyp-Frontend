import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const askBot = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("https://api-emts.onrender.com/api/chatbot", {
        prompt: input,
      });
      setReply(res.data.reply);
    } catch (err) {
      setReply("Sorry, something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ask EMTS Chatbot</h2>

      <div style={styles.inputGroup}>
        <input
          style={styles.input}
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button style={styles.button} onClick={askBot} disabled={loading}>
          {loading ? "Thinking..." : "Ask"}
        </button>
      </div>

      <div style={styles.replyBox}>
        <p style={styles.reply}>{reply || "Ask me something!"}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    border: "1px solid #ddd",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Segoe UI', sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    color: "#1976d2",
    marginBottom: "20px",
  },
  inputGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  button: {
    backgroundColor: "#1976d2",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  replyBox: {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "6px",
    border: "1px solid #eee",
  },
  reply: {
    fontSize: "16px",
    color: "#333",
    marginTop: "10px",
  },
};

export default Chatbot;
