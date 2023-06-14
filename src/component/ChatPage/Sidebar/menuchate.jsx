import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
function MenuChate() {
  return (
    <div className="box_users">
      <div className="list_userNames_chat">
        <div className="users_cadr">
          <div className="avatar_in_list_user">
            <Avatar alt="Avatar" src="./header/girl-5.jpg" />
          </div>
          <div>
            <p className="name_user_in_list">اقای عسکری</p>
            <div className="message_end">
              <p>سلام خوبی</p>
            </div>
          </div>
          <div className="time_recently">
            <p>۹:۱۸</p>
          </div>
        </div>
      </div>
      <Fab color="secondary" aria-label="edit" style={{position: "absolute",
    bottom: "21vh",
    left: "3vw"}}>
        <EditIcon />
      </Fab>
    </div>
  );
}
export default MenuChate;
