import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { ArrowUpOutlined, PaperClipOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;
  const [hover, setHover] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });

    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message"
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PaperClipOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <button
        type="submit"
        className="send-button"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          cursor: "pointer",
          backgroundColor: hover ? "#002766" : "#082766",
          display: "inline-block",
          padding: "6px 3px",
          borderRadius: "10px",
          transform: "rotate(90deg)",
        }}
      >
        <ArrowUpOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
