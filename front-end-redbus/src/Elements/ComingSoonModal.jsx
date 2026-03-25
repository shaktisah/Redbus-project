import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { loginSuccess, addCustomerMongo } from "../Redux/auth/actions";

const ComingSoonModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const mockProfile = {
        profileObj: {
          name: email.split("@")[0].toUpperCase(),
          email: email,
          imageUrl: "https://i.pravatar.cc/150?img=11",
          googleId: "custom-" + Math.random().toString(36).substr(2, 9)
        }
      };
      
      if (!isLogin) {
        setShowWelcome(true);
        setTimeout(() => {
          dispatch(loginSuccess(mockProfile));
          dispatch(addCustomerMongo(mockProfile.profileObj));
          setIsOpen(false);
          setShowWelcome(false);
        }, 1500);
      } else {
        dispatch(loginSuccess(mockProfile));
        dispatch(addCustomerMongo(mockProfile.profileObj));
        setIsOpen(false);
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(8px)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        content: {
          position: "relative",
          background: "rgba(255, 255, 255, 0.95)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          padding: "40px",
          width: "350px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          inset: "auto",
          color: "#333",
          overflow: "hidden"
        },
      }}
    >
      {showWelcome ? (
        <div style={{ padding: "30px 0" }}>
          <div style={{ fontSize: "50px", marginBottom: "10px" }}>🎉</div>
          <h2 style={{ color: "#d84e55", fontWeight: "bold", fontSize: "28px", margin: "10px 0" }}>
            Welcome to redbus!
          </h2>
          <p style={{ color: "#666", fontSize: "16px" }}>Your account has been created.</p>
        </div>
      ) : (
        <>
          <h2 style={{ margin: "0 0 10px 0", color: "#d84e55", fontWeight: "800", fontSize: "24px" }}>redBus</h2>
          <p style={{ color: "#666", marginBottom: "30px", fontSize: "14px" }}>
            {isLogin ? "Sign in to manage your bookings." : "Register to start your journey with us."}
          </p>
          
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: "14px 15px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                backgroundColor: "white",
                fontSize: "14px",
                fontWeight: "bold"
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                padding: "14px 15px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                backgroundColor: "white",
                fontSize: "14px",
                fontWeight: "bold"
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#d84e55",
                color: "white",
                border: "none",
                padding: "14px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "10px",
                transition: "background 0.2s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#c0392b"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#d84e55"}
            >
              {isLogin ? "LOG IN" : "REGISTER"}
            </button>
          </form>

          <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span 
              onClick={() => setIsLogin(!isLogin)}
              style={{ color: "#d84e55", cursor: "pointer", fontWeight: "bold" }}
            >
              {isLogin ? "Register" : "Log In"}
            </span>
          </div>

          <button 
            onClick={() => setIsOpen(false)}
            style={{
              background: "none",
              border: "none",
              color: "#999",
              marginTop: "15px",
              cursor: "pointer",
              fontSize: "14px",
              textDecoration: "underline"
            }}
          >
            Cancel
          </button>
        </>
      )}
    </Modal>
  );
};

export default ComingSoonModal;
