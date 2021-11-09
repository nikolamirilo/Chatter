import React from "react";

const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  } else {
    return (
      <div
        className="message"
        style={{ float: "right", color: "white", backgroundColor: "#002766" }}
      >
        <p>{message.text}</p>
      </div>
    );
  }
};

export default MyMessage;
