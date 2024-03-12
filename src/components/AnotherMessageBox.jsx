import React, { useEffect, useRef, useState } from "react";
import { sendMessage, updateShowTime } from "../redux/slices";
import { useDispatch, useSelector } from "react-redux";
function AnotherMessageBox({ username }) {
  const [clicked, setClicked] = useState(false);
  const dis = useDispatch();
  const messageForm = useRef();
  const messages = useSelector((state) => state.messages);
  useEffect(() => {
    const scrollableDiv = document.querySelector(".anotherscrollable");
    scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
  }, [messages]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = messageForm.current.message.value;
    dis(sendMessage({ sentBy: "maharjan", text: text }));
    messageForm.current.message.value = "";
  };
  return (
    <div className="msgbox">
      <div className="header">
        <div className="user">
          <div className="dp"></div>
          <div className="username">
            <p className="usertitle">{username}</p>
            <p className="online">online</p>
          </div>
        </div>
        <div className="icons">
          <i className="ri-more-2-fill more"></i>
        </div>
      </div>
      <div className="body anotherscrollable">
        {messages.map((msg) => {
          if (msg.sentBy !== "cyrus") {
            return (
              <div key={msg.id} className="msg-cont r">
                <span className="msg right">{msg.text}</span>
              </div>
            );
          } else {
            return (
              <div key={msg.id} className="msg-cont l">
                <span className="msg left">{msg.text}</span>
              </div>
            );
          }
        })}
      </div>
      <form className="sendmsg" onSubmit={handleSubmit} ref={messageForm}>
        <input
          className="msg-input"
          type="text"
          name="message"
          placeholder="Message"
          autoComplete="off"
        />
        <button type="submit">
          <i className="ri-send-plane-fill text-blue-700 send"></i>
        </button>
      </form>
    </div>
  );
}
export default AnotherMessageBox;
