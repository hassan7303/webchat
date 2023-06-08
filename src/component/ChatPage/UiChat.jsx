import HeaderChat from "./header/HeaderChat";
import './uichat.css'
import SimpleBottomNavigation from "./Sidebar/menuchat";
import SearchAppBar from "./Sidebar/Sidebar";



function UiChat(){
    return(
        <div className="container_chat_ui">
            <header className="container_header">
                <HeaderChat/>
            </header>
            <main>

            </main>
            <menu>
                <p>hassan</p>
            </menu>
            <aside>
                <SearchAppBar/>
                <SimpleBottomNavigation/>
                <p>hassan</p>
            </aside>
        </div>
    )
}
export default UiChat