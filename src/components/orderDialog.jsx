import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BlockIcon from "@mui/icons-material/Block";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import HailIcon from "@mui/icons-material/Hail";
import { purple } from '@mui/material/colors';
import {
  Dialog,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  Switch,
  Slider,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  colors,
} from "@mui/material";

export const OrderDialog = ({ open, close, type, formik }) => {
  const color = purple[900];
  return (
    <Dialog open={open} onClose={close} maxWidth="sm" fullWidth>
      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
          color: "text.primary",
          boxShadow: 3,
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            pb: 1,
            borderBottom: "1px solid",
            borderColor: "grey.300",
          }}
        >
          Customize Your Order
        </DialogTitle>

        <Typography variant="h6" textAlign="center" sx={{ my: 2 }}>
          {type}
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <input type="hidden" name="type" value={type} />

          <Grid container spacing={2}>
            {/* Strength */}
            <Grid item xs={12}>
              <FormControl fullWidth variant="filled">
                <InputLabel shrink>Strength</InputLabel>
                <Select
                  name="strength"
                  value={formik.values.strength}
                  onChange={formik.handleChange}
                >
                  {[1 / 2, 1, 2, 3, 4].map((val) => (
                    <MenuItem key={val} value={val}>
                      {val}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Milk */}
            <Grid item xs={12}>
              <FormControl fullWidth variant="filled">
                <InputLabel>Milk</InputLabel>
                <Select
                  name="milk"
                  value={formik.values.milk}
                  onChange={formik.handleChange}
                >
                  {[
                    "Full Cream",
                    "Lite",
                    "Oat",
                    "Soy",
                    "Almond",
                    "Lactose free",
                    "None",
                  ].map((milk) => (
                    <MenuItem key={milk} value={milk}>
                      {milk}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Switches */}
            {[
              { name: "isIced", label: "Iced", icon: AcUnitIcon },
              { name: "isDecaf", label: "Decaf", icon: BlockIcon },
              {
                name: "isExtraHot",
                label: "Extra Hot",
                icon: DeviceThermostatIcon,
              },
              { name: "isClient", label: "Client", icon: HailIcon },
            ].map(({ name, label, icon: Icomponent }) => (
              <Grid item xs={6} key={name} sx={{color:"#464E7E"}}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box display="flex" alignItems="left">
                    <Icomponent/>
                    <Typography>{label}</Typography>
                  </Box>
                  <Switch
                    name={name}
                    checked={formik.values[name]}
                    color="secondary"
                    // onChange={formik.handleChange}
                    onChange={(e) => {
                      const { checked } = e.target;
                      if (name === "isIced" && checked) {
                        formik.setFieldValue("isIced", true);
                        formik.setFieldValue("isExtraHot", false);
                      } else if (name === "isExtraHot" && checked) {
                        formik.setFieldValue("isExtraHot", true);
                        formik.setFieldValue("isIced", false);
                      } else {
                        formik.setFieldValue(name, checked);
                      }
                    }}
                    disabled={
                      name === "isDecaf" && formik.values.category !== "coffee"
                    }
                  />
                </Box>
              </Grid>
            ))}

            {/* Sugar Slider */}
            <Grid item xs={12} >
              <Typography gutterBottom>Sugar</Typography>
              <Slider
                name="sugar"
                value={formik.values.sugar}
                onChange={formik.handleChange}
                min={0}
                max={5}
                step={1}
                sx={{color:"#464E7E"}}
                valueLabelDisplay="auto"
              />
            </Grid>

            {/* customerName or add info */}
            <Grid item xs={12} >
              <Typography gutterBottom>Name & Requirment</Typography>
              <TextField
                fullWidth
                name="customerName"
                value={formik.values.customerName}
                onChange={formik.handleChange}
                sx={{height: "70px"}}
              ></TextField>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  px: 3,
                  py: 0.8,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: 2,
                  backgroundColor: "#464e7e"
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Dialog>
  );
};
