import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import Loader from "react-loader-spinner";
const fs = require("fs");
const path = `./.env`;
const vars = `
REACT_APP_CHAT_ENGINE_PROJECT_ID=${process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}\n
REACT_APP_CHAT_ENGINE_PROJECT_ID=${process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY}
`;
fs.writeFileSync(path, vars);

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
    window.location.reload();
  };
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpeg", { type: "image/jpeg" });
  };
  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users", formdata, {
              headers: {
                "private-key": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY,
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  if (!user || loading) {
    return (
      <div
        style={{
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loader type="TailSpin" color="#002766" height={80} width={80} timeout={1000} />
      </div>
    );
  } else {
    return (
      <div className="chats-page">
        <div className="nav-bar">
          <div className="logo-tab">Chatter</div>
          <div className="logout-tab" onClick={handleLogout} style={{ fontSize: "1.5rem" }}>
            Logout
          </div>
        </div>

        <ChatEngine
          height="calc(100vh - 66px)"
          projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
          userName={user.email}
          userSecret={user.uid}
        />
      </div>
    );
  }
};
export default Chats;
