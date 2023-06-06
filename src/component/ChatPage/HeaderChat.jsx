import Avatar from '@mui/material/Avatar';
import './uichat.css'
function HeaderChat(){
    return(
        <>
            <Avatar alt="Avatar" src="./girl-5.jpg" />
            <div className="header_name_user">
                <p>اقای عسکری</p>
                <p>last seen recently</p>
            </div>
        </>
    )
}
export default HeaderChat;