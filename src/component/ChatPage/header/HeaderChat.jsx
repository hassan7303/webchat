import Avatar from '@mui/material/Avatar';
import '../uichat.css'
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhoneIcon from '@mui/icons-material/Phone';
import {AppBar, Toolbar} from "@mui/material";
function HeaderChat(){
    return(
        <AppBar position="fixed">
        <Toolbar>
            <div className="profile_information">
                <Avatar alt="Avatar" src="./girl-5.jpg" />
                <div className="header_name_user">
                    <p className="data_username_profill">اقای عسکری</p>
                    <p className="date_seen">اخرین بازدید به تازگی</p>
                </div>
            </div>
            <div className="icons_header">
                <svg className="icons">
                    <PhoneIcon/>
                </svg>
                <svg className="icons">
                    <SearchIcon/>
                </svg>
                <svg className="icons">
                    <MoreVertIcon/>
                </svg>

            </div>
        </Toolbar>
        </AppBar>
    )
}
export default HeaderChat;