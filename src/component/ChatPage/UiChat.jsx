import HeaderChat from "./header/HeaderChat";
import FullWidthTabs from './Sidebar/menugrop'
import SearchAppBar from "./Sidebar/SearchAppBar";
import Main from "./main/Main";
import "./uichat.css";
import MenuChate from "./Sidebar/menuchate";



function UiChat() {
  return (
    <div className="container_chat_ui">
      <header className="container_header">
        <HeaderChat />
      </header>
      <main>
        <Main />
      </main>
      <menu>
        <p>hassan</p>
      </menu>
      <sidebar>
        <SearchAppBar />
        <FullWidthTabs />
        <MenuChate />
      </sidebar>
    </div>
  );
}
export default UiChat;
