import HeaderChat from "./header/HeaderChat";
import './uichat.css'
import SimpleBottomNavigation from "./Sidebar/menuchat";
import SearchAppBar from "./Sidebar/SearchAppBar";
import Main from "./main/Main";



function UiChat(){
    return(
        <div className="container_chat_ui">
            <header className="container_header">
                <HeaderChat/>
            </header>
            <main>
                <Main/>
            </main>
            <menu>
                <p>hassan</p>
            </menu>
            <sidebar>
                <SearchAppBar/>
                <SimpleBottomNavigation/>
                <div className="list_userNames_chat">
                    <p>hassan</p>
                </div>
            </sidebar>
        </div>
    )
}
export default UiChat