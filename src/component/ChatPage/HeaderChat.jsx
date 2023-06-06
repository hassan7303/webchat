import Avatar from '@mui/material/Avatar';
import './uichat.css'
function HeaderChat(){
    return(
        <>
            <Avatar alt="Avatar" src="./girl-5.jpg" />
            <div className="header_name_user">
                <p className="data_username_profill">اقای عسکری</p>
                <p className="date_seen">last seen recently</p>
            </div>
        </>
    )
}
export default HeaderChat;