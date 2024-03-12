import MessageBox from "./components/MessageBox";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "./redux/slices";
import AnotherMessageBox from "./components/AnotherMessageBox";
function App() {
  const dis = useDispatch();

  // const messages = useSelector((state) => {
  //   state.messages.map((msg) => console.log(msg.text));
  // });

  return (
    <div className="main">
      <MessageBox username="Cyrus" />
      <AnotherMessageBox username="Maharjan" />
    </div>
  );
}

export default App;
