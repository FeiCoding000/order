import React from "react";
import { Box, IconButton } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useNavigate } from "react-router-dom";

export const Topbar = () => {
  const navigate = useNavigate();
  return (
    <Box display="flex" justifyContent="space-between" position={"sticky"} top={0} zIndex={1} bgcolor="#464e7e">
      <Box
        display="flex"
        borderRadius="3px"
      ></Box>

      {/* icons */}
      <Box display="flex" className="topbar_icons" >
        <IconButton>
          <LightModeOutlinedIcon className="topbar_icon" sx={{ color: 'white' }} />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon className="topbar_icon" sx={{ color: 'white' }}/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon className="topbar_icon" sx={{ color: 'white' }}/>
        </IconButton>
        <IconButton className="topbar_icon" onClick={() => navigate("/login")}>
          <PersonOutlinedIcon sx={{ color: 'white' }}/>
        </IconButton>
        </Box>
    </Box>
  );
};
