import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DirectionsIcon from "@mui/icons-material/Directions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import {useState} from "react";
export default function InputSendMessage() {
    const [sendMessage,setSendMessage]=useState()
    console.log(sendMessage);
  return (
    <Paper
      component="form"
      style={{ borderRadius: "36px", width: "42vw" }}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <IconButton
        sx={{ p: "10px" }}
        aria-label="menu"
        style={{ transform: "rotate(45deg)" }}
      >
        <AttachFileIcon />
      </IconButton>

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="پیام"
        onChange={(event)=>setSendMessage(event.target.value)}
      />

      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <InsertEmoticonIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        color="primary"
        sx={{ p: "10px" }}
        aria-label="directions"
        style={{ transform: "rotate(180deg)" }}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
