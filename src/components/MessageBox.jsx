import React, { useRef, useEffect } from "react";
import { sendMessage } from "../redux/slices";
import { useDispatch, useSelector } from "react-redux";
// first message box (sender)
function MessageBox({ username }) {
  const dis = useDispatch();
  const messageForm = useRef();
  const messages = useSelector((state) => state.messages);
  useEffect(() => {
    const scrollableDiv = document.querySelector(".scrollable");
    scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
  }, [messages]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = messageForm.current.message.value;
    if (text.trim() != "") {
      dis(sendMessage({ sentBy: "cyrus", text: text }));
      messageForm.current.message.value = "";
    }
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
      <div className="body scrollable">
        {messages.map((msg) => {
          if (msg.sentBy == "cyrus") {
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
export default MessageBox;
