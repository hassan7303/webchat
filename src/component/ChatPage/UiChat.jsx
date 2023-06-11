import HeaderChat from "./header/HeaderChat";
import './uichat.css'
import SimpleBottomNavigation from "./Sidebar/menuchat";
import SearchAppBar from "./Sidebar/SearchAppBar";
import Main from "./main/Main";
import Avatar from '@mui/material/Avatar';


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
                <div className="box_users">
                    <div className="list_userNames_chat">
                        <div className="users_cadr">
                            <div className="avatar_in_list_user">
                                <Avatar alt="Avatar" src="./header/girl-5.jpg" />
                            </div>
                            <div>
                                <p className="name_user_in_list">
                                    اقای عسکری
                                </p>
                                <div className="message_end">
                                    <p>سلام خوبی</p>
                                </div>
                            </div>
                            <div className="time_recently">
                                <p>۹:۱۸</p>
                            </div>
                        </div>
                    </div>
                </div>
            </sidebar>
        </div>
    )
}
export default UiChat