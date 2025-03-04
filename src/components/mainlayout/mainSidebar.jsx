import { Box } from "@mui/material";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import { Link } from "react-router-dom";
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ForumIcon from '@mui/icons-material/Forum';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export const MainSidebar = () => {
  return (
    <Box className="sidebar" 
    style={{ height: "100px", 
    bgcolor: "transparent",
    position: "sticky", 
    top: 0, zIndex: 1 , 
    width: "200px", 
    Padding: "-10px"
    }}>
      
      <Box  sx={{ textAlign: "center" }}>
      <img 
        src="https://cdn.prod.website-files.com/650aedb6397a7021a593e810/672ac5664163926064db6bd7_scyne-logo.svg" 
        alt="Scyne Logo" 
        style={{ height: '40px', width: 'auto' }}
      />
      </Box>


        <Menu iconShape="square">
          <MenuItem 
          icon={<MenuBookIcon />}
          component={<Link />} 
          to="/menu">
            Menu
          </MenuItem>
          <MenuItem 
          icon={<BarChartIcon />}
          component={<Link />}
          to="/data">
            Statistic
          </MenuItem>
          <MenuItem
            icon={<ForumIcon />}
            component={<Link />}
            to="/feedback"
          >Feedback</MenuItem>
          <MenuItem
            icon={<NewspaperIcon />}
            component={<Link />}
            to="/news"
          >News</MenuItem>
        </Menu>
      
    </Box>
  );
};
