import { Link } from "react-scroll";
import { Box, Grid, Button,  } from "@mui/material";
import { BorderBottom } from "@mui/icons-material";

export const NavigationBar = () => {
  return (
    <Box sx={{  bgcolor: "transparent", borderBottom:1 }} >
      <Grid container spacing={4} justifyContent="center">
      <Grid item>
      <img 
        src="https://cdn.prod.website-files.com/650aedb6397a7021a593e810/672ac5664163926064db6bd7_scyne-logo.svg" 
        alt="Scyne Logo" 
        style={{ height: '40px', width: 'auto' }}
      />
      </Grid>
      
        <Grid item>
          <Link to="coffee-section" smooth={true} duration={500}>
            <Button color="white">Coffee</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="tea-section" smooth={true} duration={500}>
            <Button color="white">Tea</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="choc&chai-section" smooth={true} duration={500}>
            <Button color="white">Chocolate & Chai</Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
