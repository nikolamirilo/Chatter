import React from "react";

const TheirMessage = ({ lastMessage, message, userName }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "34px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "rgba(220, 220, 220)",
            color: "#000000",
            marginLeft: isFirstMessageByUser ? "4px" : "34px",
          }}
        >
          <p>{message.text}</p>
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
