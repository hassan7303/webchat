import "../uichat.css";
import InputSendMessage from "../../Inputs/InputSendMessage";
function Main() {
  return (
    <div className="bg_main">
      <div className="main_body" dir="rtl">
        <div className="container_main">
          <div className="container_message_send">
            <div className="message_send">
              <p> 🥹 سلام خوبی</p>
            </div>
          </div>

          <div className="container_message_receive">
            <div className="message_receive">
              <p> سلام خوبم تو خوبی </p>
            </div>
          </div>

          <div className="container_message_send">
            <div className="message_send">
              <p>منم خوبم شکر چه خبر؟ </p>
            </div>
          </div>
          <div className="container_message_receive">
            <div className="message_receive">
              <p>سلامتیت خبر خواصی نیست</p>
            </div>
          </div>
        </div>
        <footer>
          <InputSendMessage />
        </footer>
      </div>
    </div>
  );
}
export default Main;
